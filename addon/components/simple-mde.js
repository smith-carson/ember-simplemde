import Ember from 'ember';
import layout from '../templates/components/simple-mde';

const {
  assign,
  get,
  testing,
} = Ember;

/*global SimpleMDE*/

export default Ember.TextArea.extend({
  layout,

  /**
   * @private
   * @variable
   * to hold the SimpleMDE instance
   */
  currentEditor: null,

  /**
   * action to call when the value on the editor changes
   */
  change: null,

  /**
  * instance options to pass to simpleMDE
  */
  options: {},

  /**
  * default simpleMDE options
  */
  defaultSimpleMdeOptions: Ember.computed(function () {
    return {
      showIcons: ['table'],
    };
  }),

  /**
  * global options defined in consuming apps config
  */
  globalSimpleMdeOptions: Ember.computed(function() {
    if(testing) {
      return {};
    } else {
      return get(Ember.getOwner(this).resolveRegistration('config:environment'), 'simpleMDE') || {};
    }
  }),

  /**
   * @method
   * @private
   * get the list of options to pass to init the SimpleMDE instance
   */
  buildSimpleMDEOptions: Ember.computed(function () {
    return assign({}, this.get('defaultSimpleMdeOptions'), this.get('globalSimpleMdeOptions'), this.get('options'));
  }),

  /**
   * @event
   * @public
   * instantiate the editor with the contents of value
   */
  didInsertElement () {
    this.set('currentEditor', new SimpleMDE(
      Ember.merge({
        element: document.getElementById(this.elementId)
      }, this.get('buildSimpleMDEOptions')
      )
    ));
    this.get('currentEditor').value(this.get('value'));

    this.get('currentEditor').codemirror.on('change', () => {
      this.sendAction('change', this.get('currentEditor').value());
    });
  },

  /**
   * @event
   * @public
   * updates the editor when the value property change from the outside
   */
  didReceiveAttrs () {
    let editor = this.get('currentEditor');
    if (Ember.isEmpty(editor)) { return; }
    let cursor = editor.codemirror.getDoc().getCursor();
    editor.value(this.get('value'));
    editor.codemirror.getDoc().setCursor(cursor);
  }
});

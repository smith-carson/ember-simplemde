import Ember from 'ember';
import layout from '../templates/components/simple-mde';

const {
  assign,
  get,
  testing,
  typeOf,
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
    let builtOptions = assign({}, this.get('defaultSimpleMdeOptions'), this.get('globalSimpleMdeOptions'), this.get('options'));

    if(builtOptions.toolbar && typeOf(builtOptions.toolbar) === 'array') {
      builtOptions.toolbar.forEach(this.unpackToolbarOption);
    }

    return builtOptions;
  }),

  /**
   * @method
   * @private
   * Because simpleMDE needs toolbar options action handler to be a function reference,
   * and if toolbar options are passed in from the consuming apps config they are passed in as strings.
   * Thus, we unpack them and restore the global reference.
   * If the toolbar action handler is a string, we attempt to reference the global function reference matching that string.
   */
  unpackToolbarOption: function(toolbarOption) {
    if(typeOf(toolbarOption.action) === 'string') {
      toolbarOption.action = toolbarOption.action
        .split('.')
        .reduce(function(accumulator, value) {
          if(!accumulator) {
            accumulator = window[value];
          } else {
            accumulator = accumulator[value];
          }
          return accumulator;
        }, null);
    }
  },

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
    this.get('currentEditor').value(this.get('value') || '');

    this.get('currentEditor').codemirror.on('change', () => Ember.run.once(this, function() {
      this.sendAction('change', this.get('currentEditor').value());
    }));
  },

  willDestroyElement() {
    this.get('currentEditor').toTextArea();
    this.set('currentEditor', null);
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
    editor.value(this.get('value') || '');
    editor.codemirror.getDoc().setCursor(cursor);
  }
});

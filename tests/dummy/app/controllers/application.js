import Ember from 'ember';

export default Ember.Controller.extend({
  newValue: null,
  value: "This is a test with **bold** and _italic_",

  simpleMdeOptionsWithNoToolbar: {
    toolbar: false
  },

  simpleMdeOptionsWithCustomToolbar: {
    toolbar: [
      {
        name: 'bold',
        action: 'SimpleMDE.toggleBold',
        className: 'fa fa-bold',
        title: 'Bold'
      }
    ]
  },

  simpleMdeOptionsWithCustomToolbarFunctionRefHandler: {
    toolbar: [
      {
        name: 'custom',
        action: function(editor) {
          Ember.Logger.log(editor);
          // Do custom stuff here.
        },
        className: 'fa fa-bath',
        title: 'Custom'
      }
    ]
  },

  actions: {
    showNewValue (value) {
      this.set('newValue', value);
    }
  }
});

import Controller from '@ember/controller';
import Ember from 'ember';

const simpleMdeOptionsWithNoToolbar = {
  toolbar: false
};

const simpleMdeOptionsWithCustomToolbar = {
  toolbar: [
    {
      name: 'bold',
      action: 'SimpleMDE.toggleBold',
      className: 'fa fa-bold',
      title: 'Bold'
    }
  ]
};

const simpleMdeOptionsWithCustomToolbarFunctionRefHandler = {
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
};

export default Controller.extend({
  newValue: null,
  value: "This is a test with **bold** and _italic_",

  simpleMdeOptionsWithNoToolbar: simpleMdeOptionsWithNoToolbar,

  simpleMdeOptionsWithCustomToolbar: simpleMdeOptionsWithCustomToolbar,

  simpleMdeOptionsWithCustomToolbarFunctionRefHandler: simpleMdeOptionsWithCustomToolbarFunctionRefHandler,

  actions: {
    showNewValue (value) {
      this.set('newValue', value);
    }
  }
});

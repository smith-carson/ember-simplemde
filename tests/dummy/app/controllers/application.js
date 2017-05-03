import Ember from 'ember';

export default Ember.Controller.extend({
  newValue: null,
  value: "This is a test with **bold** and _italic_",

  simpleMdeOptions: {
    toolbar: false
  },

  actions: {
    showNewValue (value) {
      this.set('newValue', value);
    }
  }
});

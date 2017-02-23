import Ember from 'ember';

export default Ember.Controller.extend({
  newValue: null,
  value: "This is a test with **bold** and _italic_",


  actions: {
    showNewValue (value) {
      this.set('newValue', value);
    }
  }
});

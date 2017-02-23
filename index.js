/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-simplemde',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app) {
    this._super.included(app);

    this.app.import(app.bowerDirectory + '/simplemde/dist/simplemde.min.js');
    this.app.import(app.bowerDirectory + '/simplemde/dist/simplemde.min.css');
  }
};

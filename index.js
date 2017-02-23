/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-simplemde',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  included: function(app, parentAddon) {
    this._super.included(...arguments);
    while (app.app) {
      app = app.app;
    }

    let target = parentAddon || app;

    target.import(`${target.bowerDirectory}/simplemde/dist/simplemde.min.js`);
    target.import(`${target.bowerDirectory}/simplemde/dist/simplemde.min.css`);
  }
};

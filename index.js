/* jshint node: true */
'use strict';

var path = require('path');

module.exports = {
  name: 'ember-simplemde',

  blueprintsPath: function() {
    return path.join(__dirname, 'blueprints');
  },

  options: {
    nodeAssets: {
      'simplemde': {
        srcDir: 'dist',
        import: [
          'simplemde.min.js',
          'simplemde.min.css'
        ],
      },
    }
  },
};

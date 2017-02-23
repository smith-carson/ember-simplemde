/*jshint node:true*/
module.exports = {
  description: 'bower dependencies for ember-simplemde',

  normalizeEntityName: function() {},

  afterInstall: function(options) {
    return this.addBowerPackageToProject('simplemde', '^1.11.2');
  }
};

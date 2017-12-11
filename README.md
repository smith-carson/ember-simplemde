# ember-simplemde
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Latest NPM release](https://img.shields.io/npm/v/ember-simplemde.svg)](https://www.npmjs.com/package/ember-simplemde)
[![Ember Observer Score](http://emberobserver.com/badges/ember-simplemde.svg)](http://emberobserver.com/addons/ember-simplemde)
[![License](https://img.shields.io/npm/l/ember-simplemde.svg)](LICENSE.md)
[![Dependencies](https://img.shields.io/david/smith-carson/ember-simplemde.svg)](https://david-dm.org/smith-carson/ember-simplemde)
[![Dev Dependencies](https://img.shields.io/david/dev/smith-carson/ember-simplemde.svg)](https://david-dm.org/smith-carson/ember-simplemde#info=devDependencies)
[![Build Status](https://travis-ci.org/smith-carson/ember-simplemde.svg?branch=master)](https://travis-ci.org/smith-carson/ember-simplemde)

A wrapper around the SimpleMDE editor for use in ember-cli projects, it provides a component `simple-mde` to show the editor, and a helper to show the rendered html `simple-mde-preview` you can check this on the dummy app application template.

## Usage on ember project

* Install with `ember install ember-simplemde`

* Use the component with:

    ```
    // Controller
    theValue: "This is a test of **simpleMDE**"
    ```

    ```
    {{simple-mde value=theValue change=(action (mut theValue))}}
    ```

* Use the helper like this:

  ```
  {{simple-mde-preview theValue}}
  ```

## Passing options to simpleMDE

ember-simplemde supports all options that SimpleMDE supports.

[full list of all simpleMde options](https://github.com/sparksuite/simplemde-markdown-editor#configuration)

You can pass options through to the simpleMDE instance in two ways.

#### Define Options in your ember config that will be applied to all simpleMDE instances
You can pass global options that will be applied to all editors via the consuming apps `config/environment` with a property called `simpleMDE`. For example, if you wanted to remove the toolbar from all instances:

```
module.exports = function(environment) {
  var ENV = {
    ...
    simpleMDE: {
      toolbar: false,
      ... any simpleMDE options go here
    },
    ...
  };
```

Note on toolbar options action handlers: If you are customizing the simpleMDE toolbar options from the consuming apps config, simpleMDE needs you to pass toolbar option action handlers as function references. In ember configs, we can only express these function references as strings. Ember-simplemde has a mechanism in place to unpack these strings as function references against the window.SimpleMDE global. So, if you are expressing a custom toolbar option from your consuming apps config, pass the toolbar action handlers as strings.  If you are passing options to the instance and not using your ember/config you can use function reference's/definitions like normal.

For example, the action handler below will be unpacked against the window as
```
window['SimpleMDE']['toggleBold']
```

```
module.exports = function(environment) {
  var ENV = {
    ...
    simpleMDE: {
      toolbar: [
        {
          name: 'bold',
          action: 'SimpleMDE.toggleBold',
          className: 'fa fa-bold',
          title: 'Bold'
        }
      ]
    },
    ...
  };
```

#### Define options on the individual editor instance
You can pass instance options via the simple-mde components `options` attribute. The options attribute will overwrite global options via `ember.assign` so if you want instance options to squash global options you can use this. An example of this is in the `tests/dummy/app/application.hbs` and the corresponding application controller.

```
{{simple-mde value=value options=simpleMdeOptions}}
```

Note: This options parameter is NOT watched. Changing it during runtime will not change the instance properties.

## Installation

* `git clone https://github.com/smith-carson/ember-simplemde.git`
* `cd ember-simplemde`
* `npm install`
* `bower install`

## Running

* `ember serve`
* Visit your app at [http://localhost:4200](http://localhost:4200).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [http://ember-cli.com/](http://ember-cli.com/).

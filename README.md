# ember-simplemde
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg)](http://standardjs.com/)
[![Latest NPM release](https://img.shields.io/npm/v/ember-simplemde.svg)](https://www.npmjs.com/package/ember-simplemde)
[![Ember Observer Score](http://emberobserver.com/badges/ember-simplemde.svg)](http://emberobserver.com/addons/ember-simplemde)
[![License](https://img.shields.io/npm/l/ember-simplemde.svg)](LICENSE.md)
[![Dependencies](https://img.shields.io/david/smith-carson/ember-simplemde.svg)](https://david-dm.org/smith-carson/ember-simplemde)
[![Dev Dependencies](https://img.shields.io/david/dev/smith-carson/ember-simplemde.svg)](https://david-dm.org/smith-carson/ember-simplemde#info=devDependencies)

A wrapper around the SimpleMDE editor for use in ember-cli projects

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

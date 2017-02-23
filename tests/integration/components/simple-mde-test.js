import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('simple-mde', 'Integration | Component | simple mde', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{simple-mde}}`);

  // Checks that the separators are shown from the toolbar
  assert.ok(this.$().text().trim().indexOf('|||') >= 0);
});

test('it renders the value passed', function(assert) {
  this.set('markdownValue', 'This is a **bold** text');
  this.render(hbs`{{simple-mde value=markdownValue}}`);

  assert.ok(this.$().text().trim().indexOf('This is a **bold** text') >= 0);
});

test('it renders the new value passed', function(assert) {
  this.set('markdownValue', 'This is a **bold** text');
  this.render(hbs`{{simple-mde value=markdownValue}}`);
  assert.ok(this.$().text().trim().indexOf('This is a **bold** text') >= 0);

  this.set('markdownValue', 'Only text');
  assert.ok(this.$().text().trim().indexOf('Only text') >= 0);
});

/*
test('buble change action back', function(assert) {
  let self = this;
  this.set('markdownValue', 'This is a **bold** text');
  this.on('changeMethodCalled', function (val) {
    assert.ok(self.$().text().trim().indexOf(val) >= 0);
  });
  this.render(hbs`{{simple-mde value=markdownValue change="changeMethodCalled"}}`);

  // TODO not sure how to send actions to the editor to fire the change action
  this.$('textarea').trigger('keydown', 'z');

  // Checks that the separators are shown from the toolbar
  assert.ok(this.$().text().trim().indexOf('z') >= 0);
});
*/

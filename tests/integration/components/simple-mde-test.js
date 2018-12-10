import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render, find } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | simple mde', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {

    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.on('myAction', function(val) { ... });

    await render(hbs`{{simple-mde}}`);

    // Checks that the separators are shown from the toolbar
    assert.ok(find('*').textContent.trim().indexOf('|||') >= 0);
  });

  test('it renders the value passed', async function(assert) {
    this.set('markdownValue', 'This is a **bold** text');
    await render(hbs`{{simple-mde value=markdownValue}}`);

    assert.ok(find('*').textContent.trim().indexOf('This is a **bold** text') >= 0);
  });

  test('it renders the new value passed', async function(assert) {
    this.set('markdownValue', 'This is a **bold** text');
    await render(hbs`{{simple-mde value=markdownValue}}`);
    assert.ok(find('*').textContent.trim().indexOf('This is a **bold** text') >= 0);

    this.set('markdownValue', 'Only text');
    assert.ok(find('*').textContent.trim().indexOf('Only text') >= 0);
  });

  test('it respects options passed to simpleMDE via component options param', async function(assert) {
    this.set('markdownValue', 'This is a **bold** text');
    this.set('simpleMdeOptions', {
      toolbar: false
    });
    await render(hbs`{{simple-mde value=markdownValue options=simpleMdeOptions}}`);

    assert.ok(find('*').textContent.trim().indexOf('This is a **bold** text') >= 0);

    assert.equal(find('.editor-toolbar'), null);
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
});

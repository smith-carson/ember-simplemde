
import { simpleMdePreview } from 'dummy/helpers/simple-mde-preview';
import { module, test } from 'qunit';

module('Unit | Helper | simple mde preview');

// Replace this with your real tests.
test('it works', function(assert) {
  let result = simpleMdePreview(["This is a **text** that should be rendered in *HTML*"]);

  assert.equal("<p>This is a <strong>text</strong> that should be rendered in <em>HTML</em></p>\n", result.string);
});


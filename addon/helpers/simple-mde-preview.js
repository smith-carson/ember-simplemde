import Ember from 'ember';

export function simpleMdePreview(params/*, hash*/) {
  Ember.assert('This helper requires one string parameter', params.length === 1);
  let plainText = params[0];
  if (Ember.isEmpty(plainText)) {
    return '';
  }
  Ember.assert('Parameter should be string', Ember.typeOf(plainText) === 'string');
  let rendered = SimpleMDE.prototype.markdown(plainText);
  return Ember.String.htmlSafe(rendered);
}

export default Ember.Helper.helper(simpleMdePreview);

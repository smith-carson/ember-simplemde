import { helper as buildHelper } from '@ember/component/helper';
import { htmlSafe } from '@ember/template';
import { isEmpty, typeOf } from '@ember/utils';
import { assert } from '@ember/debug';
/*global SimpleMDE*/

export function simpleMdePreview(params/*, hash*/) {
  assert('This helper requires one string parameter', params.length === 1);
  let plainText = params[0];
  if (isEmpty(plainText)) {
    return '';
  }
  assert('Parameter should be string', typeOf(plainText) === 'string');
  let rendered = SimpleMDE.prototype.markdown(plainText);
  return htmlSafe(rendered);
}

export default buildHelper(simpleMdePreview);

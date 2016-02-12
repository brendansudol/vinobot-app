// Formula:
// sentence 1: [first_impression] [conjunction] [adjective].
// sentence 2: [leadin] [flavor], [adjective] [flavor], and [qualifier] [flavor].
// sentence 3: drink [when_start] through [when_end].

import sample from 'lodash/fp/sample'
import capitalize from 'lodash/fp/capitalize'

import {
  first_impression,
  conjunction,
  adjective,
  varietal,
  leadin,
  flavor,
  qualifier,
  when_start,
  when_end
} from './words.js';

function _sentence_1() {
  let fi = sample(first_impression);
  let c = sample(conjunction);
  let a = sample(adjective);

  return `${capitalize(fi)} ${c} ${a}.`
}

function _sentence_2() {
  let li = sample(leadin);
  let f1 = sample(flavor);
  let f2 = sample(flavor);
  let f3 = sample(flavor);
  let a = sample(adjective);
  let q = sample(qualifier);

  return `${capitalize(li)} ${f1}, ${a} ${f2}, and ${q} ${f3}.`
}

function _sentence_3() {
  let ns = sample(when_start);
  let ne = sample(when_end);

  return `Drink ${ns} through ${ne}.`
}

function generate_note() {
  let note = `${_sentence_1()} ${_sentence_2()} ${_sentence_3()}`
  console.log(note);
}

export default generate_note

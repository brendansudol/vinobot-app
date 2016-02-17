// Formula:
// sentence 1: [first_impression] [conjunction] [adjective].
// sentence 2: [leadin] [flavor], [adjective] [flavor], and [qualifier] [flavor].
// sentence 3: drink [when_start] through [when_end].

import { sample, capitalize } from './helpers.js';

import {
  first_impression,
  conjunction,
  adjective,
  leadin,
  flavor,
  qualifier,
  when_start,
  when_end
} from './wine-words.js';


function sentence1() {
  let fi = sample(first_impression);
  let c = sample(conjunction);
  let a = sample(adjective);

  return `${capitalize(fi)} ${c} ${a}.`;
}

function sentence2() {
  let li = sample(leadin);
  let f1 = sample(flavor);
  let f2 = sample(flavor);
  let f3 = sample(flavor);
  let a = sample(adjective);
  let q = sample(qualifier);

  return `${capitalize(li)} ${f1}, ${a} ${f2}, and ${q} ${f3}.`;
}

function sentence3() {
  let ns = sample(when_start);
  let ne = sample(when_end);

  return `Drink ${ns} through ${ne}.`;
}

export default function() {
  return note = `${sentence1()} ${sentence2()} ${sentence3()}`;
}

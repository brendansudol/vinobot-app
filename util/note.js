import { sample } from "./sample"
import {
  firstImpression,
  conjunction,
  adjective,
  leadin,
  flavor,
  qualifier,
  whenStart,
  whenEnd,
} from "./words"

// Structure:
// sentence 1: [firstImpression] [conjunction] [adjective].
// sentence 2: [leadin] [flavor], [adjective] [flavor], and [qualifier] [flavor].
// sentence 3: drink [whenStart] through [whenEnd].

const capitalize = (text) => {
  if (typeof text !== "string") return text
  return text.charAt(0).toUpperCase() + text.slice(1)
}

const sentence1 = () => {
  const fi = sample(firstImpression)
  const c = sample(conjunction)
  const a = sample(adjective)

  return `${capitalize(fi)} ${c} ${a}.`
}

const sentence2 = () => {
  const li = sample(leadin)
  const f1 = sample(flavor)
  const f2 = sample(flavor)
  const f3 = sample(flavor)
  const a = sample(adjective)
  const q = sample(qualifier)

  return `${capitalize(li)} ${f1}, ${a} ${f2}, and ${q} ${f3}.`
}

const sentence3 = () => {
  const ns = sample(whenStart)
  const ne = sample(whenEnd)

  return `Drink ${ns} through ${ne}.`
}

export function generateNote() {
  return `${sentence1()} ${sentence2()} ${sentence3()}`
}

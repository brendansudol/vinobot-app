import { sample } from './helpers'

const colors = [
  '#EF5350', // red (400)
  '#F44336', // red (500)
  '#FF1744', // red (A400)
  '#E91E63', // pink
  '#9C27B0', // purple
  '#673AB7', // deep purple
  '#3F51B5', // indigo
  '#2196F3', // blue
  '#009688', // teal
  '#607D8B' // blue grey
]

export const getRandomColor = not => sample(colors, not)

const rbgNew = c => {
  const str = c.toString(16)
  return str.length !== 1 ? str : `0${str}`
}

export const shadeColor = (color, percent = 20) => {
  let R = parseInt(color.substring(1, 3), 16)
  let G = parseInt(color.substring(3, 5), 16)
  let B = parseInt(color.substring(5, 7), 16)

  R = parseInt(R * (100 + percent) / 100, 10)
  G = parseInt(G * (100 + percent) / 100, 10)
  B = parseInt(B * (100 + percent) / 100, 10)

  R = R < 255 ? R : 255
  G = G < 255 ? G : 255
  B = B < 255 ? B : 255

  return `#${rbgNew(R)}${rbgNew(G)}${rbgNew(B)}`
}

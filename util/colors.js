import { sample } from './helpers'

const colors = [
  '#EF5350', // red (400)
  '#F44336', // red (500)
  '#FF1744', // red (A400)
  '#2ECC71', // green
  '#673AB7', // deep purple
  '#3F51B5', // indigo
  '#2196F3', // blue
  '#009688', // teal
  '#607D8B' // blue grey
]

export const getRandomColor = not => sample(colors, not)

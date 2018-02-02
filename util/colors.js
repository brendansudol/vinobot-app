/* eslint-disable import/prefer-default-export */
import { sample } from './helpers'

const colors = [
  '#F44336', // red
  '#673AB7', // deep purple
  '#3F51B5', // indigo
  '#2196F3', // blue
  '#009688', // teal
  '#607D8B' // blue grey
]

export const getRandomColor = not => sample(colors, not)

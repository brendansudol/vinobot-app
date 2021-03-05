import { sample } from "./sample"

const COLORS = [
  "#f44336", // red
  "#673ab7", // deep purple
  "#3f51b5", // indigo
  "#2196f3", // blue
  "#009688", // teal
  "#607d8b", // blue grey
]

export const getRandomColor = (not) => sample(COLORS, not)

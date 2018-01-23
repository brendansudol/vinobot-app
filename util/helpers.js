export const sample = (items, not) => {
  const arr = !not ? items : items.filter(x => x !== not)
  const n = arr.length

  if (!n) return null
  return arr[Math.floor(Math.random() * n)]
}

export const capitalize = text => {
  if (typeof text !== 'string') return text
  return text.charAt(0).toUpperCase() + text.slice(1)
}

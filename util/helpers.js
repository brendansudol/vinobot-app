export function sample(items, not) {
  var array = not === undefined ? items : items.filter(a => a !== not),
      length = array.length;

  return length > 0 ? array[Math.floor(Math.random() * length)] : undefined;
}

export function capitalize(string) {
  if (typeof string !== 'string') return string;

  return string.charAt(0).toUpperCase() + string.slice(1);
}

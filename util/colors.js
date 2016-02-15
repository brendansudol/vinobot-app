import sample from 'lodash/fp/sample';

const colors = [
  '#0080ff',
  '#ffbf00',
  '#01df3a',
  '#ff0080',
  '#9966ff',
  '#ff0033',
];

export default function() {
  return sample(colors);
}

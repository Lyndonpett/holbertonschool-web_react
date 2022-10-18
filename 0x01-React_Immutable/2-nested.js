import { fromJS } from 'immutable';

export default function accessImmutableObject(object, array) {
  return fromJS(object).getIn(array);
}

// console.log(
//     accessImmutableObject({
//         name: {
//             first: 'Guillaume',
//             last: 'Salva',
//         },
//     }, ['name', 'first'])
// );

import { getIn } from 'immutable';

export default function accessImmutableObject(object, array) {
    return getIn(object, array);
}

// console.log(
//     accessImmutableObject({
//         name: {
//             first: 'Guillaume',
//             last: 'Salva',
//         },
//     }, ['name', 'first'])
// );
import { Map } from 'immutable';

// Create a function named mergeDeeplyElements
// It should accept two arguments, page1 and page2. Both are objects
// It should return a List containing the values of the two pages
// If two values are the same, they should combine each other

export default function mergeDeeplyElements(page1, page2) {
  return Map(page1).mergeDeep(page2);
}

// const page1 = {
//     'user-1': {
//         id: 1,
//         name: 'test',
//         likes: {
//             1: {
//                 uid: 1234,
//             },
//         },
//     },
// };

// const page2 = {
//     'user-1': {
//         likes: {
//             2: {
//                 uid: 134,
//             },
//         },
//     },
// };

// console.log(mergeDeeplyElements(page1, page2).toJS());

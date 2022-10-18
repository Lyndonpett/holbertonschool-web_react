import { Map } from 'immutable';

const getImmutableObject = (object) => {
    return Map(object);
};

export default getImmutableObject;

// const obj = {
//     fear: true,
//     smell: -1033575916.9145899,
//     wall: false,
//     thing: -914767132,
// };

// console.log(getImmutableObject(obj));
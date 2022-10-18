import { is } from 'immutable';
// import { Map } from 'immutable';

// Create a function named areMapsEqual
// It accepts two arguments map1 and map2. Both are Immutable.js Maps
// It should return true if the Maps are equal

export const areMapsEqual = (map1, map2) => {
    return is(map1, map2);
};

// const map1 = Map({
//     firstName: 'Guillaume',
//     lastName: 'Salva',
// });

// const map2 = Map({
//     firstName: 'Guillaume',
//     lastName: 'Salva',
// });

// console.log(areMapsEqual(map1, map2));
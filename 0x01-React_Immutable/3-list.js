import { List } from 'immutable';

// getListObject accepts an array as parameter and converts it into an immutable List using the Immutable.js library
const getListObject = (arr) => List(arr);

// addElementToList accepts two arguments: first one is a List and second one is a string
// append the string to the list and return the list

const addElementToList = (list, element) => list.push(element);

export { getListObject, addElementToList };

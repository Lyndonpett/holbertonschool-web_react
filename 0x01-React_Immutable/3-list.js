import { List } from 'immutable';

const getListObject = (arr) => List(arr);

const addElementToList = (list, element) => list.push(element);

export { getListObject, addElementToList };

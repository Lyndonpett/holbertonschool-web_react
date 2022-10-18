import { List, Map } from 'immutable';

//Create a function named concatElements
// It accepts two arguments page1 and page2. Both are arrays
// It should return a List containing the values of the two pages

export const concatElements = (page1, page2) => {
    return List(page1.concat(page2));
};

// Create a function named mergeElements
// It accepts two arguments page1 and page2. Both are objects
// It should return a List containing the values of the two pages
// If two values are the same, page2 values should be used.

export const mergeElements = (page1, page2) => {
    return Map(page1).merge(page2);
};
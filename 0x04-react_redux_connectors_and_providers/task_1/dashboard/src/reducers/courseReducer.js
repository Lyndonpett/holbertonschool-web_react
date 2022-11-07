const { Map, setIn } = require('immutable');
import { courseNormalizer } from '../schema/courses';
import { Actions } from '../actions/courseActionTypes';

const initialState = Map([]);

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_COURSE_SUCCESS:
      return state.merge(courseNormalizer(action.data));
    case Actions.SELECT_COURSE:
      return setIn(Map(state), [String(action.index), 'isSelected'], true);
    case Actions.UNSELECT_COURSE:
      return Map(state).setIn([String(action.index), 'isSelected'], false);
    default:
      return state;
  }
};

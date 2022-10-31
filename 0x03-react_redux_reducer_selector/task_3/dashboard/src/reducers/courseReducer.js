import { Actions } from '../actions/courseActionTypes';

const initialState = [];

export const courseReducer = (state = initialState, action) => {
  switch (action.type) {
    case Actions.FETCH_COURSE_SUCCESS:
      return state.map((course) => ({
        ...course,
        isSelected: false,
      }));
    case Actions.SELECT_COURSE:
      return state.map((course) => {
        if (course.index === action.index) {
          return {
            ...course,
            isSelected: true,
          };
        }
        return course;
      });
    case Actions.UNSELECT_COURSE:
      return state.map((course) => {
        if (course.index === action.index) {
          return {
            ...course,
            isSelected: false,
          };
        }
        return course;
      });
    default:
      return state;
  }
};

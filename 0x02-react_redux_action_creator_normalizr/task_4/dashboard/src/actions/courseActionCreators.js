const { Actions } = require('./courseActionTypes');

export const selectCourse = (index) => ({
  type: Actions.SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: Actions.UNSELECT_COURSE,
  index,
});

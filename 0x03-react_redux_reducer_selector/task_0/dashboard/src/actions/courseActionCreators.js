const { Actions } = require('./courseActionTypes');
const { bindActionCreators } = require('redux');

export const selectCourse = (index) => ({
  type: Actions.SELECT_COURSE,
  index,
});

export const unSelectCourse = (index) => ({
  type: Actions.UNSELECT_COURSE,
  index,
});

export const boundCourseActions = () =>
  bindActionCreators(
    {
      selectCourse,
      unSelectCourse,
    },
    dispatch
  );

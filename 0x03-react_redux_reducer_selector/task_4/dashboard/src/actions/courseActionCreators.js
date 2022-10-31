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

export const fetchCoursesSuccess = (courses) => ({
  type: Actions.FETCH_COURSE_SUCCESS,
  courses,
});

export const boundCourseActions = () =>
  bindActionCreators(
    {
      selectCourse,
      unSelectCourse,
      fetchCoursesSuccess,
    },
    dispatch
  );

import { selectCourse, unSelectCourse } from './courseActionCreators';

describe('Test suite for courseActionCreators', () => {
  it('tests selectCourse returns the correct object', () => {
    const expected = {
      type: 'SELECT_COURSE',
      index: 1,
    };
    const actual = selectCourse(1);
    expect(actual).toEqual(expected);
  });

  it('tests unSelectCourse returns the correct object', () => {
    const expected = {
      type: 'UNSELECT_COURSE',
      index: 1,
    };
    const actual = unSelectCourse(1);
    expect(actual).toEqual(expected);
  });
});

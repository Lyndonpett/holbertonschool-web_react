import { courseReducer } from './courseReducer';
import { Map } from 'immutable';
import { courseNormalizer } from '../schema/courses';

describe('Test suite for courseReducer', () => {
  it('verifies the default state returns an empty array', () => {
    expect(courseReducer(undefined, { type: undefined })).toEqual(Map([]));
  });
});

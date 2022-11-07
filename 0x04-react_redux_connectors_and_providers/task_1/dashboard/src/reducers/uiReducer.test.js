const { Map } = require('immutable');
import { uiReducer } from './uiReducer';

// Write a test verifying the state returned by the uiReducer function equals the initial state when no action is passed
// Write a test verifying the state returned by the uiReducer function equals the initial state when the action SELECT_COURSE is passed
// Write a test verifying the state returned by the uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property

describe('uiReducer', () => {
  it('verifies uiReducer function equals the initial state when no action is passed', () => {
    const initialState = {
      isUserLoggedIn: false,
      user: {},
      isNotificationDrawerVisible: false,
    };
    expect(uiReducer(undefined, {}).toJS()).toEqual(initialState);
  });

  it('verifies uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
    const initialState = Map({
      isUserLoggedIn: false,
      user: {},
      isNotificationDrawerVisible: false,
    });
    const action = {
      type: 'SELECT_COURSE',
      index: 0,
    };
    expect(uiReducer(initialState, action).toJS()).toEqual(initialState.toJS());
  });

  it('verifies uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    const initialState = Map({
      isUserLoggedIn: false,
      user: {},
      isNotificationDrawerVisible: false,
    });
    const action = {
      type: 'DISPLAY_NOTIFICATION_DRAWER',
    };
    expect(uiReducer(initialState, action).toJS()).toEqual(
      initialState.toJS(),
      { isNotificationDrawerVisible: true }
    );
  });

  it('verifies uiReducer function, when the action HIDE_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    const initialState = Map({
      isUserLoggedIn: false,
      user: {},
      isNotificationDrawerVisible: false,
    });
    const action = {
      type: 'HIDE_NOTIFICATION_DRAWER',
    };
    expect(uiReducer(initialState, action).toJS()).toEqual(
      initialState.toJS(),
      { isNotificationDrawerVisible: false }
    );
  });
});

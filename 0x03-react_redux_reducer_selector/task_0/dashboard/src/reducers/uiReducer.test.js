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
    expect(uiReducer(undefined, {})).toEqual(initialState);
  });

  it('verifies uiReducer function equals the initial state when the action SELECT_COURSE is passed', () => {
    expect(uiReducer(undefined, { type: 'SELECT_COURSE' })).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('verifies uiReducer function, when the action DISPLAY_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    expect(
      uiReducer(undefined, { type: 'DISPLAY_NOTIFICATION_DRAWER' })
    ).toEqual({
      isNotificationDrawerVisible: true,
      isUserLoggedIn: false,
      user: {},
    });
  });

  it('verifies uiReducer function, when the action HIDE_NOTIFICATION_DRAWER is passed, changes correctly the isNotificationDrawerVisible property', () => {
    expect(uiReducer(undefined, { type: 'HIDE_NOTIFICATION_DRAWER' })).toEqual({
      isNotificationDrawerVisible: false,
      isUserLoggedIn: false,
      user: {},
    });
  });
});

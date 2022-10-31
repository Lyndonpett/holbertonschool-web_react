import {
  login,
  logout,
  displayNotificationDrawer,
  hideNotificationDrawer,
} from './uiActionCreators';

describe('Test suite for uiActionCreators.js', () => {
  it('login() should return an object with type UIActions.LOGIN and user matching expected', () => {
    const email = 'test@test.com';
    const password = 'test';
    const expected = {
      type: 'LOGIN',
      user: {
        email,
        password,
      },
    };
    expect(login(email, password)).toEqual(expected);
  });

  it('logout() should return an object with type UIActions.LOGOUT', () => {
    const expected = {
      type: 'LOGOUT',
    };
    expect(logout()).toEqual(expected);
  });

  it('displayNotificationDrawer() should return an object with type UIActions.DISPLAY_NOTIFICATION_DRAWER', () => {
    const expected = {
      type: 'DISPLAY_NOTIFICATION_DRAWER',
    };
    expect(displayNotificationDrawer()).toEqual(expected);
  });

  it('hideNotificationDrawer() should return an object with type UIActions.HIDE_NOTIFICATION_DRAWER', () => {
    const expected = {
      type: 'HIDE_NOTIFICATION_DRAWER',
    };
    expect(hideNotificationDrawer()).toEqual(expected);
  });
});

describe('uiActionCreators dispatch tests', () => {
  it('Verifies that login bound', () => {
    const dispatch = jest.fn();
    dispatch(login('email', 'password'));
    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOGIN',
      user: {
        email: 'email',
        password: 'password',
      },
    });
  });

  it('Verifies that logout bound', () => {
    const dispatch = jest.fn();
    dispatch(logout());
    expect(dispatch).toHaveBeenCalledWith({
      type: 'LOGOUT',
    });
  });

  it('Verifies that displayNotificationDrawer bound', () => {
    const dispatch = jest.fn();
    dispatch(displayNotificationDrawer());
    expect(dispatch).toHaveBeenCalledWith({
      type: 'DISPLAY_NOTIFICATION_DRAWER',
    });
  });

  it('Verifies that hideNotificationDrawer bound', () => {
    const dispatch = jest.fn();
    dispatch(hideNotificationDrawer());
    expect(dispatch).toHaveBeenCalledWith({
      type: 'HIDE_NOTIFICATION_DRAWER',
    });
  });
});

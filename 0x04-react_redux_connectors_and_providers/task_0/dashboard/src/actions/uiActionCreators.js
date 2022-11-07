const { UIActions } = require('./uiActionTypes');
import { bindActionCreators } from 'redux';
// import fetch from 'node-fetch';

export const login = (email, password) => ({
  type: UIActions.LOGIN,
  user: {
    email,
    password,
  },
});

export const logout = () => ({
  type: UIActions.LOGOUT,
});

export const loginSuccess = async () => ({
  type: UIActions.LOGIN_SUCCESS,
});

export const loginFailure = async () => ({
  type: UIActions.LOGIN_FAILURE,
});

export const loginRequest = (email, password) => async (dispatch) => {
  dispatch(login(email, password));
  const response = await fetch('./login-success.json');
  const json = await response.json();
  if (json.success) dispatch(loginSuccess());
  else dispatch(loginFailure());
};

export const displayNotificationDrawer = () => ({
  type: UIActions.DISPLAY_NOTIFICATION_DRAWER,
});

export const hideNotificationDrawer = () => ({
  type: UIActions.HIDE_NOTIFICATION_DRAWER,
});

export const boundUIActions = () =>
  bindActionCreators(
    {
      login,
      logout,
      displayNotificationDrawer,
      hideNotificationDrawer,
    },
    dispatch
  );

const { UIActions } = require('./uiActionTypes');
import { bindActionCreators } from 'redux';

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

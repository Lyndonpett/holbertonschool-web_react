import { UIActions } from '../actions/uiActionTypes';

export const initialState = {
  isUserLoggedIn: false,
  isNotificationDrawerVisible: false,
  user: {},
};

export const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case UIActions.LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true,
        user: action.user,
      };
    case UIActions.LOGIN_FAILURE:
      return {
        ...state,
        isUserLoggedIn: false,
        user: {},
      };
    case UIActions.LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false,
        user: {},
      };
    case UIActions.DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true,
      };
    case UIActions.HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false,
      };
    default:
      return state;
  }
};

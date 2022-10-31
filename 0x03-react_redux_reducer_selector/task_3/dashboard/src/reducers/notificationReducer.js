import {
  NotificationActionType,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';

export const initialState = {
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
};

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NotificationActionType.MARK_AS_READ:
      const read = state.notifications.map((notification) => {
        if (notification.id === action.index) {
          return {
            ...notification,
            isRead: true,
          };
        }
        return notification;
      });
      return {
        filter: state.filter,
        notifications: read,
      };
    case NotificationActionType.SET_TYPE_FILTER:
      return {
        filter: action.filter,
        notifications: state.notifications,
      };
    case NotificationActionType.FETCH_NOTIFICATIONS_SUCCESS:
      const success = action.data.map((notification) => {
        return {
          ...notification,
          isRead: false,
        };
      });
      return {
        filter: state.filter,
        notifications: success,
      };
    default:
      return state;
  }
};

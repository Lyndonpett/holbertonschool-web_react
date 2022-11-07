import { NotificationActionType } from './notificationActionTypes';
import { bindActionCreators } from 'redux';

export const markAsRead = (index) => ({
  type: NotificationActionType.MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: NotificationActionType.SET_TYPE_FILTER,
  filter,
});

export const fetchNotifications = (data) => ({
  type: NotificationActionType.FETCH_NOTIFICATIONS_SUCCESS,
  data,
});

export const boundNotificationActions = () =>
  bindActionCreators(
    {
      markAsRead,
      setNotificationFilter,
    },
    dispatch
  );

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

export const boundNotificationActions = () =>
  bindActionCreators(
    {
      markAsRead,
      setNotificationFilter,
    },
    dispatch
  );

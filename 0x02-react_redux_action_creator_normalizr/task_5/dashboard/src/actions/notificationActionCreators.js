import { NotificationActionType } from './notificationActionTypes';

export const markAsRead = (index) => ({
  type: NotificationActionType.MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: NotificationActionType.SET_TYPE_FILTER,
  filter,
});

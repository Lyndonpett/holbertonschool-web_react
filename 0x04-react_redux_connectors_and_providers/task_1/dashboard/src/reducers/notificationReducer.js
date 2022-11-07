const { Map } = require('immutable');
import { notificationNormalizer } from '../schema/notifications';
import {
  NotificationActionType,
  NotificationTypeFilters,
} from '../actions/notificationActionTypes';

export const initialState = Map({
  notifications: [],
  filter: NotificationTypeFilters.DEFAULT,
});

export const notificationReducer = (state = initialState, action) => {
  switch (action.type) {
    case NotificationActionType.MARK_AS_READ:
      return state.setIn([action.index, 'isRead'], true);
    case NotificationActionType.SET_TYPE_FILTER:
      return state.set('filter', action.filter);
    case NotificationActionType.FETCH_NOTIFICATIONS_SUCCESS:
      return state.merge(notificationNormalizer(action.data));
    default:
      return state;
  }
};

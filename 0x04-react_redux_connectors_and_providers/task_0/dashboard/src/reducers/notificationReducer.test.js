import {
  fetchNotifications,
  markAsRead,
  setNotificationFilter,
} from '../actions/notificationActionCreators';
import { notificationNormalizer } from '../schema/notifications';
import { notificationReducer, initialState } from './notificationReducer';

const notificationsList = {
  data: [
    { id: 1, type: 'default', value: 'New course available' },
    { id: 2, type: 'urgent', value: 'New resume available' },
    { id: 3, type: 'urgent', value: 'New data available' },
  ],
};

describe('notificationReducer', () => {
  it('should set the filter', () => {
    const filter = 'DEFAULT';
    const action = setNotificationFilter(filter);
    const state = notificationReducer(initialState, action);
    expect(state.get('filter')).toEqual(filter);
  });

  it('should mark the notification as read', () => {
    const action = {
      type: 'MARK_AS_READ',
      index: 2,
    };
    expect(notificationReducer(action, notificationsList.data)).toEqual(
      markAsRead(2)
    );
  });
});

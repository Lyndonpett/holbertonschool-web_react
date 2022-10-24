import * as notifData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});
const normalized = normalize(notifData.default, [notification]);

// Modify the function getAllNotificationsByUser to use the normalized dataset
const getAllNotificationsByUser = (userId) => {
  const notifList = [];
  for (const notification in normalized.entities.notifications) {
    if (normalized.entities.notifications[notification].author === userId) {
      for (const message in normalized.entities.messages) {
        if (
          message === normalized.entities.notifications[notification].context
        ) {
          notifList.push(normalized.entities.messages[message]);
        }
      }
    }
  }
  return notifList;
};

export { getAllNotificationsByUser, normalized };

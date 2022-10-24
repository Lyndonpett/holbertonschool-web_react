import * as notifData from '../../notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notifications', {
  author: user,
  context: message,
});
const normalized = normalize(notifData, [notification]);

const getAllNotificationsByUser = (userId) => {
  const notifications = notifData.default.filter(
    (notif) => notif.author.id === userId
  );
  return notifications;
};

export { getAllNotificationsByUser, normalized };

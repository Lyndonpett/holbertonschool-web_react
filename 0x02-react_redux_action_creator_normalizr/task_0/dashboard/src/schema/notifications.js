import * as notifData from '../../notifications.json';

const getAllNotificationsByUser = (userId) => {
  const notifications = notifData.default.filter(
    (notif) => notif.author.id === userId
  );
  return notifications;
};

export default getAllNotificationsByUser;

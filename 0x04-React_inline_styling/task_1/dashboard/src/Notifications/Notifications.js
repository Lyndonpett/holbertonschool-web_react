import React, { Component } from 'react';
import PropTypes from 'prop-types';
import closeIcon from '../assets/close-icon.png';
import { getLatestNotification } from '../utils/utils';
import NotificationItem from './NotificationItem';
import NotificationItemShape from './NotificationItemShape';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  Notif: {
    display: 'flex',
    flexDirection: 'column',
    float: 'right',
    marginRight: '1rem',
  },
  menuItem: {
    alignSelf: 'flex-end',
    marginBottom: '1rem',
  },
  notifs: {
    border: '1px red dashed',
    padding: '1rem 10rem 2rem 2rem',
  },
  listDefault: {
    color: 'blue',
  },
  listUrgent: {
    color: 'red',
  },
  closeBtn: {
    border: 0,
    background: 'transparent',
    position: 'absolute',
    right: 35,
    top: 60,
  },
  closeImg: {
    border: 0,
    height: 15,
    width: 15,
  },
});

class Notifications extends Component {
  constructor() {
    super();
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    const { listNotifications } = this.props;
    return nextProps.listNotifications.length > listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    const { displayDrawer, listNotifications } = this.props;

    return (
      <div className={css(styles.Notif)}>
        <div className={css(styles.menuItem)}>Your Notifications</div>
        {displayDrawer && (
          <div className={css(styles.notifs)}>
            {listNotifications.length ? (
              <p>Here is the list of notifications</p>
            ) : (
              <p>No new notification for now</p>
            )}
            {listNotifications ? (
              listNotifications.map((notif) => (
                <NotificationItem
                  style={css(
                    notif.type === 'default'
                      ? styles.listDefault
                      : styles.listUrgent
                  )}
                  key={notif.id}
                  type={notif.type ? notif.type : 'default'}
                  value={notif.value}
                  html={notif.html}
                  markAsRead={() => this.markAsRead(notif.id)}
                />
              ))
            ) : (
              <tr>No course available yet</tr>
            )}
            <button
              className={css(styles.closeBtn)}
              aria-label="Close"
              onClick={() => console.log('Close button has been clicked')}
            >
              <img
                src={closeIcon}
                className={css(styles.closeImg)}
                alt="close icon"
              />
            </button>
          </div>
        )}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;

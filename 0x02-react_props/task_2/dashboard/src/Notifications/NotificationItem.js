import React from 'react';

export default function NotificationItem({ type, value, html }) {
  if (value) {
    return <li data-priority={type}>{value}</li>;
  }
  return <li data-priority={type} dangerouslySetInnerHTML={html} />;
}

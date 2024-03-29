import React from 'react';
import { StyleSheet, css } from 'aphrodite';

const styles = StyleSheet.create({
  login: {
    marginLeft: '2.5rem',
    marginTop: '5rem',
  },
  email: {
    marginLeft: '.5rem',
    marginRight: '.5rem',
  },
  password: {
    marginLeft: '.5rem',
    marginRight: '.5rem',
  },
});

export default function Login() {
  return (
    <div className={css(styles.login)}>
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email">
          Email:
          <input
            type="email"
            id="email"
            className={css(styles.email)}
            name="email"
          />
        </label>
        <label htmlFor="password">
          Password:
          <input
            type="password"
            id="password"
            className={css(styles.password)}
            name="password"
          />
        </label>
        <button>OK</button>
      </form>
    </div>
  );
}

import React from 'react';
import './Login.css';

export default function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <form>
        <label htmlFor="email">
          Email:
          <input type="email" id="email" name="email" />
        </label>
        <label htmlFor="password">
          Password:
          <input type="password" id="password" name="password" />
        </label>
        <button>OK</button>
      </form>
    </>
  );
}

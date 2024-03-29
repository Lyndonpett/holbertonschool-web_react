import React from 'react';
import PropTypes from 'prop-types';
import './App.css';
import Header from '../Header/Header';
import Notifications from '../Notifications/Notifications';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';

App.propTypes = {
  isLoggedIn: PropTypes.bool,
};

App.defaultProps = {
  isLoggedIn: false,
};

function App({ isLoggedIn }) {
  return (
    <>
      <Notifications />
      <Header />
      <main className="App-body">
        {isLoggedIn ? <CourseList /> : <Login />}
      </main>
      <Footer />
    </>
  );
}

export default App;

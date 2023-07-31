import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseListRow from "../CourseList/CourseListRow";
import "./App.css";
import PropTypes from 'prop-types';

function App(isLoggedIn) {
  return (
    <>
      <Notifications />

      <div className="App">
        <Header />

        {isLoggedIn ? <CourseListRow /> : <Login />}

        <Footer />

      </div>
    </>
  )
}

App.defaultProps = {
  isLoggedIn: false
}

App.PropTypes = {
  isLoggedIn: PropTypes.bool
}

export default App;



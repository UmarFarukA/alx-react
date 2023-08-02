import React, { Component } from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseListRow from "../CourseList/CourseListRow";
import CourseList from "../CourseList/CourseList";
import "./App.css";
import PropTypes from 'prop-types';

const listCourses = [
  { id: 1, name: "ES6", credit: 60 },
  { id: 2, name: "Webpack", credit: 20 },
  { id: 3, name: "React", credit: 40 },
];

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

class App extends Component {

  constructor() {
    super(props);
    this.state = { isLoggedIn: false }
  }

  render() {
    return (
      <>
        <Notifications />

        <div className="App">
          <Header />

          {this.isLoggedIn ? <CourseList /> : <Login />}
        </div>
      </>
    )
  }
}


// function App(isLoggedIn) {
//   return (
//     <>
//       <Notifications />

//       <div className="App">
//         <Header />

//         {isLoggedIn ? <CourseList /> : <Login />}

//         <Footer />

//       </div>
//     </>
//   )
// }

// App.defaultProps = {
//   isLoggedIn: false
// }

// App.PropTypes = {
//   isLoggedIn: PropTypes.bool
// }

export default App;



import React from "react";
import Notifications from "../Notifications/Notifications";
import Header from "../Header/Header";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import CourseList from "../CourseList/CourseList";
import PropTypes from "prop-types";
import "./App.css";
import { getLatestNotification } from "../utils/utils";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom"
import BodySection from "../BodySection/BodySection";


class App extends React.Component {

  constructor() {
    super(props);
    this.handleKeyPress = this.handleKeyPress.bind(this);
  }

  listCourses = [
    { id: 1, name: "ES6", credit: 60 },
    { id: 2, name: "Webpack", credit: 20 },
    { id: 3, name: "React", credit: 40 },
  ];

  listNotifications = [
    { id: 1, type: "default", value: "New course available" },
    { id: 2, type: "urgent", value: "New resume available" },
    { id: 3, type: "urgent", html: getLatestNotification() },
  ];

  handleKeyPress(evt) {
    if (evt.ctrlKey && evt.key === 'h') {
      alert("Logging you out");
      this.props.logOut();
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", this.handleKeyPress)
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", this.handleKeyPress)
  }

  render() {
    return (
      <React.Fragment>
        <div className="App">
          <div className="heading-section">
            <Notifications listNotifications={this.listNotifications} />
            <Header />
          </div>
          {this.props.isLoggedIn ? <BodySectionWithMarginBottom title="Course list">
            <CourseList listCourses={this.listCourses} />
          </BodySectionWithMarginBottom> : <BodySectionWithMarginBottom>
            <Login />
          </BodySectionWithMarginBottom>}
          <BodySection tile="News from the school">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum aperiam tempora, quos, architecto nesciunt similique voluptatem fugit maxime repellat,
              molestiae porro excepturi ex! Officia quas optio, quam ipsam explicabo quo.
            </p>
          </BodySection>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

App.defaultProps = {
  isLoggedIn: false,
  logOut: () => {
    return;
  }
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func,
};

export default App;

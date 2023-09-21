import React from "react";
import { StyleSheet, css } from "aphrodite";
import closeIcon from "../assets/close-icon.png";
import NotificationItem from "./NotificationItem";
import PropTypes from "prop-types";
import NotificationItemShape from "./NotificationItemShape";

class Notifications extends React.Component {

  constructor() {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  shouldComponentUpdate(nextProps) {
    return nextProps.length > this.props.listNotifications.length;
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <React.Fragment>
        {this.props.displayDrawer ? (
          <div className="'flex-area'">
            <div className={css(styles.menuItem)}>
              <p>Your notifications</p>
            </div>
            <div className={css(styles.Notifications)}>
              {/* <p>Here is the list of notifications</p> */}
              <ul>
                {this.props.listNotifications && this.props.listNotifications.length > 0 ? (
                  this.props.listNotifications.map(({ id, html, type, value }) => (
                    <>
                      <NotificationItem key={id} type={type} value={value} html={html} />
                    </>
                  ))
                ) : (
                  <div className="">
                    <NotificationItem value="No new notification for now" />
                    <button
                      style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "10px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
                      aria-label="Close"
                      onClick={console.log("Close button has been clicked")}
                    >
                      <img src={closeIcon} alt="closeIcon" width="10px" />
                    </button>
                  </div>
                )}
              </ul>
            </div>
          </div>
        ) : (
          <div className="menuItem">
            <p>Your notifications</p>
          </div>
        )}
      </React.Fragment>
    );
  }
}

const styles = StyleSheet.create({
  menuItem: {
    textAlign: 'right'
  },

  flexArea: {

  },

  Notifications: {
    padding: '1em',
    border: '2px dashed red',
    position: 'absolute',
    top: '1.8em',
    right: '0',
    "@media (max-width: 375px)": {
      display: "block",
      height: "100vh",
      width: "100vw",
      marginLeft: "auto",
      marginRight: "auto",
      border: "none",
      fontSize: "20px",
      padding: "0",
    },
  },

  "notification-header": {
    display: 'flex',
    justifyContent: 'space-between'
  },

  '[data-notification-type="default"]': {
    color: 'blue'
  },

  "[data - urgent]": {
    color: 'red'
  },

  '[data-notification-type="urgent"]': {
    color: 'red'
  }


})


Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  listNotifications: PropTypes.arrayOf(NotificationItemShape),
};

Notifications.defaultProps = {
  displayDrawer: false,
  listNotifications: [],
};

export default Notifications;

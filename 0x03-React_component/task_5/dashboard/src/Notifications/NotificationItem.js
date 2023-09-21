import React from "react";
import "./Notifications.css";
import PropTypes from "prop-types";

class NotificationItem extends React.Component {

  render() {
    const { type, value, html, markAsRead, id } = this.props;

    return (
      <React.Fragment>
        {type & value ? (
          <li onClick={() => markAsRead(id)} data-notofication-type={type}>
            {value}
          </li>
        ) : null}
        {html ? <li onClick={() => markAsRead(id)} data-urgent dangerouslySetInnerHTML={{ __html: html }}></li> : null}
        );
      </React.Fragment>
    )
  }
}

NotificationItem.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  __html: PropTypes.shape({
    html: PropTypes.string,
  }),
  markAsRead: PropTypes.func,
  id: PropTypes.number
};


NotificationItem.defaultProps = {
  type: "default",
  markAsRead: () => {
    console.log("empty func")
  },
  id: 0
};

export default NotificationItem;

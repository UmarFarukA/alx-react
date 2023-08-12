import React from "react";
import { StyleSheet, css } from "aphrodite";
import PropTypes from "prop-types";

class NotificationItem extends React.Component {

  render() {
    const { type, value, html, markAsRead, id } = this.props;

    return (
      <React.Fragment>
        {type && value ? (
          <li className={type === 'default' ? css(styles.default) : css(styles.urgent)} onClick={() => markAsRead(id)} data-notification-type={type}>
            {value}
          </li>
        ) : null}
        {html ? <li onClick={() => markAsRead(id)} data-urgent className={css(styles.urgent)} dangerouslySetInnerHTML={{ __html: html }}></li> : null}
        );
      </React.Fragment>
    )
  }
}

const styles = StyleSheet.create({
  default: {
    color: 'blue'
  },

  urgent: {
    color: red
  }
});

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

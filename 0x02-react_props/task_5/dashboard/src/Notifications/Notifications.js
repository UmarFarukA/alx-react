import React from "react";
import NotificationItem from "./NotificationItem";
import "./Notifications.css";
import closeIcon from "../assets/close-icon.png";
import { getLatestNotification } from "../utils/utils";
import PropTypes from 'prop-types';

function Notifications({ displayDrawer, listNotifications }) {
    return (
        <>

            {displayDrawer ? (
                <div className="Notifications">
                    <ul>
                        {listNotifications && listNotifications.length > 0 ? (
                            listNotifications.map(({ id, html, type, value }) => (
                                <>
                                    <NotificationItem key={id} type={type} value={value} html={html} />
                                    {/* <button
                      style={{ color: "#3a3a3a", fontWeight: "bold", background: "none", border: "none", fontSize: "10px", position: "absolute", right: "2px", top: "2px", cursor: "pointer" }}
                      aria-label="Close"
                      onClick={console.log("Close button has been clicked")}
                    >
                      <img src={closeIcon} alt="closeIcon" width="10px" />
                    </button> */}
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
            ) : (
                <div className="menuItem">
                    <p>Your notifications</p>
                </div>
            )}
        </>
    );
}

Notifications.PropTypes = {
    displayDrawer: PropTypes.bool,
};

Notifications.defaultProps = {
    displayDrawer: false,
};



export default Notifications;
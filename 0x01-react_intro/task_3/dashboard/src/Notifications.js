// import react from "react";
import { getLatestNotification } from "./utils";
import close_icon from './close-icon.jpg';

export function Notifications() {

    return <div className="Notifications">
        <p>
            Here is the list of notifications
            <button aria-label="close" onClick={console.log('Close button has been clicked')}>
                <img src={close_icon} alt="" className="close-icon" />
            </button>
        </p>
        <ul>
            <li data-default-priority='1'>New Course available</li>
            <li data-urgent-priority='1'>New resume available</li>
            <li>{getLatestNotification()}</li>
        </ul>

    </div>
}
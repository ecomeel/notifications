import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import NotificationPreview from "../notification-preview/NotificationPreview";

function NotificationsList() {
    const notifications = useSelector((state) => state.notifications);

    return (
        <ul className="notifications__list">
            {notifications.map((notification) => (
                <Link
                    key={notification.id}
                    to='/offer'
                >
                    <NotificationPreview
                        key={notification.id}
                        notification={notification}
                    />
                </Link>
            ))}
        </ul>
    );
}

export default NotificationsList;

// `/${notification.typeOfNotification}/${notification.id}`
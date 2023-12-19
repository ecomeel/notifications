import { useSelector } from "react-redux";

import NotificationPreview from "../notification-preview/NotificationPreview";

function NotificationsList() {
    const notifications = useSelector((state) => state.notifications);

    return (
        <ul className="notifications__list">
            {notifications.map((notification) => (
                <NotificationPreview
                    key={notification.id}
                    notification={notification}
                />
            ))}
        </ul>
    );
}

export default NotificationsList;

// `/${notification.typeOfNotification}/${notification.id}`

import { useSelector } from "react-redux";

import NotificationPreview from "../notification-preview/NotificationPreview";
import loadingImg from "../../assets/loading.gif";

function NotificationsList() {
    const notifications = useSelector(
        (state) => state.notifications.notifications
    );
    const isLoading = useSelector(
        (state) => state.notifications.isNotificationsLoading
    );
    const isLoadingError = useSelector(
        (state) => state.notifications.isNotificationsLoadingError
    );
    const isLoadingSuccess = useSelector(
        (state) => state.notifications.isNotificationsLoadingSuccess
    );

    return (
        <>
            {isLoading && <img className="loading" src={loadingImg} />}
            {isLoadingError && <p className="error">Ошибка загрузки</p>}
            {isLoadingSuccess && (
                <ul className="notifications__list">
                    {notifications.map((notification) => (
                        <NotificationPreview
                            key={notification.id}
                            notification={notification}
                        />
                    ))}
                </ul>
            )}
        </>
    );
}

export default NotificationsList;

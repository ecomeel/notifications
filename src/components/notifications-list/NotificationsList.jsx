import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import NotificationPreview from "../notification-preview/NotificationPreview";
import loadingImg from "../../assets/loading.gif";
import {
    setNotifications,
    setIsNotificationsLoading,
    setIsNotificationsLoadingError,
    setIsNotificationsLoadingSuccess,
} from "../../store/notificationsSlice";

function NotificationsList() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsNotificationsLoading(true));
        dispatch(setIsNotificationsLoadingError(false));
        dispatch(setIsNotificationsLoadingSuccess(false));
        fetch("/notifications")
            .then((res) => res.json())
            .then((json) => {
                dispatch(setNotifications(json.data));
                dispatch(setIsNotificationsLoadingSuccess(true));
            })
            .catch((error) => {
                console.log(error);
                dispatch(setIsNotificationsLoadingError(true));
            })
            .finally(() => {
                dispatch(setIsNotificationsLoading(false));
            });
    }, []);

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

import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import loadingImg from "../../assets/loading.gif";
import {
    setSelectedNotification,
    setIsNotificationLoading,
    setIsNotificationLoadingError,
    setIsNotificationLoadingSuccess,
} from "../../store/selectedNotificationSlice";
import "./notification-survey.scss";

function NotificationSurvey() {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsNotificationLoading(true));
        dispatch(setIsNotificationLoadingError(false));
        dispatch(setIsNotificationLoadingSuccess(false));
        fetch("/fullNotifications")
            .then((res) => res.json())
            .then((data) => {
                const notifications = data.data;
                const selectedNot = notifications.find(
                    (notification) => id == notification.id
                );
                dispatch(setSelectedNotification(selectedNot));
                dispatch(setIsNotificationLoadingSuccess(true));
            })
            .catch((error) => {
                console.log(error);
                dispatch(setIsNotificationLoadingError(true));
            })
            .finally(() => {
                dispatch(setIsNotificationLoading(false));
            });
    }, []);

    const notification = useSelector(
        (state) => state.selectedNotification.notification
    );
    const isLoading = useSelector(
        (state) => state.selectedNotification.isNotificationLoading
    );
    const isLoadingError = useSelector(
        (state) => state.selectedNotification.isNotificationLoadingError
    );
    const isLoadingSuccess = useSelector(
        (state) => state.selectedNotification.isNotificationLoadingSuccess
    );

    return (
        <div className="survey">
            <Link className="back-btn" to="/">
                Назад
            </Link>
            {isLoading && <img className="loading" src={loadingImg} />}
            {isLoadingError && <p className="error">Loading Error</p>}
            {isLoadingSuccess && (
                <div className="survey__wrapper">
                    <img
                        src={notification.img}
                        alt=""
                        className="survey__image"
                    />
                    <h2 className="survey__title">{notification.title}</h2>
                    <p className="survey__description">
                        {notification.description}
                    </p>
                    <button className="survey__go-survey">Пройти опрос</button>
                </div>
            )}
        </div>
    );
}

export default NotificationSurvey;

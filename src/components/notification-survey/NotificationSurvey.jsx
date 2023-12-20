import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

import { setSelectedNotification } from "../../store/selectedNotificationSlice";
import "./notification-survey.scss";

function NotificationSurvey() {
    const { id } = useParams();
    console.log(id);
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("/fullNotifications")
            .then((res) => res.json())
            .then((data) => {
                const notifications = data.data;
                const selectedNot = notifications.find(
                    (notification) => id == notification.id
                );
                dispatch(setSelectedNotification(selectedNot));
            });
    }, []);

    const notification = useSelector((state) => state.selectedNotification);

    return (
        <div className="survey">
            <Link className="back-btn" to="/">Назад</Link>
            <div className="survey__wrapper">
                <img src={notification.img} alt="" className="survey__image" />
                <h2 className="survey__title">{notification.title}</h2>
                <p className="survey__description">
                    {notification.description}
                </p>
                <button className="survey__go-survey">Пройти опрос</button>
            </div>
        </div>
    );
}

export default NotificationSurvey;

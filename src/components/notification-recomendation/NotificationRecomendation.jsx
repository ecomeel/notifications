import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedNotification } from "../notifications/selectedNotificationSlice";
function NotificationRecomendation() {
    const { id } = useParams();
    const dispatch = useDispatch();
    const notif = useSelector((state) => state.selectedNotification);

    // const a = useSelector(state => state);
    // console.log(a)

    useEffect(() => {
        fetch("/fullNotifications")
            .then((res) => res.json())
            .then((data) => {
                const notifications = data.data;
                const selectedNot = notifications.find(
                    (notification) => id == notification.id
                );
                dispatch(setSelectedNotification(selectedNot));
                console.log(notif)
            });
    }, []);

    return (
        <div className="recomendation">
            <Link to="/">Назад</Link>
            <h2>{notif.title}</h2>
            {/* <img src="" alt="" /> */}
        </div>
    );
}

export default NotificationRecomendation;

// Получаем id из  url и получаем по id данные уведомления

import { Link } from "react-router-dom";
import isReadImg from "../../assets/unread.png";
import "./notification-preview.scss";
import { changeStatusView } from "../../store/notificationsSlice";
import { useDispatch, useSelector } from "react-redux";

function NotificationPreview({ notification }) {
    const dispatch = useDispatch();

    return (
        <Link to={`/${notification.typeOf}/${notification.id}`}>
            <li
                onClick={() => dispatch(changeStatusView(notification.id))}
                className="notification-preview"
            >
                <header className="notification-preview__header">
                    <h2 className="notification-preview__title">
                        {notification.title}
                    </h2>
                    <p className="notification-preview__time">
                        {notification.data}
                    </p>
                </header>
                <div className="notification-preview__description">
                    <p className="notification-preview__desc">
                        {notification.description}
                    </p>
                    <img
                        hidden={notification.isRead}
                        className="notification-preview__read-status"
                        src={isReadImg}
                        alt="Check status"
                    />
                </div>
            </li>
        </Link>
    );
}

export default NotificationPreview;

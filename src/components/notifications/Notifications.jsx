import "./notifications.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";

import loadingImg from "../../assets/loading.gif";
import NotificationPreview from "../notification-preview/NotificationPreview";
import { setNotifications } from "./notificationsSlice";

function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("/notifications")
            .then((res) => res.json())
            .then((json) => {
                dispatch(setNotifications(json.data));
            });
    }, []);

    const notifications = useSelector((state) => state.notifications);

    return (
        <div className="notifications">
            <div className="container">
                <header className="notifications__header">
                    <h1 className="notifications__title">Уведовления</h1>
                </header>
                <ul className="notifications__list">
                    {notifications.map((notification) => (
                        <NotificationPreview key={notification.id} notification={notification} />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default App;

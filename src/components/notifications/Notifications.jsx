import "./notifications.scss";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { Routes, Route} from "react-router-dom";

import loadingImg from "../../assets/loading.gif";
import Layout from "../layout/Layout";
import NotificationPreview from "../notification-preview/NotificationPreview";
import NotificationOffer from "../notification-offer/NotificationOffer";
import NotificationSurvey from "../notification-survey/NotificationSurvey";
import NotificationsList from "../notifications-list/NotificationsList";
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
                {/* <header className="notifications__header">
                    <h1 className="notifications__title">Уведовления</h1>
                </header> */}
                {/* <ul className="notifications__list">
                    {notifications.map((notification) => (
                        <NotificationPreview
                            key={notification.id}
                            notification={notification}
                        />
                    ))}
                </ul> */}
                {/* <Routes>
                    <Route path="/" element={<NotificationsList/>} />
                </Routes> */}

                <Routes>
                    <Route path="/" element={<Layout/>}>
                        <Route index element={<NotificationsList/>}/>
                        <Route path="offer" element={<NotificationOffer/>}/>
                        <Route path="survey" element={<NotificationSurvey/>}/>
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;

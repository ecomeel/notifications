import "./notifications.scss";
import { Routes, Route } from "react-router-dom";

import Layout from "../layout/Layout";
import NotificationRecomendation from "../notification-recomendation/NotificationRecomendation";
import NotificationSurvey from "../notification-survey/NotificationSurvey";
import NotificationsList from "../notifications-list/NotificationsList";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import {
    setNotifications,
    setIsNotificationsLoading,
    setIsNotificationsLoadingError,
    setIsNotificationsLoadingSuccess,
} from "../../store/notificationsSlice";

function App() {
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

    return (
        <div className="notifications">
            <div className="container">
                <Routes>
                    <Route path="/" element={<Layout />}>
                        <Route index element={<NotificationsList />} />
                        <Route
                            path="recomendation/:id"
                            element={<NotificationRecomendation />}
                        />
                        <Route
                            path="survey/:id"
                            element={<NotificationSurvey />}
                        />
                    </Route>
                </Routes>
            </div>
        </div>
    );
}

export default App;

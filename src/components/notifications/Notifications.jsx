import "./notifications.scss";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { Routes, Route } from "react-router-dom";

import loadingImg from "../../assets/loading.gif";
import Layout from "../layout/Layout";
import NotificationRecomendation from "../notification-recomendation/NotificationRecomendation";
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
            })
            .catch((error) => {
                console.log(error)
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

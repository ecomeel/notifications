import "./notifications.scss";
import { Routes, Route } from "react-router-dom";

import Layout from "../layout/Layout";
import NotificationRecomendation from "../notification-recomendation/NotificationRecomendation";
import NotificationSurvey from "../notification-survey/NotificationSurvey";
import NotificationsList from "../notifications-list/NotificationsList";

function App() {
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

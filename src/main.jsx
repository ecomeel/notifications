import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

import './server/mock-server.js'
import {store} from "./store.js";
import Notifications from "./components/notifications/Notifications.jsx";
import './reset.scss';
import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
    // <React.StrictMode>
        <Provider store={store}>
            <Notifications />
        </Provider>
    // </React.StrictMode>
);

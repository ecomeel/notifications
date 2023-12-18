import { configureStore } from "@reduxjs/toolkit";

import notificationsReducer from "./components/notifications/notificationsSlice";
import selectedNotificationReducer from './components/notifications/selectedNotificationSlice'

export const store = configureStore({
    reducer: {
        notifications: notificationsReducer,
        selectedNotification: selectedNotificationReducer
    },
});

import { configureStore } from "@reduxjs/toolkit";

import notificationsReducer from "./notificationsSlice";
import selectedNotificationReducer from './selectedNotificationSlice'

export const store = configureStore({
    reducer: {
        notifications: notificationsReducer,
        selectedNotification: selectedNotificationReducer
    },
});

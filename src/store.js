import { configureStore } from "@reduxjs/toolkit";

import notificationReducer from "./components/notifications/notificationsSlice";

export const store = configureStore({
    reducer: {
        notifications: notificationReducer,
    },
});

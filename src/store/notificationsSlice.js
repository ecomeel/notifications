import { createSlice } from "@reduxjs/toolkit";

export const notificationsSlice = createSlice({
    name: "notifications",
    initialState: {
        notifications: [],
        isNotificationsLoading: false,
        isNotificationsLoadingError: false,
        isNotificationsLoadingSucces: true,
    },
    reducers: {
        setNotifications: (state, action) => {
            state.notifications = action.payload;
        },
        changeStatusView: (state, action) => {
            state.notifications.forEach(notif => {
                if (notif.id == action.payload) {
                    notif.isRead = true
                }
            });
            
        },
        setIsNotificationsLoading(state, action) {
            state.isNotificationsLoading = action.payload;
        },
        setIsNotificationsLoadingError(state, action) {
            state.isNotificationsLoadingError = action.payload;
        },
        setIsNotificationsLoadingSuccess(state, action) {
            state.isNotificationsLoadingSuccess = action.payload;
        },
    },
});

export const {
    setNotifications,
    changeStatusView,
    setIsNotificationsLoading,
    setIsNotificationsLoadingError,
    setIsNotificationsLoadingSuccess,
} = notificationsSlice.actions;
export default notificationsSlice.reducer;

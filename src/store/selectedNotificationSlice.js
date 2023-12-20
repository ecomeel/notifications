import { createSlice } from "@reduxjs/toolkit";
export const selectedNotificationSlice = createSlice({
    name: "selectedNotification",
    initialState: {
        notification: {},
        isNotificationLoading: false,
        isNotificationLoadingError: false,
        isNotificationLoadingSuccess: false,
    },
    reducers: {
        setSelectedNotification: (state, action) => {
            state.notification = action.payload
        },
        setIsNotificationLoading(state, action) {
            state.isNotificationLoading = action.payload;
        },
        setIsNotificationLoadingError(state, action) {
            state.isNotificationLoadingError = action.payload;
        },
        setIsNotificationLoadingSuccess(state, action) {
            state.isNotificationLoadingSuccess = action.payload;
        },
    },
});

export const {
    setSelectedNotification,
    setIsNotificationLoading,
    setIsNotificationLoadingError,
    setIsNotificationLoadingSuccess,
} = selectedNotificationSlice.actions;
export default selectedNotificationSlice.reducer;

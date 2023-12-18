import { createSlice } from "@reduxjs/toolkit";

export const notificationsSlice = createSlice({
    name: "notifications",
    initialState: [],
    reducers: {
        setNotifications: (state, action) => {
            state.push(...action.payload);
        },
    },
});

export const { setNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;

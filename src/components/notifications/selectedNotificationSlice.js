import { createSlice } from "@reduxjs/toolkit";
export const selectedNotificationSlice = createSlice({
    name: "selectedNotification",
    initialState: {},
    reducers: {
        setSelectedNotification: (state, action) => {
            state.title = action.payload.title
            state.id = action.payload.id;
            state.description = action.payload.description;
            state.products = action.payload.products;
            state.img = action.payload.img

            // state.page = action.payload.page

        },
    },
});

export const { setSelectedNotification } = selectedNotificationSlice.actions;
export default selectedNotificationSlice.reducer;

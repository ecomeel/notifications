import { createSlice } from "@reduxjs/toolkit";
export const selectedNotificationSlice = createSlice({
    name: "selectedNotification",
    initialState: {},
    reducers: {
        setSelectedNotification: (state, action) => {
            // state.title = action.payload.title;
            // state.id = action.payload.id;
            // state.description = action.payload.description;
            // if (action.payload.products) {
            //     state.products = action.payload.products;
            // }
            // state.img = action.payload.img;

            for (let key in action.payload) {
                state[key] = action.payload[key]
            }
        },
    },
});

export const { setSelectedNotification } = selectedNotificationSlice.actions;
export default selectedNotificationSlice.reducer;

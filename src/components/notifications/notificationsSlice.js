import { createSlice } from "@reduxjs/toolkit";

export const notificationsSlice = createSlice({
    name: "notifications",
    initialState: [
        {
            id: "kj1hoisdlas",
            title: "Title 1",
            data: "12.23.2342 23:23",
            description: "Desc 1",
            isRead: false,
            typeOfNotification: "recomendation",
        },
        {
            id: "wlemsduycsdl",
            title: "Title 2",
            data: "3.23.2342 23:23",
            description: "Desc 2",
            isRead: true,
            typeOfNotification: "recomendation",
        },
        {
            id: "almciuderhf",
            title: "Title 3",
            data: "6.23.2342 23:23",
            description: "Desc 3",
            isRead: false,
            typeOfNotification: "recomendation",
        },
    ],
    reducers: {
        setNotifications: (state, action) => {
            state = action.payload;
        },
    },
});

export const {setNotifications} = notificationsSlice.actions;
export default notificationsSlice.reducer;

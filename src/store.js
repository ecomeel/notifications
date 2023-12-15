// import { configureStore } from "@reduxjs/toolkit";

// import counterReducer from "./components/notifications/counterSlice";

// export default store = configureStore({
//     reducer: {
//         counter: counterReducer,
//     },
// });
import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./components/notifications/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer,
    },
});

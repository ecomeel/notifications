import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {value: null},
    reducers: {
        setValue: (state, action) => {
            state.value = action.payload
        },
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        },
        incrementBy: (state, action) => {
            state.value += action.payload;
        },
    },
});

export const {setValue, increment, decrement, incrementBy} = counterSlice.actions;

export default counterSlice.reducer
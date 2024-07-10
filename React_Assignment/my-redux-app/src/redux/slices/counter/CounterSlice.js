//redux state slice

import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "counter",
  initialState: { value: 0 },
  reducers: {
    //action creators
    increment: (state) => {(state.value += 1)},
    decrement: (state) => {(state.value -= 1)},
  },
});

//export action creaters
export const { increment, decrement } = counterSlice.actions;

//export reducer as whole slice
export default counterSlice.reducer;

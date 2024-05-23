import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
  name: "counter",
  initialState: {
    counter: 100,
    age: 18,
  },
  reducers: {
    increment(state, { payload }) {
      // 直接修改state的值就行了，它内部会生成一个新的state，不需要我们返回一个state
      state.counter = state.counter + payload;
    },
    decrement(state, { payload }) {
      state.counter = state.counter - payload;
    },
    incrementAge(state, { payload }) {
      state.age = state.age + payload;
    },
  },
});

export const { increment, decrement, incrementAge } = counterSlice.actions;
export default counterSlice.reducer;

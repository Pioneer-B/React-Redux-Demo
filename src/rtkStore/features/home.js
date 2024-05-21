import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// 第一个参数：事件类型，在调试工具中可以看到dispatch的这个事件类型
export const getRecommendsList = createAsyncThunk(
  "fetch/recommends",
  async (extraInfo, { dispatch, getState }) => {
    const { data } = await axios.post("http://httpbin.org/post", extraInfo);
    const result = JSON.parse(data.data);
    // 保存异步数据第一种方法：在此处直接dispatch操作
    // 保存异步数据第二种方法：不用dispatch，使用extraReducers
    dispatch(changeRecommends(result));

    return result;
  }
);

const homeSlice = createSlice({
  name: "home",
  initialState: {
    recommends: [],
  },
  reducers: {
    changeRecommends(state, { payload }) {
      state.recommends = payload;
    },
  },
  extraReducers: (builder) => {
    // builder
    //   .addCase(getRecommendsList.fulfilled, (state, { payload }) => {
    //     state.recommends = payload;
    //   })
    //   .addCase(getRecommendsList.pending, (state, action) => {
    //     console.log("pending");
    //   })
    //   .addCase(getRecommendsList.rejected, (state, { payload }) => {
    //     console.log("rejected");
    //   });
  },
});

const { changeRecommends } = homeSlice.actions;
export default homeSlice.reducer;

import axios from "axios";
import { CHANGE_NAME, CHANGE_COUNTER, CHANGE_RECOMMENDS } from "./constants.js";

export const changeNameAction = (name) => ({ type: CHANGE_NAME, name });
export const changeCounterAction = (counter) => ({
  type: CHANGE_COUNTER,
  counter,
});
export const changeRecommendAction = (recommends) => ({
  type: CHANGE_RECOMMENDS,
  recommends,
});

// 正常情况下：dispatch派发的必须是一个对象 store.dispatch(object)
// 想要派发函数，必须加thunk中间件 store.dispatch(function)
export const getRecommendsAction = () => {
  return (dispatch, getState) => {
    const args = ["数据1", "数据2", "数据3", "数据4"];
    axios.post("http://httpbin.org/post", args).then(({ data }) => {
      const result = JSON.parse(data.data);

      dispatch(changeRecommendAction(result));
    });
  };
};

const { store } = require("./index");
const { changeNameAction, changeCounterAction } = require("./actionCreators");

// 订阅
const unSubscribe = store.subscribe(() => {
  console.log(store.getState());
});

// a页面
store.dispatch(changeNameAction("zhangsan"));
store.dispatch(changeNameAction("lisi"));
store.dispatch(changeNameAction("wangwu"));

// 取消订阅
// unSubscribe();

// b页面
store.dispatch(changeCounterAction(100));
store.dispatch(changeCounterAction(100));
store.dispatch(changeCounterAction(100));

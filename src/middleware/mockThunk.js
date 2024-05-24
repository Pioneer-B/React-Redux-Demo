function mockThunk(store) {
  // 保存store的dispatch方法
  const next = store.dispatch;

  function dispatchThunk(action) {
    if (typeof action === "function") {
      // 真正派发的代码: 使用之前的dispatch进行派发
      action(store.dispatch, store.getState);
    } else {
      // 真正派发的代码: 使用之前的dispatch进行派发
      next(action);
    }
  }

  // 将diapatch执行的函数修改为logAndDidispatch, 后面的store.dispatch()实际上都是执行的logAndDispatch()
  store.dispatch = dispatchThunk;
}

export default mockThunk;

function mockLog(store) {
  // 保存store的dispatch方法
  const next = store.dispatch;

  function logAndDispatch(action) {
    console.log("当前派发的action：", action);
    // 真正派发的代码: 使用之前的dispatch进行派发
    next(action);
    console.log("派发之后的结果：", store.getState());
  }

  // 将diapatch执行的函数修改为logAndDidispatch, 后面的store.dispatch()实际上都是执行的logAndDispatch()
  store.dispatch = logAndDispatch;
}

export default mockLog;

function mockApplyMiddleware(store, ...fns) {
  fns.forEach((fn) => {
    fn(store);
  });
}

export default mockApplyMiddleware;

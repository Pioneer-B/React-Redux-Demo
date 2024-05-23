import { memo } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { increment, incrementAge } from "../rtkStore/features/counter";

const Home = memo(() => {
  const { age } = useSelector(
    (state) => ({
      age: state.counter.age,
    }),
    shallowEqual
  );
  const dispatch = useDispatch();
  function changeAge(age) {
    dispatch(incrementAge(age));
  }
  return (
    <div>
      <h2>age: {age}</h2>
      <button onClick={(e) => changeAge(1)}> age +1</button>
    </div>
  );
});

const PageRtk3 = memo(() => {
  // 1.使用useSelector将redux中store的数据映射到组件内
  const { count } = useSelector(
    (state) => ({
      count: state.counter.counter,
    }),
    shallowEqual
  );

  // 2.使用dispatch直接派发action
  const dispatch = useDispatch();
  function changeNum(num) {
    dispatch(increment(num));
  }
  return (
    <div>
      <h2>PageRtk18 : {count}</h2>
      <h4>使用redux hooks useSelector获取state</h4>
      <button onClick={(e) => changeNum(10)}> +10 </button>
      <Home />
    </div>
  );
});

export default PageRtk3;

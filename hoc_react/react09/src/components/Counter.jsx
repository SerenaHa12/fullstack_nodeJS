import { useSelector, useDispatch } from "react-redux";
import { counterSlice } from "../redux/slice/counterSlice";
const { increment, decrement } = counterSlice.actions;
const Counter = () => {
  const count = useSelector((state) => state.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Count: {count}</h1>
      <button
        onClick={() => {
          dispatch(decrement(5));
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          //   dispatch({
          //     type: "counter/increment",
          //     payload: 10,
          //   });
          dispatch(increment(10));
        }}
      >
        +
      </button>
    </div>
  );
};

export default Counter;
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../redux/actions/todoActions";

const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);
  const handleIncrement = () => {
    dispatch(increment(10));
  };
  const handleDecrement = () => {
    dispatch(decrement(5));
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
};

export default Counter;

/*
useDispatch() --> Trả về hàm dispatch
useSelector() --> Get State Global

Action Creator --> Hàm trả về 1 action
*/
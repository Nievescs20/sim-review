import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByAmount } from "../store/counterSlice";
import { useState } from "react";

function Increment() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.count) || 0;
  const [input, setInput] = useState(0);
  console.log("counter", counter);

  return (
    <div>
      <h1>Increment Component</h1>
      <h2>{counter.value}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <div>
        <label>Increment Amount</label>
        <input
          value={input}
          type="number"
          onChange={(e) => setInput(e.target.value)}
        />
        <button onClick={() => dispatch(incrementByAmount(+input))}>
          Increment By Value
        </button>
      </div>
    </div>
  );
}

export default Increment;

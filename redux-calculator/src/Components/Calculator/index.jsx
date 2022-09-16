import { Add, Subtract, Multiply, Divide } from "./action";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";

const Calculator = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");

  const selector = useSelector((state) => {
    return state.CalculatorReducer;
  });

  const dispatch = useDispatch();

  const add = () => {
    dispatch({ type: Add, params: { input1, input2 } });
  };

  const subtract = () => {
    dispatch({ type: Subtract, params: { input1, input2 } });
  };

  const multiply = () => {
    dispatch({ type: Multiply, params: { input1, input2 } });
  };

  const divide = () => {
    dispatch({ type: Divide, params: { input1, input2 } });
  };

  return (
    <>
      <p>Calculator</p>
      <input
        type="text"
        value={input1}
        onChange={(e) => setInput1(Number(e.target.value))}
      />
      <input
        type="text"
        value={input2}
        onChange={(e) => setInput2(Number(e.target.value))}
      />
      <button onClick={add}>Add </button>
      <button onClick={subtract}>Subtract</button>
      <button onClick={multiply}>Multiply</button>
      <button onClick={divide}>Divide</button>
      <p>Result: {selector.result}</p>
    </>
  );
};
export default Calculator;

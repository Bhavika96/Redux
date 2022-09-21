import { useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addTodo, deleteTodo } from "./action";
import todoReducer from "./reducer";

const Todo = () => {
  const [inputData, setInputData] = useState("");
  console.log("inputData", inputData);

  const selector = useSelector((state) => {
    return state.todoReducer.list;
  });

  const dispatch = useDispatch();

  return (
    <>
      <h1>Todo List</h1>
      <input
        type="text"
        placeholder="Enter your text"
        value={inputData}
        onChange={(e) => setInputData(e.target.value)}
      />
      <button onClick={() => dispatch(addTodo(inputData), setInputData(""))}>
        Add
      </button>
      <ul>
        {selector.map((item) => {
          return (
            <li key={item.id}>
              {item.data}
              <button onClick={() => dispatch(deleteTodo(item.id))}>del</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Todo;

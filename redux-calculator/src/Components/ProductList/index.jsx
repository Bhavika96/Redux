import { INCREMENT, DECREMENT } from "./action";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import TotalList from "./total";

const ProductList = () => {
  const selector = useSelector((state) => {
    console.log("LIST", state.ProductListReducer);
    return state.ProductListReducer;
  });

  const dispatch = useDispatch();

  const increment = (itemId) => {
    dispatch({ type: INCREMENT, params: { itemId } });
  };

  const decrement = (itemId) => {
    dispatch({ type: DECREMENT, params: { itemId } });
  };

  // const increment = (itemId) => ({
  //   type: "INCREMENT",
  //   itemId,
  // });

  // const decrement = (itemId) => ({
  //   type: "DECREMENT",
  //   itemId,
  // });

  const [total, setTotal] = useState(0);

  return (
    <>
      <p>Product List</p>
      <ul>
        {selector.map((item) => {
          return (
            <li key={item.id}>
              Title: {item.title}
              Price: {item.price}
              <button
                onClick={() => {
                  increment(item.id);
                }}
              >
                +
              </button>
              Quantity: {item.quantity}
              <button
                onClick={() => {
                  decrement(item.id);
                }}
              >
                -
              </button>
              Total: {item.price * item.quantity}
            </li>
          );
        })}
      </ul>
      <TotalList />
    </>
  );
};

export default ProductList;

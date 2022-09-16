import { INCREMENT, DECREMENT, LOAD_DATA } from "./action";
import { useSelector, useDispatch } from "react-redux";

const ProductList = () => {
  const selector = useSelector((state) => {
    console.log("LIST", state.ProductListReducer);
    return state.ProductListReducer;
  });

  const dispatch = useDispatch();

  const loadData = () => {
    dispatch({ type: LOAD_DATA, params: "load data" });
  };

  const increment = () => {
    dispatch({ type: INCREMENT });
  };

  const decrement = () => {
    dispatch({ type: DECREMENT });
  };

  return (
    <>
      <p>Product List</p>
      {/* <button onClick={loadData}>Add </button> */}
      <ul>
        {selector.map((item) => {
          return (
            <li key={item.id}>
              Title: {item.title}
              Price: {item.price}
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ProductList;

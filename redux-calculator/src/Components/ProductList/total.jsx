import { useSelector } from "react-redux";

const TotalList = () => {
  const selector = useSelector((state) => {
    return state.ProductListReducer;
  });
  console.log("selector", selector);
  return (
    <>
      {selector.reduce(function (accumulator, curValue) {
        console.log("accumulator", accumulator);
        console.log("curValue", curValue);
        return accumulator + curValue.price * curValue.quantity;
      }, 0)}
    </>
  );
};

export default TotalList;

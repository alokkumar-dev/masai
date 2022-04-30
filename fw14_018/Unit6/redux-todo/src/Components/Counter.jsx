import { useDispatch, useSelector } from "react-redux";
import { addCount, subCount } from "./Redux/action";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((store) => store.count);
  return (
    <>
      <h2>Counter: {count}</h2>
      <button
        onClick={() => {
          dispatch(addCount(1));
        }}
      >
        Add 1
      </button>
      <button
        onClick={() => {
          if (count > 0) dispatch(subCount(1));
        }}
      >
        Sub 1
      </button>
    </>
  );
};

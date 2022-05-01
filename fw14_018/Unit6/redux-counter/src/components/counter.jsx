import { useDispatch, useSelector } from "react-redux";
import { addCount, subCount } from "./redux/action";

export const Counter = () => {
  const count = useSelector((store) => store.count);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Counter: {count}</h1>
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

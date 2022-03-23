import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../Redux/actioin";

export const Counter = () => {
  const dispatch = useDispatch();
  const count = useSelector((store)=>store.count);
  console.log(count)
  return (
    <div>
      <h3>Counte: {count}</h3>
      <button
        onClick={() => {
          dispatch(addCount(1));
        }}
      >
        Add 1
      </button>
      {/* <button
        onClick={() => {
          dispatch(subCount(1));
        }}
      >
        Sub 1
      </button> */}
    </div>
  );
};

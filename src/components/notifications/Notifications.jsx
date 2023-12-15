import "./app.scss";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, setValue } from "./counterSlice";
import { useEffect } from "react";


function App() {
    const dispatch = useDispatch();

    useEffect(() => {
      fetch('/counter').then(res => res.json()).then(json => {
        dispatch(setValue(json.value))
      })
    }, []);
    const counter = useSelector((state) => state.counter.value);

    return (
      <div>
        <div>{counter}</div>
        <button onClick={() => dispatch(increment())}>Increment counter</button>
        <button onClick={() => dispatch(decrement())}>Decrement counter</button>
      </div>
    )
}

export default App;

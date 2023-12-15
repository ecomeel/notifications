import "./notifications.scss";
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
      <div className="notifications">
        <div className="container">
          <header className="notifications__header">
            <h1 className="notifications__title">Уведовления</h1>
          </header>
          <ul className="notifications__list">
            <li>herjkfd</li>
          </ul>
        </div>
      </div>
    )
}

export default App;

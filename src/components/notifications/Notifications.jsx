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
      <div className="notifications">
        <header className="notificetions__header">
          <h1 className="notitfications__title">Уведовления</h1>
          <ul className="notifications__list"></ul>
        </header>
      </div>
    )
}

export default App;

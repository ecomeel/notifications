import "./notifications.scss";
import { useSelector, useDispatch } from "react-redux";
import loadingImg from '../../assets/loading.gif'

import NotificationPreview from "../notification-preview/NotificationPreview";

import { increment, decrement, setValue } from "./counterSlice";
import { useEffect } from "react";

function App() {
    const dispatch = useDispatch();

    const indexesNotifications = [1, 2, 3, 4, 5];
    useEffect(() => {
        fetch("/counter")
            .then((res) => res.json())
            .then((json) => {
                dispatch(setValue(json.value));
            });
    }, []);
    const counter = useSelector((state) => state.counter.value);

    return (
        <div className="notifications">
            <div className="container">
                <header className="notifications__header">
                    <h1 className="notifications__title">Уведовления</h1>
                </header>
                <ul className="notifications__list">
                    {indexesNotifications.map(index => 
                      <NotificationPreview
                        key={index}
                        notIndex={index}
                      />
                    )}
                </ul>
            </div>
        </div>
    );
}

export default App;

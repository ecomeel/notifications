import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSelectedNotification } from "../notifications/selectedNotificationSlice";

function NotificationRecomendation() {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        fetch("/fullNotifications")
            .then((res) => res.json())
            .then((data) => {
                const notifications = data.data;
                const selectedNot = notifications.find(
                    (notification) => id == notification.id
                );
                dispatch(setSelectedNotification(selectedNot));
            });
    }, []);

    const notification = useSelector((state) => state.selectedNotification);
    const products = notification.products;
    // console.log(products);

    return (
        <>
            <div className="recomendation">
                <Link to="/">Назад</Link>

                <div className="">
                    <img src={notification.img} alt="" />
                    <h2>{notification.title}</h2>
                    <p>{notification.description}</p>
                    <ul className="">
                        {console.log(products)}
                        {products && products.map((product) => (
                            <li key={product.name}>
                                <img src={product.productImg} alt="" />
                                <h3>{product.name}</h3>
                                <p>{product.price}</p>
                            </li>
                        ))}

                    </ul>
                </div>
            </div>
        </>
    );
}

export default NotificationRecomendation;


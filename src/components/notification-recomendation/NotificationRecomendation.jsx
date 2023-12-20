import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { setSelectedNotification } from "../../store/selectedNotificationSlice";
import './notification-recomendation.scss'

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

    return (
        <>
            <div className="recomendation">
                <Link className="back-btn" to="/">Назад</Link>

                <div className="recomendation__wrapper">
                    <img className="recomendation__image" src={notification.img} alt="" />
                    <h2 className="recomendation__title">{notification.title}</h2>
                    <p className="recomendation__description">{notification.description}</p>
                    <ul className="recomendation__products">
                        {console.log(products)}
                        {products && products.map((product) => (
                            <li className="recomendation__product product" key={product.name}>
                                <img className="product__image" src={product.productImg} alt="" />
                                <h3 className="product__name">{product.name}</h3>
                                <p className="product__price">{product.price} ₽</p>
                            </li>
                        ))}

                    </ul>
                    <button className="recomendation__check-btn">Посмотреть</button>
                </div>
            </div>
        </>
    );
}

export default NotificationRecomendation;


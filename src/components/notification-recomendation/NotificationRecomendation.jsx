import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import "./notification-recomendation.scss";

import loadingImg from "../../assets/loading.gif";
import {
    setSelectedNotification,
    setIsNotificationLoading,
    setIsNotificationLoadingError,
    setIsNotificationLoadingSuccess,
} from "../../store/selectedNotificationSlice";

function NotificationRecomendation() {
    const { id } = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setIsNotificationLoading(true));
        dispatch(setIsNotificationLoadingError(false));
        dispatch(setIsNotificationLoadingSuccess(false));
        fetch("/fullNotifications")
            .then((res) => res.json())
            .then((data) => {
                const notifications = data.data;
                const selectedNot = notifications.find(
                    (notification) => id == notification.id
                );
                dispatch(setSelectedNotification(selectedNot));
                dispatch(setIsNotificationLoadingSuccess(true));
            })
            .catch((error) => {
                console.log(error);
                dispatch(setIsNotificationLoadingError(true));
            })
            .finally(() => {
                dispatch(setIsNotificationLoading(false));
            });
    }, []);

    const notifications = useSelector(
        (state) => state.notifications.notifications
    );
    fetch("/notifications", {
        method: "POST",
        body: notifications,
    });

    const notification = useSelector(
        (state) => state.selectedNotification.notification
    );
    const products = notification.products;

    const isLoading = useSelector(
        (state) => state.selectedNotification.isNotificationLoading
    );
    const isLoadingError = useSelector(
        (state) => state.selectedNotification.isNotificationLoadingError
    );
    const isLoadingSuccess = useSelector(
        (state) => state.selectedNotification.isNotificationLoadingSuccess
    );

    return (
        <>
            <div className="recomendation">
                <Link className="back-btn" to="/">
                    Назад
                </Link>
                {isLoading && <img className="loading" src={loadingImg} />}
                {isLoadingError && <p className="error">Loading Error</p>}
                {isLoadingSuccess && (
                    <div className="recomendation__wrapper">
                        <img
                            className="recomendation__image"
                            src={notification.img}
                            alt=""
                        />
                        <h2 className="recomendation__title">
                            {notification.title}
                        </h2>
                        <p className="recomendation__description">
                            {notification.description}
                        </p>
                        <ul className="recomendation__products">
                            {products &&
                                products.map((product) => (
                                    <li
                                        className="recomendation__product product"
                                        key={product.name}
                                    >
                                        <img
                                            className="product__image"
                                            src={product.productImg}
                                            alt=""
                                        />
                                        <h3 className="product__name">
                                            {product.name}
                                        </h3>
                                        <p className="product__price">
                                            {product.price} ₽
                                        </p>
                                    </li>
                                ))}
                        </ul>
                        <button className="recomendation__check-btn">
                            Посмотреть
                        </button>
                    </div>
                )}
            </div>
        </>
    );
}

export default NotificationRecomendation;

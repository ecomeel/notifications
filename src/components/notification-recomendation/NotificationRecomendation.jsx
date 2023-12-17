import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
function NotificationRecomendation() {
    const {id} = useParams();

    return (
        <div className="recomendation">
            <Link to='/'>Назад</Link>
            <h2 className="recomendation__title">Notification recomendation</h2>
            <p>Id: {id}</p>
        </div>
    )
}

export default NotificationRecomendation

// Получаем id из  url и получаем по id данные уведомления
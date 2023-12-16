import { Link } from "react-router-dom"
import { useParams } from "react-router-dom"
function NotificationSurvey() {
    return (
        <div className="survey">
            <Link to='/'>Назад</Link>
            <h2 className="survey__title">Notification Survey</h2>
            <p>ID: {}</p>
        </div>
    )
}

export default NotificationSurvey
function NotificationPreview({ index }) {
    return (
        <div className="notification-preview">
            <header className="notification-preview__header">
                <h2 className="notification-priview__title">Title {index}</h2>
                <p className="notification-preview__time">15.12.2023 18:10</p>
            </header>
            <div className="notification-preview__description">
                <p className="notification__desc">Description {index}</p>
            </div>
        </div>
    )
}

export default NotificationPreview;
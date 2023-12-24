import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <header className="notifications__header">
                <h1 className="notifications__title">Уведомления</h1>
            </header>
            <Outlet />
        </>
    );
}

export default Layout;

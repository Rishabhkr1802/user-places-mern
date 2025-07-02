import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <div className="row">
            <div className="col-4">Sidebar</div>
            <div className="col-8"><Outlet /></div>
        </div>
    );
}

export default Layout;
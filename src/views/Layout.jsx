import { NavLink, Outlet } from "react-router-dom";

function Layout() {
    return (  
        <>
            <header className="header--main container">
                <nav>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/cart'>Cart</NavLink>
                </nav>
                <h1>Candy Shop</h1>
            </header>
            <Outlet />
        </>
    );
}

export default Layout;
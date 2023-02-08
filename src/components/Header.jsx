import React from "react";
import { Link, useLocation } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Header = () => {
    const [showLogin, setShowLogin] = React.useState(false);
    const [showRegister, setShowRegister] = React.useState(false);
    const location = useLocation();

    const handleLogin = () => {
        setShowLogin(true);
    };

    const handleRegister = () => {
        setShowRegister(true);
    };

    return (
        <header>
            <nav>
                <Link to="/">
                    <h1>My Website</h1>
                </Link>
                {location.pathname === "/" ? (
                    <>
                        <button onClick={handleLogin}>Login</button>
                        <button onClick={handleRegister}>Register</button>
                        {showLogin && <Login />}
                        {showRegister && <Register />}
                    </>
                ) : (
                    <p>Welcome, User</p>
                )}
            </nav>
        </header>
    );
};

export default Header;

import React, { useState } from "react";

const AuthContext = React.createContext({
    isAuth: false,
    login: () => { },
});

const AuthContextProvider = (props) => {
    const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

    const loginHandler = () => {
        localStorage.setItem('token', 'your-token-here');
        setIsAuthenticated(true);
    };

    return (
        <AuthContext.Provider
            value={{ isAuth: isAuthenticated, login: loginHandler }}
        >
            {props.children}
        </AuthContext.Provider>
    );
};

export { AuthContext, AuthContextProvider };
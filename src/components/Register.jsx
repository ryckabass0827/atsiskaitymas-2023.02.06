import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: ""
    });
    const [error, setError] = useState(null);
    const [userData, setUserData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        // Fetch user data from db.json
        fetch("http://localhost:3000/users")
            .then(response => response.json())
            .then(data => {
                setUserData(data);
            });
    }, []);

    const handleInputChange = event => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value
        });

        // Check if username or email already exists
        const userExists = userData.find(
            user =>
                user.username === formData[event.target.name] ||
                user.email === formData[event.target.name]
        );
        if (userExists) {
            setError("Username or Email already exists.");
            return;
        } else {
            setError(null);
        }
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords does not match.");
            return;
        }

        // Add new user to db.json
        const newUser = {
            ...formData,
            id: userData.length + 1
        };
        fetch("http://localhost:3000/users", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newUser)
        })
            .then(response => response.json())
            .then(data => {
                navigate("/home");
            });
    };
    return (
        <form onSubmit={handleSubmit}>
            {error && <p>{error}</p>}
            <div>
                <label htmlFor="username">Username:</label>
                <input
                    type="text"
                    id="username"
                    name="username"
                    value={formData.username}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                    type="password"
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="confirmPassword">Confirm Password:</label>
                <input
                    type="password"
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                />
            </div>
            <button type="submit">Register</button>
        </form>
    );
};

export default Register;

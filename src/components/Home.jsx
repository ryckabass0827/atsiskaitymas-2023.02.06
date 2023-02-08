import React, { useState, useContext, useEffect } from 'react';
import { AuthContext } from '../context/AuthContext';

const Home = () => {
    const [username, setUsername] = useState('');
    const [image, setImage] = useState('');
    const { auth } = useContext(AuthContext);

    // Fetch the user data from db.json
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const response = await fetch('db.json');
                const data = await response.json();
                // Filter the user data based on the logged in user's id
                const userData = data.find(user => user.id === auth.user.id);
                setUsername(userData.username);
                setImage(userData.image);
            } catch (error) {
                console.error(error);
            }
        };

        if (auth.user) {
            fetchUserData();
        }
    }, [auth.user]);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const user = {
                username,
                image
            };
            localStorage.setItem('user', JSON.stringify(user));
        } catch (err) {
            console.error(err);
        }
    };

    if (!auth.user) {
        return <div>You are not logged in</div>;
    }
    return (
        <div className="Home">
            <h1>Welcome, {auth.user.username}</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Update username:
                    <input
                        type="text"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                    />
                </label>
                <label>
                    Add Avatar:
                    <input
                        type="text"
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                    />
                </label>
                <button type="submit">Update</button>
            </form>
        </div>
    );
};

export default Home;

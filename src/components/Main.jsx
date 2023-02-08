import React, { useState, useEffect } from "react";

function Main() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const response = await fetch("path/to/db.json");
            const data = await response.json();
            setPosts(data.posts);
        }
        fetchData();
    }, []);

    return (
        <div>
            {posts.map(post => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))}
        </div>
    );
}

export default Main;

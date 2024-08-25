import React, { useState, useEffect } from "react";
import { getPosts, deletePost } from "../services/postService";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    getPosts()
      .then((response) => {
        const data = response.data;
        console.log(data);
        setPosts(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  const handleDelete = (id) => {
    deletePost(id)
      .then((response) => {
        const newPosts = posts.filter((post) => post.id !== id);
        setPosts(newPosts);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
            </li>
          );
        })}
        <li></li>
      </ul>
    </div>
  );
}

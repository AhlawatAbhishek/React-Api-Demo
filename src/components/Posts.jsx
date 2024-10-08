import React, { useState, useEffect } from "react";
import { getPosts, deletePost } from "../services/postService";
import PostFrom from "./PostForm";
export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);
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
      .then(() => {
        const newPosts = posts.filter((post) => post.id !== id);
        setPosts(newPosts);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const startEditing = (post) => {
    setEditingPost(post);
  };

  return (
    <div>
      <h1>Posts</h1>
      <PostFrom
        posts={posts}
        setPosts={setPosts}
        editingPost={editingPost}
        setEditingPost={setEditingPost}
      />
      <ul>
        {posts.map((post) => {
          return (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
              <button onClick={() => handleDelete(post.id)}>Delete</button>
              <button onClick={() => startEditing(post)}>Edit</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

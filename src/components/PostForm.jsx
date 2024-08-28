import React, { useState } from "react";
import { createPost } from "../services/postService";
export default function PostForm({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    addPost();
    setBody("");
    setTitle("");
  };
  const addPost = () => {
    createPost({ title, body })
      .then((response) => {
        setPosts([...posts, response.data]);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <form onSubmit={handleSubmit}>
      <div>Title</div>
      <input
        type="text"
        value={title}
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <div>Body</div>
      <textarea
        value={body}
        onChange={(event) => setBody(event.target.value)}
      ></textarea>
      <div>
        <button type="submit">Add Post</button>
      </div>
    </form>
  );
}

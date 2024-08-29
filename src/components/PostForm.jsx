import React, { useState, useEffect } from "react";
import { createPost, updatePost } from "../services/postService";
export default function PostForm({
  posts,
  setPosts,
  editingPost,
  setEditingPost,
}) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const editPost = () => {
    updatePost(editingPost.id, { title, body })
      .then((response) => {
        const newPosts = posts.map((post) => {
          if (post.id === editingPost.id) {
            return response.data;
          }
          return post;
        });
        setPosts(newPosts);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  useEffect(() => {
    if (editingPost) {
      setTitle(editingPost.title);
      setBody(editingPost.body);
    } else {
      setTitle("");
      setBody("");
    }
  }, [editingPost]);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (editingPost) {
      editPost();
    } else {
      addPost();
    }
    setBody("");
    setTitle("");
    setEditingPost(null);
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
        <button type="submit">{editingPost ? "Edit Post" : "Add Post"}</button>
      </div>
    </form>
  );
}

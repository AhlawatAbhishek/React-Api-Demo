import React, { useState } from "react";

export default function PostForm({ posts, setPosts }) {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  return (
    <form>
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
    </form>
  );
}

import React, { useState, useEffect } from "react";
import { getPosts } from "../services/postService";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    console.log("Getting posts...");
  }, []);
  return <></>;
}

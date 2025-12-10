import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostIndex } from "./PostIndex";

export function PostIndexPage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  function handleIndex() {
    axios.get("/posts.json").then((response) => {
      setPosts(response.data);
    });
  };

  useEffect(handleIndex, []);

  function handleShow(post) {
    navigate(`/posts/${post.id}`);
  };

  return (
    <div>
      <h1> All Posts </h1>
      <PostIndex postsProp={posts} onShow={handleShow} />
    </div>
  );
};

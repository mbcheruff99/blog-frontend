import { PostIndex } from "./PostIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState, useEffect } from 'react'

export function PostPage() {
  const [posts, setPosts] = useState([]);

  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);

    })}

  const handleShow = (posts) => {
    console.log("handleShow", posts)
  }

  useEffect(handleIndex, []);

  return (
    <div>
      <PostsNew />
      <PostIndex postsProp={posts} onShow={handleShow} />
    </div>
  );
}

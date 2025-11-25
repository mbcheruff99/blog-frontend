import { PostIndex } from "./PostIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState, useEffect } from 'react'
import { Modal } from "./Modal"

export function PostPage() {

  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false)

  function handleIndex() {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    })}

  function handleShow(posts) {
    console.log("handleShow", posts)
    setIsPostsShowVisible(true);
  }

  useEffect(handleIndex, []);

  return (
    <div>
      <PostsNew />
      <PostIndex postsProp={posts} onShow={handleShow} />
      <Modal show={isPostsShowVisible} onClose={() => setIsPostsShowVisible(false)}>
        Testing 
      </Modal>
    </div>
  );
}

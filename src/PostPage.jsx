import { PostIndex } from "./PostIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState, useEffect } from 'react'
import { Modal } from "./Modal"
import { PostsShow } from "./PostsShow";

export function PostPage() {

  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  function handleIndex() {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    })}

  function handleShow(post) {
    console.log("handleShow", post);
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  }

  useEffect(handleIndex, []);

  return (
    <div>
      <PostsNew />
      <PostIndex postsProp={posts} onShow={handleShow} />
      <Modal show={isPostsShowVisible} onClose={() => setIsPostsShowVisible(false)}>
       <PostsShow post={currentPost}/>
      </Modal>
    </div>
  );
}

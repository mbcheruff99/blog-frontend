import { PostIndex } from "./PostIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState, useEffect } from 'react'
import { Modal } from "./Modal"
import { PostsShow } from "./PostsShow";

export function PostPage() {

  useEffect(handleIndex, []);
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
  
  function handleCreate(params) {
    console.log("handleCreate");
    axios.post("http://localhost:3000/posts.json", params).then((response) => {
      console.log(response.data);
      setPosts([...posts, response.data]);
    });
  }

   const handleUpdate = (post, params) => {
    console.log("handleUpdate");
    axios.patch(`http://localhost:3000/posts/${post.id}.json`, params).then((response) => {
      setPosts(posts.map(p => p.id === response.data.id ? response.data : p));
      setIsPostsShowVisible(false);
    });
  };

  function handleDestroy(post) {
    console.log("handleDestroy", post);
    axios.delete(`http://localhost:3000/posts/${post.id}.json`).then((response) => {
      console.log(response.data);
      setPosts(posts.filter(p => p.id !== post.id));
      setIsPostsShowVisible(false);
    })
  }


  return (
    <div>
      <PostsNew onCreate={handleCreate} />
      <PostIndex postsProp={posts} onShow={handleShow} />
      <Modal show={isPostsShowVisible} onClose={() => setIsPostsShowVisible(false)}>
       <PostsShow post={currentPost} onUpdate={handleUpdate} onDestroy={handleDestroy} />
      </Modal>
    </div>
  );
}

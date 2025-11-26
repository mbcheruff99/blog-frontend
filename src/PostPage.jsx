import { PostIndex } from "./PostIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";
import { useState, useEffect } from 'react'
import { Modal } from "./Modal"
import { PostsShow } from "./PostsShow";

axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

export function PostPage() {

  useEffect(handleIndex, []);
  const [posts, setPosts] = useState([]);
  const [isPostsShowVisible, setIsPostsShowVisible] = useState(false);
  const [currentPost, setCurrentPost] = useState({});

  function handleIndex() {
    axios.get("/posts.json").then((response) => {
      console.log(response.data);
      setPosts(response.data);
    })}

  function handleShow(post) {
    setIsPostsShowVisible(true);
    setCurrentPost(post);
  }
  
  function handleCreate(params) {
    axios.post("/posts.json", params).then((response) => {
      console.log(response.data);
      setPosts([...posts, response.data]);
    });
  }

   const handleUpdate = (post, params) => {
    axios.patch(`/posts/${post.id}.json`, params).then((response) => {
      setPosts(posts.map(p => p.id === response.data.id ? response.data : p));
      setIsPostsShowVisible(false);
    });
  };

  function handleDestroy(post) {
    axios.delete(`/posts/${post.id}.json`).then((response) => {
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

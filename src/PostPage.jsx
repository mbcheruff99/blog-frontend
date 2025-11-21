import { PostIndex } from "./PostIndex";
import { PostsNew } from "./PostsNew";
import axios from "axios";

export function PostPage() {
  let posts = [];

  const handleIndex = () => {
    axios.get("http://localhost:3000/posts.json").then((response) => {
      console.log(response.data);
      posts = response.data
    })
  }

  return (
    <div>
      <PostsNew />
      <PostIndex postsProp={posts} />
      <button onClick={handleIndex}> Load Posts </button>
    </div>
  );
}

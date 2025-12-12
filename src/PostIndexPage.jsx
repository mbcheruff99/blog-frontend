import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PostIndex } from "./PostIndex";

export function PostIndexPage() {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const [allTags, setAllTags] = useState([]);
  const [selectedTag, setSelectedTag] = useState("");

  function handleIndex(filterTag = "") {
    axios.get(`/posts.json?tag=${filterTag}`).then((response) => {
      setPosts(response.data);
    });
  };

  function handleIndexTags() {
    axios.get("/tags.json").then((response) => {
      setAllTags(response.data)
    });
  }

  useEffect(() => {
    handleIndex()
    handleIndexTags()
  }, [])

  function handleFilterChange(event) {
    const tag = event.target.value;
    setSelectedTag(tag);
    handleIndex(tag);
  }

  function handleShow(post) {
    navigate(`/posts/${post.id}`);
  };

  return (
    <div>
      <h1> All Posts </h1>
      <div className="mb-3">
        <label htmlFor="tagFilter" className="form-label">Filter by Tag:</label>
        <select
          id="tagFilter"
          className="form-select"
          style={{ maxWidth: "200px" }}
          value={selectedTag}
          onChange={handleFilterChange}
        >
          <option value="">All Recipes</option>
          {allTags.map((tag) => (
            <option key={tag.id} value={tag.name}>
              {tag.name}
            </option>
          ))}
        </select>
      </div>
      <PostIndex postsProp={posts} onShow={handleShow} />
    </div>
  );
};

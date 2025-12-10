import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <div>
      <h1>Welcome to this blog</h1>
      <p> Look at all these posts</p>
      <Link to="/posts" > See all posts </Link>
      
    </div>
  )
}
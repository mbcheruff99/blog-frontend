import axios from "axios";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header"
// import { PostPage } from "./PostPage";
import { SignupPage } from "./SignupPage";  
import { LoginPage } from "./LoginPage";
import { HomePage } from "./HomePage";
import { PostIndexPage } from "./PostIndexPage";
import { PostsNewPage } from "./PostsNewPage";
import { PostsShowPage } from "./PostsShowPage";


axios.defaults.baseURL = "http://localhost:3000";
axios.defaults.withCredentials = true;

axios.defaults.baseURL = process.env.NODE_ENV === "development" 
  ? "http://localhost:3000" 
  : "https://my-blog-backend-np7n.onrender.com"; 

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <HomePage />
      },
      {
        path: "/posts",
        element: <PostIndexPage />
      },
      {
        path: "/posts/new",
        element: <PostsNewPage />
      },
      {
        path: "/posts/:id",
        element: <PostsShowPage />
      },
      {
        path: "/signup",
        element: <SignupPage />
      },
      {
        path: "/login",
        element: <LoginPage />
      }
    ]
  }
]);

function App() {
  return <RouterProvider  router={router} />;
}
export default App;
import { Footer } from "./Footer";
import { Header } from "./Header"
import { PostPage } from "./PostPage";
import { SignupPage } from "./SignupPage";  
import { LoginPage } from "./LoginPage";

function App() {
  const email = localStorage.getItem("email")
  return (
    <div>
      <Header/>
      { !email && (
              <> 
                <SignupPage/>
                <LoginPage/>
              </>
            )}
      <PostPage/>
      <Footer/>
    </div>
  );
}

export default App;
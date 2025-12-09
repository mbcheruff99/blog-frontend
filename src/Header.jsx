import { LogoutLink  } from "./LogoutLink"


export function Header() {

  const email = localStorage.getItem("email")
  
  return (
    <header>
      <nav className="navbar bg-primary navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"
          style={{fontFamily: "Superclarendon, 'Bookman Old Style', 'URW Bookman', 'URW Bookman L', 'Georgia Pro', Georgia, serif", fontWeight: "bold" }}>Blog Page</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#posts-all">All Posts</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#posts-new">New Post</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <a href="#">  </a>
      {email ? (
        <>
          <p> Logged in as {email} | <LogoutLink/> </p>
        </>
      ) : (
        <>
          <a href="#signup">  Sign up </a>
          <a href="login"> Login</a>
        </>
      )}
      <br/>
    </header>
  )
}

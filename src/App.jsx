function Header() {
  return (
    <header>
        <a href="#">Home</a> | <a href="#posts-all">All posts</a> | <a href="#posts-new">New post</a>
    </header>
  )
}

function PostsNew() {
  return (
    <div id="posts-new">
        <h1>New post</h1>
        <form>
          <div>
            Title: <input type="text"/>
          </div>
          <br/>
          <div>
            Post: <input type="text"/>
          </div>
          <br/>
          <button type="submit"> Create Post</button>
        </form>
    </div>
  )
}

function PostIndex(props) {
  return (
    <div id="posts-index">
      <br/>
      <h1>All posts - {props.postsProp.length} </h1>
      <div className="posts"/>
        <h2> Here's a Post of Sorts</h2>
        <p>By Me</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flower_jtca001.jpg"/>
        <br />

      <div className="posts"/>
        <h2> Here's another Post</h2>
        <p>By MC</p>
        <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Part_of_a_bookshelf_containing_books_by_ancient_philosophers_%281.1%29.jpg"/>
        <br />
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2042</p>
    </footer>
  )
}

function PostPage() {
  let posts = [
      {
        id: 1,
        title: "Here is a post of sorts",
        body: "this is stuff blah blah",
        image: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flower_jtca001.jpg",
      },
      {
        id: 2,
        title: "another post",
        body: "some stuff",
        image: "https://upload.wikimedia.org/wikipedia/commons/7/73/Part_of_a_bookshelf_containing_books_by_ancient_philosophers_%281.1%29.jpg",
      },
      {
        id: 3,
        title: "___",
        body: "___",
        image: "___",
      },
    ];
  return (
    <div>
      <PostsNew/>
      <PostIndex postsProp={posts}/>
    </div>
  )
}

function App() {
  return (
    <div>
      <Header/>
      <PostPage/>
      <Footer/>
    </div>
  );
}

export default App;


//  asdfgh

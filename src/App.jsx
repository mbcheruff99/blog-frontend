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
        {props.postsProp.map((post) => (
          <div key={post.id} className="posts"> 
            <h2>{post.title}</h2>
            <img src={post.image}/>
            <p>{post.body}</p>
            <button> Read </button>
          </div>
          ))}
    </div>
  )
}

function Footer() {
  return (
    <footer>
      <p>Copyright 2025</p>
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

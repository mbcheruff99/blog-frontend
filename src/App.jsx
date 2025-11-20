function App() {
  return (
    <div>
      <header>
        <a href="https://chabad.org">Home</a> | <a href="#posts-index">All posts</a> | <a href="#posts-new">New post</a>
      </header>

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

      <div id="posts-index">
        <br/>
        <h1>All posts</h1>
        <div className="posts"/>
          <h2> Here's a Post of Sorts</h2>
          <p>By Me</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/b/ba/Flower_jtca001.jpg"/>
          <br />
          <button onClick={() => window.open("https://www.goodreads.com/")}> Read </button>

        <div className="posts"/>
          <h2> Here's another Post</h2>
          <p>By MC</p>
          <img src="https://upload.wikimedia.org/wikipedia/commons/7/73/Part_of_a_bookshelf_containing_books_by_ancient_philosophers_%281.1%29.jpg"/>
          <br />
          <button onClick={() => window.open("https://www.neighborhoodcats.org/")}> Read </button>
      </div>

      <footer>
        <p>Copyright 2042</p>
      </footer>
    </div>
  );
}

export default App;
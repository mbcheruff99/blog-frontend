export function PostsNew({onCreate}) {

  function handleSubmit(event) {
    event.preventDefault();
    const form = event.target;
    const params = new FormData(form);
    onCreate(params);
    form.reset();
  }

  return (
    <div id="posts-new">
      <h1>New Post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input className="form-control" name="title" type="text" />
        </div>
        <br />
        <div>
          Post: <input className="form-control" name="body" type="text" />
        </div>
        <br />
        <div>
          Image URL: <input className="form-control" name="image" type="text"/>
        </div>
        <br/> 
        <button className="btn btn-primary" type="submit"> Create Post</button>
      </form>
    </div>
  );
}
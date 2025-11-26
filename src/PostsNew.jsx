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
      <h1>New post</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Title: <input name="title" type="text" />
        </div>
        <br />
        <div>
          Post: <input name="body" type="text" />
        </div>
        <br />
        <div>
          Image URL: <input name="image" type="text"/>
        </div>
        <br/> 
        <button type="submit"> Create Post</button>
      </form>
    </div>
  );
}
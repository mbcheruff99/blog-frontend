export function PostsShow(props) {
  function handleSubmit(event) {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdate(props.post, params);
    event.target.reset();
  }

  return (
    <div id="posts-show">
       <h2> {props.post.title} </h2> 
       <img src={props.post.image}/>
        <p> {props.post.body} </p>
        <hr/>
        <h2> Edit Post</h2>
        <form onSubmit={handleSubmit}>
          <div>
            Title: <input name="title" defaultValue={props.post.title} type="text" />
          </div>
          <div>
            Post: <input name="body" defaultValue={props.post.body} type="text" />
          </div>
          <div> 
            Image URL: <input name="image" defaultValue={props.post.image} type="text" />
          </div>
          <button type="submit"> Update Post </button>
        </form>
        <button onClick={() => props.onDestroy(props.post)} > Delete Post</button>
    </div>
  )
}
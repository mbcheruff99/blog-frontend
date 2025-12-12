export function PostsShow({post, onUpdate, onDestroy}) {
  function handleSubmit(event) {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(post, params);
    event.target.reset();
  }

  return (
    <div id="posts-show">
       <h2> {post.title} </h2> 
        <div className="mb-3">
          <strong>Tags: </strong>
          {post.tags && post.tags.length > 0 ? (
            post.tags.map((tag) => (
              <span key={tag.id} className="badge bg-info me-1">
                {tag.name}
              </span>
            ))
          ) : (
            <span className="text-muted">No tags</span>
          )}
        </div>
        <img src={post.image}/>
        <p> {post.body} </p>
        <hr/>
{/* edit section */}
        <h2> Edit Post</h2>
        <form onSubmit={handleSubmit}>
          <div>
            Title: <input name="title" defaultValue={post.title} type="text" />
          </div>
          <div>
            Post: <input name="body" defaultValue={post.body} type="text" />
          </div>
          <div> 
            Image URL: <input name="image" defaultValue={post.image} type="text" />
          </div>
          <button type="submit"> Update Post </button>
        </form>
{/* delete button */}
        <button onClick={() => onDestroy(post)} > Delete Post </button>
    </div>
  )
}
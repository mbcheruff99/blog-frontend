export function PostIndex({postsProp, onShow} ) {
  return (
    <div id="posts-index">
      <br />
      <h1>All posts {postsProp.length} </h1>
      <div className="row row-cols-2 row-cols-md-4 g-4">
        {postsProp.map((post) => (
          <div key={post.id} className="col"> 
            <div className="card h-100"> 
              <div className="ratio ratio-16x9"> 
                <img src={post.image} className="object-fit-cover img-fluid" alt="..."/>
              </div>
              <div className="card-body"> 
                <h5 className="card-title"> {post.title} </h5>
                <p className="card-text"> {post.body}</p>
                <button className="btn btn-primary" onClick={() => onShow(post)}> More Info </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

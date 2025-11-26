export function PostIndex({postsProp, onShow} ) {
  return (
    <div id="posts-index">
      <br />
      <h1>All posts {postsProp.length} </h1>
      {postsProp.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} />
          <p>{post.body}</p>
          <button onClick={() => onShow(post)}> More Info </button>
        </div>
      ))}
    </div>
  );
}

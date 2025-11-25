export function PostIndex(props) {
  return (
    <div id="posts-index">
      <br />
      <h1>All posts {props.postsProp.length} </h1>
      {props.postsProp.map((post) => (
        <div key={post.id} className="posts">
          <h2>{post.title}</h2>
          <img src={post.image} />
          <p>{post.body}</p>
          <button onClick={() => props.onShow(post)}> Read </button>
        </div>
      ))}
    </div>
  );
}

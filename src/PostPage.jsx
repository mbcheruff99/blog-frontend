import { PostIndex } from "./PostIndex";
import { PostsNew } from "./PostsNew";

export function PostPage() {
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
      <PostsNew />
      <PostIndex postsProp={posts} />
    </div>
  );
}

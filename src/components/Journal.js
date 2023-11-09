import { Link } from "react-router-dom";

//destructure the post from props
const Post = ({ post }) => {
  //////////////////
  // Style Objects
  //////////////////
  const div = {
    textAlign: "center",
    border: "3px solid",
    margin: "10px auto",
    width: "80%",
  };
  return (
    <div style={div}>
      <Link to={`/journal/${post.id}`}>
        <h1>{post.activities}</h1>
      </Link>
      <h2>{post.mood}</h2>
      <h2>{post.date}</h2>
    </div>
  );
};

export default Post
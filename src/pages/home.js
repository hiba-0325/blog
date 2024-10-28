import React from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { select } from "../Blog/blogslice";

function HomePage() {
  const posts = useSelector((state) => state.blog.posts);
  const dispatch = useDispatch();

  return (
    <div>
      <h1> Blog List</h1>
      <Link to="/add">
        <button> create</button>
      </Link>

      <ul>
        {posts.map((blog) => (
          <li key={blog.id} style={{ listStyleType: "none" }}>
            <Link to={"/blog"} onClick={() => dispatch(select(blog.id))}>
              {blog.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default HomePage;

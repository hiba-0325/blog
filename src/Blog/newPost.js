import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "./blogslice";
import { useNavigate } from "react-router-dom";

function AddPost() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleAdd = () => {
    dispatch(
      addPost({
        id: Date.now(),
        title,
        content,
      })
    );
    navigate("/");
  };

  return (
    <div>
      <h1>ADD BLOG</h1>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        id="text"
        style={{ display: "block", marginLeft: "600px", paddingRight: "30px" }}
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        style={{ display: "block", marginLeft: "600px", padding: "100px" }}
      />

      <button onClick={handleAdd}>ADD</button>
    </div>
  );
}

export default AddPost;

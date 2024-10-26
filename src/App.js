import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./Blog/BlogList";

import NewPost from "./Blog/newPost";
import PostPage from "./pages/post";

const App = () => {
  return (
    <Router>
      <div>
        <NewPost />
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/post/:id" element={<PostPage />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

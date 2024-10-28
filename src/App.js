import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home";
import AddPost from "./Blog/newPost";
import DetailsPage from "./Blog/BlogDetails";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/add" element={<AddPost />} />
          <Route path="/blog" element={<DetailsPage />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;

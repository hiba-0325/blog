import React from "react";
import { useSelector } from "react-redux";

function DetailsPage() {
  const blogDetails = useSelector((state) => state.blog.details);

  return (
    <div>
      <h1>{blogDetails.title}</h1>
      <p>{blogDetails.content}</p>
    </div>
  );
}

export default DetailsPage;

import React from "react";
import { useParams } from "react-router-dom";

const ComponentTwo = ({ blogs }) => {
  const { id } = useParams();
  const blogToPost = blogs.find((blog) => blog.id.toString() === id);
  return (
    <>
      <h3>Blog Description</h3>
      {blogToPost && (
        <>
          <h4>{blogToPost.title}</h4>
          <p>{blogToPost.description}</p>
        </>
      )}
    </>
  );
};

export default ComponentTwo;

import React from "react";
import { Link } from "react-router-dom";

const ComponentOne = ({ blogs }) => {
  return (
    <>
      <h3>Blog List</h3>
      <ul>
        {blogs &&
          blogs?.length !== 0 &&
          blogs?.map((blog) => (
            <li key={blog.id}>
              <h3>
                <Link to={`/${blog.id}`}>{blog.title}</Link>
              </h3>
              <p>{blog.description}</p>
            </li>
          ))}
      </ul>
    </>
  );
};

export default ComponentOne;

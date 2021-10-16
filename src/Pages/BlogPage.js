import React from "react";
import blogContent from "./blog-content";

const BlogPage = ({ match }) => {
  const name = match.params.name;
  const blog = blogContent.find((blog) => blog.name === name);
  if (!blog) return <h1>Sorry, article doesn't exist</h1>;
  return (
    <>
      <h1>{blog.title}</h1>
      {blog.content.map((paragraph, key) => (
        <p key={key}>{paragraph}</p>
      ))}
    </>
  );
};

export default BlogPage;

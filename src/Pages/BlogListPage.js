import React from "react";
import { Link } from "react-router-dom";
import blogContent from "./blog-content";
const BlogListPage = () => (
  <>
    <h1>Blogs</h1>
    {blogContent.map((blog, key) => (
      <Link className="blog-list-item" key={key} to={`/blog/${blog.name}`}>
        <h3>{blog.title}</h3>
        <p>{blog.content[0].substring(0, 150)}...</p>
      </Link>
    ))}
  </>
);

export default BlogListPage;

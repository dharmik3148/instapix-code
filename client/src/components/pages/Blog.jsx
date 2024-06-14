import React from "react";
import "./pages.css";
import { blogData } from "./BlogData";
import { NavLink, Outlet } from "react-router-dom";

const Blog = () => {
  return (
    <div className="page-section">
      <span className="page-title">Blogs</span>
      <div className="page-content">
        <div className="blogContent">
          {blogData.map((item) => (
            <NavLink to={`/blog/${item.id}`} className="blogItem" key={item.id}>
              <span className="title">{item.title}</span>
              <p className="shortDesc">{item.shortDesc}</p>
              <p className="date">{item.date}</p>
              <span className="readMore">Read More ▶</span>

              {/* <div dangerouslySetInnerHTML={{ __html: item.description }} /> */}
            </NavLink>
          ))}
        </div>
      </div>
      <Outlet />
    </div>
  );
};

export default Blog;

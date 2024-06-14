import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { blogData } from "./BlogData";

const BlogDetail = () => {
  const { blogId } = useParams();
  const [blogObject, setBlogObject] = useState({});

  useEffect(() => {
    const blogg = blogData.find((blg) => blg.id === blogId);
    setBlogObject(blogg);
  }, [blogId]);

  return (
    <>
      <article className="blogDiv">
        <h3 className="title">{blogObject.title}</h3>
        <p
          className="description"
          dangerouslySetInnerHTML={{ __html: blogObject.description }}
        />
      </article>
    </>
  );
};

export default BlogDetail;

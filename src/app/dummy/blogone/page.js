import Image from "next/image";
import React from "react";

const BlogOne = () => {
  return (
    <>
      <div className="blog">
        <div className="blog__wrapper">
          <Image
            className="b-image"
            src={require("../../../../public/ArticleImageOne.png")}
          />
        </div>
        <div className="author">
          <Image
            className="b-image"
            src={require("../../../../public/ArticleImageOne.png")}
          />
          <div>
            <h1>John Ossai</h1>
            <p>Author</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogOne;

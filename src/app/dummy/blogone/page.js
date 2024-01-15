import Image from "next/image";
import React from "react";

const BlogOne = () => {
  return (
    <>
      <div className="blog">
        <Image src={require("../../../../public/ArticleImageOne.png")} />
      </div>
    </>
  );
};

export default BlogOne;

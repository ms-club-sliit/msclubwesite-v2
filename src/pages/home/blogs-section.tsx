import React, { useState, useEffect } from "react";
import CardCarousel from "../../components/card-carousel";
import { IBlog } from "../../interfaces/BlogInterface";
import blogApi from "../../api/BlogAction";

const BlogSection: React.FC = () => {
  const [blogList, setblogList] = useState<IBlog>();

  useEffect(() => {
    blogApi
      .blog()
      .getAllblogs()
      .then(({ data }) => {
        setblogList(data);
      })
      .catch(() => {});
  }, []);

  return (
    <div>
      {blogList && <CardCarousel carouselTitle="Blogs" blogItems={blogList?.items} /> }
    </div> 
  );
};

export default BlogSection;

import React, { useState, useEffect } from "react";
import { Card } from "../../components";
import { IBlog } from "../../interfaces/BlogInterface";
import { getBlogs } from "../../api/BlogAction";

const BlogList: React.FC = () => {
  const [blogList, setBlogList] = useState<IBlog>();

  // Fetch all the blog items 
  useEffect(() => {
    getBlogs()
      .then((data) => {
        setBlogList(data.data);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <div className="container">
      <h1>Blogs</h1>
      <div className="row">
        {/* {blogList &&
          blogList.items?.map((item, index) => (
            <div className="col">
              <Card
                id={index}
                imageUrl={item.thumbnail}
                title={item.title}
                dateTime={item.pubDate}
                tags={item.categories}
                link={item.link}
              />
            </div>
          ))} */}
      </div>
    </div>
  );
};

export default BlogList;

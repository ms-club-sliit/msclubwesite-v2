import React, { useState, useEffect} from "react";
import CardCarousel from '../../components/card-carousel';
import { IBlog } from '../../interfaces/BlogInterface';
import  {getBlogs} from "../../api/BlogAction";

interface Props {
}

const BlogSection: React.FC<Props> = ({}) => {

    // const [blogList, setblogList] = useState<IBlog[]>([]);

    // useEffect(() => {
    //   setblogList(getBlogs);
    // }, []);

    return (
      <div>
        <p>Blog</p>
      </div>
    )
};

export default BlogSection;
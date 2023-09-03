import axios from "axios";
import React, { useEffect, useState } from "react";

import Card from "../components/Card";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);

  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get("/api/v1/blog/all-blog");
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);
  return (
    <div className="m-5">
      <div
        class="justify-items-center 
       grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5"
      >
        {blogs &&
          blogs.map((blog) => (
            <Card
              id={blog?._id}
              isUser={localStorage.getItem("userId") === blog?.user?._id}
              title={blog?.title}
              decription={blog?.description}
              image={blog?.image}
              username={blog?.user?.username}
              time={blog.createdAt}
            />
          ))}
      </div>
    </div>
  );
};

export default Blog;

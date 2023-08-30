import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "../components/Card";

const UsersBlogs = () => {
  const [blogs, setBlogs] = useState([]);
  const getUserBlogs = async () => {
    try {
      const id = localStorage.getItem("userId");
      const { data } = await axios.get(`/api/v1/user-blog/${id}`);
      if (data?.success) {
        setBlogs(data?.userBlog.blogs);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserBlogs();
  }, []);
  return (
    <div className="m-5">
      <div
        class="justify-items-center 
       grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 gap-5"
      >
        {blogs && blogs.length > 0 ? (
          blogs.map((blog) => (
            <Card
              title={blog.title}
              description={blog.description}
              image={blog.image}
              username={blog.user.username}
              time={blog.createdAt}
            />
          ))
        ) : (
          <h1 className="font-bold text-center">
            You haven't created any blog
          </h1>
        )}
      </div>
    </div>
  );
};

export default UsersBlogs;

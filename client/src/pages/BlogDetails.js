import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const BlogDetails = () => {
  const [blog, setBlog] = useState({});
  const id = useParams().id;
  const navigate = useNavigate();

  const [inputs, setInputs] = useState({});

  // get blog details
  const getBlogDetails = async () => {
    try {
      const { data } = await axios.get(`/api/v1/blog/get-blog/${id}`);
      if (data?.success) {
        setBlog(data?.blog);
        setInputs({
          title: data?.blog.title,
          description: data?.blog.description,
          image: data?.blog.image,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   set blog and eidt blog in initial time
  useEffect(() => {
    getBlogDetails();
  }, [id]);
  // console.log(blog);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.put(`/api/v1/blog/update-blog/${id}`, {
        title: inputs.title,
        description: inputs.description,
        image: inputs.image,
        user: id,
      });
      if (data?.success) {
        toast.success("Blog updated successfully");
        navigate("/my-blogs");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="m-3 p-5">
        <h2 className="my-5 py-4 text-center">Create Your Post</h2>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="title"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Enter Your Blog Title
            </label>
            <input
              type="text"
              className="bg-gray-50 mb-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Title"
              required
              name="title"
              value={inputs.title}
              onChange={handleChange}
            />

            <label
              htmlFor="description"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              rows="10"
              className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Write your Blog Description"
              required
              name="description"
              value={inputs.description}
              onChange={handleChange}
            ></textarea>

            <label
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              htmlFor="image"
            >
              Upload Image
            </label>
            <input
              type="text"
              className="bg-gray-50 mb-8 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Enter Image link"
              required
              name="image"
              value={inputs.image}
              onChange={handleChange}
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-green-600 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          update
        </button>
      </form>
    </>
  );
};

export default BlogDetails;

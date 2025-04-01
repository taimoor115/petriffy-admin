import React from "react";
import { useLocation } from "react-router-dom";
import { alternativeImg } from "../../assets/images";
import formatTime from "../../utils/format-time";

const BlogDetail = () => {
  const location = useLocation();
  const { blog = {} } = location.state;

  return (
    <div className="p-6 mx-auto">
      <div className="flex justify-center mb-6">
        <img
          src={blog?.image || alternativeImg}
          alt="Blog"
          className="h-auto max-w-full rounded-lg"
          style={{ maxHeight: "400px" }}
        />
      </div>
      <h1 className="mb-4 text-3xl font-bold text-gray-800">{blog.title}</h1>
      <p className="mb-4 text-lg text-gray-700">{blog.content}</p>
      <p className="mb-6 text-sm font-bold text-custom_primary">
        Author: {blog.authorDetails.name}
      </p>
      <p className="mb-6 text-sm font-bold text-custom_primary">
        Created At: {formatTime(blog.createdAt)}
      </p>
      <div className="flex justify-start gap-x-4">
        <button className="px-4 py-2 font-semibold text-white transition duration-300 bg-green-500 rounded hover:bg-green-600">
          Approve
        </button>
        <button className="px-4 py-2 font-semibold text-white transition duration-300 bg-red-500 rounded hover:bg-red-600">
          Reject
        </button>
      </div>
    </div>
  );
};

export default BlogDetail;

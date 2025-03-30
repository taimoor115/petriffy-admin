import React from "react";
import { alternativeImg } from "../../assets/images";

const BlogDetail = () => {
  const blogData = {
    title: "Sample Blog Title",
    content:
      "This is the content of the blog. It provides detailed information about the topic discussed.",
    createdAt: "2023-10-01",
    author: "John Doe",
    imageUrl: alternativeImg, // Placeholder image
  };

  return (
    <div className="p-6 mx-auto">
      <div className="flex justify-center mb-6">
        <img
          src={blogData.imageUrl}
          alt="Blog"
          className="h-auto max-w-full rounded-lg"
          style={{ maxHeight: "400px" }}
        />
      </div>
      <h1 className="mb-4 text-3xl font-bold text-gray-800">
        {blogData.title}
      </h1>
      <p className="mb-4 text-lg text-gray-700">{blogData.content}</p>
      <p className="mb-6 text-sm text-gray-500">Author: {blogData.author}</p>
      <p className="mb-6 text-sm text-gray-500">
        Created At: {blogData.createdAt}
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

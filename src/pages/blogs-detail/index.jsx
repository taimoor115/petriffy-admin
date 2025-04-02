import React from "react";
import { useLocation } from "react-router-dom";
import { alternativeImg } from "../../assets/images";
import { Button } from "../../common";
import { useUpdateStatus } from "../../hooks";
import formatTime from "../../utils/format-time";

const BlogDetail = () => {
  const location = useLocation();
  const { blog = {} } = location.state;

  const STATUS = {
    APPROVED: "APPROVED",
    REJECTED: "REJECTED",
  };
  const { updateStatus, isLoading } = useUpdateStatus();

  const handleChangeStatus = async (status) => {
    await updateStatus({ id: blog?._id, body: { status } });

    if (status === STATUS.APPROVED) {
      blog.status = STATUS.APPROVED;
    } else if (status === STATUS.REJECTED) {
      blog.status = STATUS.REJECTED;
    }
  };
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
        <Button
          disabled={blog.status === STATUS.APPROVED || isLoading}
          onClick={() => handleChangeStatus(STATUS.APPROVED)}
          className={`px-4 py-2 font-semibold text-white transition duration-300 bg-green-500 rounded hover:bg-green-600 ${
            blog.status === STATUS.APPROVED
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          Approve
        </Button>
        <Button
          onClick={() => handleChangeStatus(STATUS.REJECTED)}
          disabled={blog.status === STATUS.REJECTED || isLoading}
          className={`px-4 py-2 font-semibold text-white transition duration-300 bg-red-500 rounded hover:bg-red-600 ${
            blog.status === STATUS.REJECTED
              ? "opacity-50 cursor-not-allowed"
              : ""
          }`}
        >
          Reject
        </Button>
      </div>
    </div>
  );
};

export default BlogDetail;

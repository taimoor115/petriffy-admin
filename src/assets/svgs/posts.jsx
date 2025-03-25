import React from "react";

const PostSvg = ({ fill = "#fff" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 512 512"
    >
      <path
        fill={fill}
        d="M208 80h264v32H208zM40 96a64 64 0 1 0 64-64a64.07 64.07 0 0 0-64 64m64-32a32 32 0 1 1-32 32a32.036 32.036 0 0 1 32-32m104 176h264v32H208zm-104 80a64 64 0 1 0-64-64a64.07 64.07 0 0 0 64 64m0-96a32 32 0 1 1-32 32a32.036 32.036 0 0 1 32-32m104 176h264v32H208zm-104 80a64 64 0 1 0-64-64a64.07 64.07 0 0 0 64 64m0-96a32 32 0 1 1-32 32a32.036 32.036 0 0 1 32-32"
      />
    </svg>
  );
};

export default PostSvg;

import React from "react";

const BlogSvg = ({ fill = "#fff" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 14 14"
    >
      <g
        fill={fill}
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="1"
      >
        <path d="M7.5.5h-5a1 1 0 0 0-1 1v9l-1 3l4-1h8a1 1 0 0 0 1-1v-5" />
        <path d="m8.363 8.137l-3 .54l.5-3.04l4.73-4.71a1 1 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42z" />
      </g>
    </svg>
  );
};

export default BlogSvg;

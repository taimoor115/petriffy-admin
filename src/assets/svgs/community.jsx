import React from "react";

const CommunitySvg = ({ fill = "#fff" }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path
        fill={fill}
        d="M9 16q.825 0 1.413-.587T11 14t-.587-1.412T9 12t-1.412.588T7 14t.588 1.413T9 16m6 0q.825 0 1.413-.587T17 14t-.587-1.412T15 12t-1.412.588T13 14t.588 1.413T15 16m-3-5q.825 0 1.413-.587T14 9t-.587-1.412T12 7t-1.412.588T10 9t.588 1.413T12 11m0 11q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 8.1T22 12t-.788 3.9t-2.137 3.175t-3.175 2.138T12 22"
      />
    </svg>
  );
};

export default CommunitySvg;

import { Link } from "react-router-dom";
import { EyeSvg } from "../../assets/svgs";
import { Button } from "../../common";
import formatTime from "../../utils/format-time";

export const BLOGS_COLUMN = () => [
  {
    key: "title",
    label: "Title",
  },
  {
    key: "author",
    label: "Author",
    render: (row) => {
      return <span>{row.authorDetails.name}</span>;
    },
  },
  {
    key: "totalLikes",
    label: "Total Likes",
  },
  {
    key: "totalComments",
    label: "Total comments",
  },
  {
    key: "status",
    label: "Status",
    render: (row) => {
      const statusColor =
        row.status === "APPROVED" ? "bg-green-500" : "bg-red-500";
      return (
        <span
          className={`inline-block px-2 py-1 text-white ${statusColor} rounded`}
        >
          {row.status}
        </span>
      );
    },
  },
  {
    key: "createdAt",
    label: "Created At",
    render: (row) => {
      return <span>{formatTime(row.createdAt)}</span>;
    },
  },
  {
    key: "action",
    label: "Action",
    render: (row) => {
      return (
        <div className="flex w-full">
          <div className="flex justify-start w-20">
            <Link to={`/blog-detail`} state={{ blog: row }}>
              <Button className="p-2 font-medium text-blue-600 transition-all duration-300 rounded-full cursor-pointer hover:bg-blue-100">
                <EyeSvg />
              </Button>
            </Link>
          </div>
        </div>
      );
    },
  },
];

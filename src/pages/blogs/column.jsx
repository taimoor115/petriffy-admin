import { Link } from "react-router-dom";
import { EyeSvg } from "../../assets/svgs";
import { Button } from "../../common";

export const BLOGS_COLUMN = () => [
  {
    key: "title",
    label: "Title",
  },
  {
    key: "author",
    label: "Author",
  },
  {
    key: "likes",
    label: "Total Likes",
  },
  {
    key: "comments",
    label: "Total comments",
  },
  {
    key: "createdAt",
    label: "Created At",
  },
  {
    key: "action",
    label: "Action",
    render: (row) => {
      return (
        <div className="flex w-full">
          <div className="flex justify-start w-20">
            <Link to={`/blogs/${row._id}`}>
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

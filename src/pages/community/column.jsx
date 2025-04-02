import { Link } from "react-router-dom";
import { DeleteSvg, EditSvg, EyeSvg } from "../../assets/svgs";
import { Button } from "../../common";

export const COMMUNITY_COLUMN = (openWarningModal, openEditModal) => [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "membersCount",
    label: "Total Members",
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
          <div className="flex justify-start">
            <Button
              onClick={() => openEditModal(row)}
              className="font-medium p-2 cursor-pointer text-[#282F5A] rounded-full hover:bg-[#282F5A1F] transition-all duration-300"
            >
              <EditSvg />
            </Button>
            <Button
              onClick={() => openWarningModal(row._id)}
              className="p-2 font-medium text-red-600 transition-all duration-300 rounded-full cursor-pointer hover:bg-red-100"
            >
              <DeleteSvg />
            </Button>
            <Link to={`/communities/${row._id}`}>
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

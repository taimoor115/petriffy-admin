import { Button } from "../../common";
import formatTime from "../../utils/format-time";

export const USERS_COLUMN = (openWarningModal) => [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "phoneNumber",
    label: "Phone Number",
  },
  {
    key: "country",
    label: "Country",
  },
  {
    key: "createdAt",
    label: "Created At",
    render: (row) => <span>{formatTime(row?.createdAt)}</span>,
  },

  {
    key: "action",
    label: "Action",
    render: (row) => {
      return (
        <div className="flex w-full">
          <div className="flex justify-start w-20">
            <Button
              onClick={() => openWarningModal(row._id)}
              className="p-2 font-medium text-red-600 transition-all duration-300 rounded-full cursor-pointer hover:bg-red-100"
            >
              Spam
            </Button>
          </div>
        </div>
      );
    },
  },
];

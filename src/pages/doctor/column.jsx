import { DeleteSvg, EditSvg } from "../../assets/svgs";
import { Button } from "../../common";

export const DOCTOR_COLUMN = (openWarningModal, openEditModal) => [
  {
    key: "name",
    label: "Name",
  },
  {
    key: "email",
    label: "Email",
  },
  {
    key: "experience",
    label: "Experience",
  },
  {
    key: "specialization",
    label: "Specialization",
  },
  {
    key: "phoneNumber",
    label: "Phone Number",
  },
  {
    key: "action",
    label: "Action",
    render: (row) => {
      return (
        <div className="flex items-center justify-center w-full">
          <div className="flex border w-20 justify-center border-[#EEEEEE] rounded">
            <Button
              onClick={() => openEditModal(row._id)}
              className="font-medium cursor-pointer text-[#282F5A] p-2 rounded-full hover:bg-[#282F5A1F] transition-all duration-300"
            >
              <EditSvg />
            </Button>
            <Button
              onClick={() => openWarningModal(row._id)}
              className="p-2 font-medium text-red-600 transition-all duration-300 rounded-full cursor-pointer hover:bg-red-100"
            >
              <DeleteSvg />
            </Button>
          </div>
        </div>
      );
    },
  },
];

import { DeleteSvg } from "../../assets/svgs";
import { Button } from "../../common";

export const POSTS_COLUMN = (openWarningModal) => [
  {
    key: "title",
    label: "Title",
  },
  {
    key: "Author",
    label: "Author",
    render: (row) => <span>{row?.author}</span>,
  },
  // {
  //   key: "category",
  //   label: "Category",
  // },
  {
    key: "age",
    label: "Age",
  },
  {
    key: "isVaccinated",
    label: "Vaccinated",
    render: (row) => (row.isVaccinated ? "Yes" : "No"),
  },
  {
    key: "status",
    label: "Status",
  },
  // {
  //   key: "city",
  //   label: "City",
  //   render: (row) => <p>{row.location.city}</p>,
  // },
  {
    key: "action",
    label: "Action",
    render: (row) => {
      return (
        <div className="flex w-full">
          <div className="flex justify-start w-20">
            <Button
              onClick={() => openWarningModal(row._id)}
              className="p-2 font-medium text-red-600 rounded-full transition-all duration-300 cursor-pointer hover:bg-red-100"
            >
              <DeleteSvg />
            </Button>
          </div>
        </div>
      );
    },
  },
];

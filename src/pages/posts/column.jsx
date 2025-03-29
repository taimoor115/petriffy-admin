import { DeleteSvg } from "../../assets/svgs";
import { Button } from "../../common";

export const POSTS_COLUMN = (openWarningModal) => [
  {
    key: "title",
    label: "Title",
  },
  {
    key: "author",
    label: "Author",
  },
  {
    key: "category",
    label: "Category",
  },
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
  {
    key: "city",
    label: "City",
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
              <DeleteSvg />
            </Button>
          </div>
        </div>
      );
    },
  },
];

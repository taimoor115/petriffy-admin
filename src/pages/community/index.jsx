import { useCallback, useState } from "react";
import { Button, GenericTable, Heading, Modal } from "../../common";
import { Pagination, RegisterDoctor } from "../../components";
import { doctorData } from "../../constant/doctor";
import { useModal } from "../../context/modal";
import { COMMUNITY_COLUMN } from "./column";
const sampleData = [
  {
    _id: "1",
    name: "Community A",
    members: 150,
    createdAt: "2023-01-15",
  },
  {
    _id: "2",
    name: "Community B",
    members: 200,
    createdAt: "2023-02-20",
  },
  {
    _id: "3",
    name: "Community C",
    members: 75,
    createdAt: "2023-03-10",
  },
  {
    _id: "4",
    name: "Community D",
    members: 300,
    createdAt: "2023-04-05",
  },
  {
    _id: "5",
    name: "Community E",
    members: 50,
    createdAt: "2023-05-25",
  },
];
const Community = () => {
  const { openModal } = useModal();
  const [queryParams, setQueryParams] = useState({
    page: 1,
    search: "",
  });
  const totalPages = 10;

  const handlePageChange = (page) => {
    console.log(`Navigating to page ${page}`);
    setQueryParams((prev) => ({
      ...prev,
      page: page,
    }));
  };

  // useEffect(() => {
  //   if (question?.pageNo && question.pageNo !== queryParams.pageNo) {
  //     setQueryParams((prev) => ({
  //       ...prev,
  //       pageNo: question.pageNo,
  //     }));
  //   }
  // }, [question?.pageNo]);

  const handleOpenModal = useCallback(() => {
    openModal(<div>Add community</div>);
  }, [openModal]);
  const openEditModal = useCallback(
    (id) => {
      openModal(<div>Edit Modal open</div>);
    },
    [openModal]
  );
  const openWarningModal = useCallback(
    (id) => {
      openModal(<div>Warning Modal open</div>);
    },
    [openModal]
  );

  const COMMUNITY_COLUMNS = COMMUNITY_COLUMN(openWarningModal, openEditModal);
  return (
    <section>
      <div className="flex items-center justify-between ">
        <Heading heading="Communities" />
        <Button
          className="px-3 py-2 text-sm font-medium text-white rounded-md bg-custom_secondary "
          text="Create community"
          onClick={handleOpenModal}
        />
      </div>

      <input
        type="text"
        placeholder="Search"
        className="w-full px-5 py-2 mt-4 border rounded-md border-gray-4 shadow-4 focus:outline-none "
      />

      <GenericTable
        columns={COMMUNITY_COLUMNS}
        loading={false}
        data={sampleData}
      />

      <Pagination
        currentPage={queryParams.page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
      <Modal />
    </section>
  );
};

export default Community;

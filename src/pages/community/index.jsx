import { useCallback, useState } from "react";
import { Button } from "../../common";
import { useModal } from "../../context/modal";
import { COMMUNITY_COLUMN } from "./column";
import TableLayout from "../../components/layouts/TableLayout";
import { EditCommunity, WarningModal } from "../../components";

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

  const handleSearch = (searchText) => {
    setQueryParams((prev) => ({
      ...prev,
      search: searchText,
      page: 1, // Reset to first page on new search
    }));
  };

  const handleOpenModal = useCallback(() => {
    openModal(<div>Add community</div>);
  }, [openModal]);

  const openEditModal = useCallback(
    (id) => {
      openModal(<EditCommunity />);
    },
    [openModal]
  );

  const openWarningModal = useCallback(
    (id) => {
      openModal(<WarningModal />);
    },
    [openModal]
  );

  const COMMUNITY_COLUMNS = COMMUNITY_COLUMN(openWarningModal, openEditModal);

  const actionButton = (
    <Button
      className="px-3 py-2 text-sm font-medium text-white rounded-md bg-custom_secondary"
      text="Create community"
      onClick={handleOpenModal}
    />
  );

  return (
    <TableLayout
      title="Communities"
      actionButton={actionButton}
      columns={COMMUNITY_COLUMNS}
      data={sampleData}
      loading={false}
      queryParams={queryParams}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      onSearch={handleSearch}
    />
  );
};

export default Community;

import React, { useCallback, useState } from "react";
import { WarningModal } from "../../components";
import TableLayout from "../../components/layouts/TableLayout";
import { useModal } from "../../context/modal";
import { COMMUNITY_DETAIL_COLUMN } from "./column";
import { alternativeImg } from "../../assets/images";

const sampleData = [
  {
    _id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
  },
  {
    _id: "2",
    name: "Jane Smith",
    email: "jane.smith@example.com",
  },
  {
    _id: "3",
    name: "Alice Johnson",
    email: "alice.johnson@example.com",
  },
  {
    _id: "4",
    name: "Bob Brown",
    email: "bob.brown@example.com",
  },
];
const CommunityDetail = () => {
  const { openModal } = useModal();

  const openWarningModal = useCallback(() => {
    openModal(<WarningModal />);
  }, [openModal]);
  const community = {
    name: "Community Name",
    description:
      "This is a description of the community.This is a description of the community.This is a description of the community.This is a description of the community.This is a description of the community.This is a description of the community.This is a description of the community.",
    imageUrl: "path/to/image.jpg",
  };

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
      page: 1,
    }));
  };

  const COMMUNITY_DETAIL_COLUMNS = COMMUNITY_DETAIL_COLUMN(openWarningModal);

  return (
    <>
      <div className="flex flex-col items-center p-4">
        <div className="w-32 h-32 mb-4">
          <img
            src={alternativeImg}
            alt={community.name}
            className="object-cover w-full h-full rounded-full"
          />
        </div>
        <h1 className="mb-2 text-2xl font-bold">{community.name}</h1>
        <p className="mb-4 text-center">{community.description}</p>
      </div>
      <TableLayout
        title="Community Members"
        columns={COMMUNITY_DETAIL_COLUMNS}
        data={sampleData}
        loading={false}
        queryParams={queryParams}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onSearch={handleSearch}
      />{" "}
    </>
  );
};

export default CommunityDetail;

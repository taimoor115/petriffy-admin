import React, { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { alternativeImg } from "../../assets/images";
import { WarningModal } from "../../components";
import TableLayout from "../../components/layouts/TableLayout";
import { useModal } from "../../context/modal";
import { COMMUNITY_DETAIL_COLUMN } from "./column";
import { useGetMembers } from "../../hooks";

const CommunityDetail = () => {
  const location = useLocation();
  const [queryParams, setQueryParams] = useState({
    page: 1,
    search: "",
  });
  const { community = {} } = location.state || {};

  const { openModal } = useModal();

  const { data = {}, isLoading = false } = useGetMembers(
    community._id,
    queryParams
  );
  const { data: memebers = [], pagination = {} } = data?.data || {};

  const { currentPage, totalPages } = pagination || {};

  useEffect(() => {
    if (currentPage && currentPage !== queryParams.page) {
      setQueryParams((prev) => ({
        ...prev,
        page: currentPage,
      }));
    }
  }, [currentPage]);
  const openWarningModal = useCallback(() => {
    openModal(<WarningModal />);
  }, [openModal]);

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
            src={community?.image || alternativeImg}
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
        data={memebers}
        loading={isLoading}
        queryParams={queryParams}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onSearch={handleSearch}
      />{" "}
    </>
  );
};

export default CommunityDetail;

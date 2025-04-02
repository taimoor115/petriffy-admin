import { useCallback, useEffect, useState } from "react";
import { Button } from "../../common";
import { useModal } from "../../context/modal";
import { COMMUNITY_COLUMN } from "./column";
import TableLayout from "../../components/layouts/TableLayout";
import { CreateCommunity, EditCommunity, WarningModal } from "../../components";
import { useGetCommunities } from "../../hooks";

const Community = () => {
  const { openModal } = useModal();
  const [queryParams, setQueryParams] = useState({
    page: 1,
    search: "",
  });

  const { data = [], isLoading = false } = useGetCommunities(queryParams);

  const { data: communities, pagination } = data?.data || {};

  const handlePageChange = (page) => {
    setQueryParams((prev) => ({
      ...prev,
      page: page,
    }));
  };

  const { currentPage, totalPages } = pagination || {};

  const handleSearch = (searchText) => {
    setQueryParams((prev) => ({
      ...prev,
      search: searchText,
      page: 1,
    }));
  };

  useEffect(() => {
    if (currentPage && currentPage !== queryParams.page) {
      setQueryParams((prev) => ({
        ...prev,
        page: currentPage,
      }));
    }
  }, [currentPage]);

  const handleOpenModal = useCallback(() => {
    openModal(<CreateCommunity />);
  }, [openModal]);

  const openEditModal = useCallback(
    (data) => {
      openModal(<EditCommunity data={data} />);
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
      data={communities}
      loading={isLoading}
      queryParams={queryParams}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      onSearch={handleSearch}
    />
  );
};

export default Community;

import { useCallback, useEffect, useState } from "react";
import { Button } from "../../common";
import { CreateCommunity, EditCommunity, WarningModal } from "../../components";
import TableLayout from "../../components/layouts/TableLayout";
import { useModal } from "../../context/modal";
import { useDeleteCommunity, useGetCommunities } from "../../hooks";
import { COMMUNITY_COLUMN } from "./column";

const Community = () => {
  const { openModal, closeModal } = useModal();
  const [queryParams, setQueryParams] = useState({
    page: 1,
    search: "",
  });

  const { data = [], isLoading = false } = useGetCommunities(queryParams);
  const { deleteCommunity } = useDeleteCommunity();

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
    openModal(<CreateCommunity closeModal={closeModal} />);
  }, [openModal]);

  const openEditModal = useCallback(
    (data) => {
      openModal(<EditCommunity closeModal={closeModal} data={data} />);
    },
    [openModal]
  );

  const handleDeleteCommunity = async (id) => {
    await deleteCommunity(id, {});
  };

  const openWarningModal = useCallback(
    (id) => {
      openModal(
        <WarningModal
          onClose={closeModal}
          onConfirm={() => handleDeleteCommunity(id)}
        />
      );
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

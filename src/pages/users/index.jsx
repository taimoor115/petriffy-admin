import { useCallback, useEffect, useState } from "react";
import { WarningModal } from "../../components";
import TableLayout from "../../components/layouts/TableLayout";
import { useModal } from "../../context/modal";
import { useDeleteUsers, useGetUsers } from "../../hooks";
import { USERS_COLUMN } from "./column";

const Users = () => {
  const { openModal, closeModal: onClose } = useModal();

  const [queryParams, setQueryParams] = useState({
    page: 1,
    search: "",
  });

  const { data = {}, isLoading: isUserFetching = false } =
    useGetUsers(queryParams);

  const { deleteUser, isLoading: isUserDeleting } = useDeleteUsers();

  const { data: users = [], pagination = {} } = data?.data || {};

  const { currentPage, totalPages } = pagination || {};

  useEffect(() => {
    if (currentPage && currentPage !== queryParams.page) {
      setQueryParams((prev) => ({
        ...prev,
        page: currentPage,
      }));
    }
  }, [currentPage]);

  const handlePageChange = (page) => {
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

  const handleDelete = async (id) => {
    try {
      await deleteUser(id, {});
      onClose();
    } catch (error) {
      console.error("Error deleting doctor:", error);
    }
  };
  const openWarningModal = useCallback(
    (id) => {
      openModal(
        <WarningModal
          key={isUserDeleting}
          isLoading={isUserDeleting}
          onConfirm={() => handleDelete(id)}
          onClose={onClose}
        />
      );
    },
    [openModal]
  );
  const USERS_COLUMNS = USERS_COLUMN(openWarningModal);

  return (
    <TableLayout
      title="Users"
      columns={USERS_COLUMNS}
      data={users}
      loading={isUserFetching}
      queryParams={queryParams}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      onSearch={handleSearch}
    />
  );
};

export default Users;

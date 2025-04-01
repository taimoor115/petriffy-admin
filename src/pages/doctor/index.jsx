import { useCallback, useEffect, useState } from "react";
import { Button } from "../../common";
import { EditDoctor, RegisterDoctor, WarningModal } from "../../components";
import TableLayout from "../../components/layouts/TableLayout";
import { useModal } from "../../context/modal";
import { useDeleteUser, useGetDoctors } from "../../hooks";
import { DOCTOR_COLUMN } from "./column";

const Doctors = () => {
  const [queryParams, setQueryParams] = useState({
    page: 1,
    search: "",
  });

  const { data = {}, isLoading: isDoctorGetting = false } =
    useGetDoctors(queryParams);
  const { deleteDoctor, isLoading: isDeleting } = useDeleteUser();
  const { openModal, closeModal: onClose } = useModal();

  const { data: doctors = [], pagination = {} } = data?.data || {};
  const { totalPages, currentPage } = pagination || {};

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

  const handleOpenModal = useCallback(() => {
    openModal(<RegisterDoctor />);
  }, [openModal]);

  const openEditModal = useCallback(
    (data) => {
      openModal(<EditDoctor data={data} />);
    },
    [openModal]
  );

  const handleDelete = async (id) => {
    try {
      await deleteDoctor(id, {});
      onClose();
    } catch (error) {
      console.error("Error deleting doctor:", error);
    }
  };
  const openWarningModal = useCallback(
    (id) => {
      openModal(
        <WarningModal
          key={isDeleting}
          isLoading={isDeleting}
          onConfirm={() => handleDelete(id)}
          onClose={onClose}
        />
      );
    },
    [openModal]
  );

  const DOCTOR_COLUMNS = DOCTOR_COLUMN(openWarningModal, openEditModal);

  const actionButton = (
    <Button
      className="px-3 py-2 text-sm font-medium text-white rounded-md bg-custom_secondary hover:bg-custom_secondary"
      text="Create Doctor"
      onClick={handleOpenModal}
    />
  );

  return (
    <>
      <TableLayout
        title="Doctors"
        actionButton={actionButton}
        columns={DOCTOR_COLUMNS}
        data={doctors}
        loading={isDoctorGetting}
        queryParams={queryParams}
        totalPages={totalPages}
        onPageChange={handlePageChange}
        onSearch={handleSearch}
      />
    </>
  );
};

export default Doctors;

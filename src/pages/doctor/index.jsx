import { useCallback, useEffect, useState } from "react";
import { Button } from "../../common";
import { EditDoctor, RegisterDoctor, WarningModal } from "../../components";
import TableLayout from "../../components/layouts/TableLayout";
import { useModal } from "../../context/modal";
import { useGetDoctors } from "../../hooks";
import { DOCTOR_COLUMN } from "./column";

const Doctors = () => {
  const { openModal } = useModal();
  const [queryParams, setQueryParams] = useState({
    page: 1,
    search: "",
  });

  const { data = {}, isLoading: isDoctorGetting = false } =
    useGetDoctors(queryParams);
  const { data: doctors = [], pagination = {} } = data?.data || {};

  const { totalPages, currentPage } = pagination;
  console.log(doctors, pagination);
  useEffect(() => {
    if (currentPage && currentPage !== queryParams.page) {
      setQueryParams((prev) => ({
        ...prev,
        page: currentPage,
      }));
    }
  }, [currentPage]);

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

  const handleOpenModal = useCallback(() => {
    openModal(<RegisterDoctor />);
  }, [openModal]);

  const openEditModal = useCallback(
    (id) => {
      openModal(<EditDoctor />);
    },
    [openModal]
  );

  const openWarningModal = useCallback(
    (id) => {
      openModal(<WarningModal />);
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

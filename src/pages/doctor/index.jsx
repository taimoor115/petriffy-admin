import { useCallback, useState } from "react";
import { Button } from "../../common";
import { RegisterDoctor, WarningModal } from "../../components";
import { useModal } from "../../context/modal";
import { DOCTOR_COLUMN } from "./column";
import { doctorData } from "../../constant/doctor";
import TableLayout from "../../components/layouts/TableLayout";

const Doctors = () => {
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
    openModal(<RegisterDoctor />);
  }, [openModal]);

  const openEditModal = useCallback(
    (id) => {
      openModal(<div>Edit Modal open</div>);
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
    <TableLayout
      title="Doctors"
      actionButton={actionButton}
      columns={DOCTOR_COLUMNS}
      data={doctorData}
      loading={false}
      queryParams={queryParams}
      totalPages={totalPages}
      onPageChange={handlePageChange}
      onSearch={handleSearch}
    />
  );
};

export default Doctors;

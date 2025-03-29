import { useCallback, useState } from "react";
import { Button, GenericTable, Heading, Modal } from "../../common";
import { Pagination, RegisterDoctor } from "../../components";
import { useModal } from "../../context/modal";
import { DOCTOR_COLUMN } from "./column";
import { doctorData } from "../../constant/doctor";

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

  // useEffect(() => {
  //   if (question?.pageNo && question.pageNo !== queryParams.pageNo) {
  //     setQueryParams((prev) => ({
  //       ...prev,
  //       pageNo: question.pageNo,
  //     }));
  //   }
  // }, [question?.pageNo]);

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
      openModal(<div>Warning Modal open</div>);
    },
    [openModal]
  );

  const DOCTOR_COLUMNS = DOCTOR_COLUMN(openWarningModal, openEditModal);
  return (
    <section>
      <div className="flex items-center justify-between ">
        <Heading heading="Doctors" />
        <Button
          className="px-3 py-2 text-sm font-medium text-white rounded-md bg-custom_secondary hover:bg-custom_secondary"
          text="Create Community"
          onClick={handleOpenModal}
        />
      </div>

      <input
        type="text"
        placeholder="Search"
        className="w-full px-5 py-2 mt-4 border rounded-md border-gray-4 shadow-4 focus:outline-none "
      />

      <GenericTable
        columns={DOCTOR_COLUMNS}
        loading={false}
        data={doctorData}
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

export default Doctors;

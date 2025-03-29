import { useCallback } from "react";
import { Button, GenericTable, Heading, Modal } from "../../common";
import { RegisterDoctor } from "../../components";
import { useModal } from "../../context/modal";
import { DOCTOR_COLUMN } from "./column";
import { doctorData } from "../../constant/doctor";

const Doctors = () => {
  const { openModal } = useModal();

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
          className="px-3 py-2 text-sm font-medium text-white rounded-md bg-custom_primary hover:bg-custom_secondary"
          text="Add Doctor"
          onClick={handleOpenModal}
        />
      </div>

      <GenericTable
        columns={DOCTOR_COLUMNS}
        loading={false}
        data={doctorData}
      />
      <Modal />
    </section>
  );
};

export default Doctors;

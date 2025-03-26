import { Button, Heading, Modal } from "../../common";
import { RegisterDoctor } from "../../components";
import { useModal } from "../../context/modal";

const Doctors = () => {
  const { openModal } = useModal();
  const handleOpenModal = () => {
    openModal(<RegisterDoctor />);
  };
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

      <Modal />
    </section>
  );
};

export default Doctors;

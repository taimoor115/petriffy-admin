import { CommunityForm } from "../../components";
import useCreateCommunity from "../../hooks/community/useCreateCommunity";

const CreateCommunity = ({ closeModal }) => {
  const initialValues = {
    name: "",
    description: "",
    image: "",
  };

  const { createCommunity } = useCreateCommunity();
  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    await createCommunity({ body: values });
    setSubmitting(false);
    closeModal();
  };

  return (
    <div>
      <CommunityForm initialValues={initialValues} onSubmit={handleSubmit} />
    </div>
  );
};

export default CreateCommunity;

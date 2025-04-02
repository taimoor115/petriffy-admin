import { CommunityForm } from "../../components";
import { useUpdateCommunity } from "../../hooks";
const EditCommunity = ({ data = {}, closeModal }) => {
  const { updateCommunity } = useUpdateCommunity();
  const { name = "", description = "", image = "", _id: id = "" } = data || {};
  const initialValues = {
    name: name || "",
    description: description || "",
    image: image || "",
  };

  const handleSubmit = async (values, { setSubmitting }) => {
    setSubmitting(true);
    await updateCommunity({ id, body: values });
    closeModal();
  };

  return (
    <div>
      <CommunityForm
        initialValues={initialValues}
        onSubmit={handleSubmit}
        text="Update"
      />
    </div>
  );
};

export default EditCommunity;

import { CommunityForm } from "../../components";
const EditCommunity = ({ data = {} }) => {
  const { name = "", description = "", image = "" } = data || {};
  const initialValues = {
    name: name || "",
    description: description || "",
    image: image || "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  return (
    <div>
      <CommunityForm initialValues={initialValues} onSubmit={handleSubmit} />
    </div>
  );
};

export default EditCommunity;

import { CommunityForm } from "../../components";

const CreateCommunity = () => {
  const initialValues = {
    name: "",
    description: "",
    image: "",
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

export default CreateCommunity;

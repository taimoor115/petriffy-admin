import { Form, Formik } from "formik";
import { editDoctorFields } from "../../constant/doctor";
import { EditDoctorSchema } from "../../schema/doctor.schema";
import InputField from "../form-components/input-box";
import { Button, Heading } from "../../common";
import { useUpdateDoctor } from "../../hooks";
import { useModal } from "../../context/modal";

const EditDoctor = ({ data }) => {
  const {
    email = "",
    experience = "",
    _id = "",
    specialization = "",
    name = "",
    phoneNumber = "",
    city = "",
  } = data;
  const { updateDoctor } = useUpdateDoctor(_id);
  const { closeModal } = useModal();
  const initialValues = {
    email: email || "",
    experience: experience || "",
    specialization: specialization || "",
    name: name || "",
    phoneNumber: phoneNumber || "",
    city: city || "",
  };

  const handleSubmit = async (values) => {
    await updateDoctor({ body: values });
    closeModal();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={EditDoctorSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <Heading
            heading="Edit Doctor"
            className="text-xl text-center md:text-2xl"
          />
          {editDoctorFields.map((field) => (
            <InputField
              key={field.name}
              label={field.label}
              name={field.name}
              type={field.type}
              placeholder={field.placeholder}
            />
          ))}
          <Button
            className="px-4 py-2 mt-4 text-sm font-semibold text-white rounded-md bg-custom_black hover:opacity-70"
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Updating..." : "Update"}
          </Button>
          <Button
            className="px-4 py-2 mt-4 ml-4 text-sm font-semibold text-black border rounded-md border-[#e6e3e3] hover:bg-custom_black hover:text-white"
            type="submit"
          >
            Cancel
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditDoctor;

import { ErrorMessage, Form, Formik } from "formik";
import { useState } from "react";
import { Button, Heading } from "../../common";
import { useModal } from "../../context/modal";
import { COMMUNITY_SCHEMA } from "../../schema/profile.schema";
import InputField from "../form-components/input-box";

const CommunityForm = ({ initialValues, onSubmit, text = "Create" }) => {
  const { closeModal: onClose } = useModal();
  const [previewUrl, setPreviewUrl] = useState(initialValues.image || "");

  const handleFileChange = (event, setFieldValue) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);

        setFieldValue("image", reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={COMMUNITY_SCHEMA}
    >
      {({ setFieldValue, errors, touched, isSubmitting }) => (
        <Form className="space-y-2">
          <Heading
            heading="Community Form"
            className="text-xl text-center md:text-2xl"
          />
          <InputField
            label="Name"
            name="name"
            type="text"
            placeholder="Enter community name"
            error={touched.name && errors.name}
          />
          {previewUrl && (
            <img
              src={previewUrl}
              alt="Image Preview"
              className="w-full h-auto mt-2 sm:w-1/2"
            />
          )}
          <input
            type="file"
            accept="image/*"
            onChange={(event) => handleFileChange(event, setFieldValue)}
            className="w-3/4 mt-4 md:w-full"
          />
          {touched.image && errors.image && (
            <ErrorMessage
              name="image"
              component={"span"}
              className="mt-1 text-sm text-red-500"
            />
          )}
          <InputField
            label="Description"
            as="textarea"
            name="description"
            type="textarea"
            placeholder="Enter community description"
            error={touched.description && errors.description}
          />
          <div className="flex justify-start w-full gap-x-2">
            <Button
              className="px-4 py-2 mt-4 text-sm font-semibold text-white rounded-md bg-custom_black hover:opacity-70"
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Loading..." : text}
            </Button>
            <Button
              className="px-4 py-2 mt-4 ml-4 text-sm font-semibold text-black border rounded-md border-[#e6e3e3] hover:bg-custom_black hover:text-white"
              type="button"
              onClick={onClose}
            >
              Cancel
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default CommunityForm;

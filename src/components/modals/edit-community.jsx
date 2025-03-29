import { Form, Formik } from "formik";
import { Button, Heading } from "../../common";
import InputField from "../form-components/input-box";
import { useState } from "react";

const EditCommunity = ({ name = "", description = "", imageUrl = "" }) => {
  const [previewUrl, setPreviewUrl] = useState("");

  const initialValues = {
    name: name || "",
    description: description || "",
    image: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result);
        initialValues.image = reader.result;
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ isSubmitting }) => (
        <Form className="space-y-4">
          <Heading
            heading="Edit Community"
            className="text-xl text-center md:text-2xl"
          />
          <InputField
            label="Name"
            name="name"
            type="text"
            placeholder="Enter community name"
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
            onChange={handleFileChange}
            className="w-3/4 mt-4 md:w-full"
          />
          <InputField
            label="Description"
            name="description"
            component="textarea"
            placeholder="Enter community description"
          />
          <Button
            className="px-4 py-2 mt-4 text-sm font-semibold text-white rounded-md bg-custom_black hover:opacity-70"
            type="submit"
            disabled={isSubmitting}
          >
            Submit
          </Button>
          <Button
            className="px-4 py-2 mt-4 ml-4 text-sm font-semibold text-black border rounded-md border-[#e6e3e3] hover:bg-custom_black hover:text-white"
            type="button"
            onClick={() => console.log("Cancel clicked")}
          >
            Cancel
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default EditCommunity;

import { Form, Formik } from "formik";
import React, { useCallback } from "react";
import * as Yup from "yup"; // Import Yup for validation
import { Button, Heading } from "../../common";
import InputField from "../../components/form-components/input-box/index"; // Adjust the import path if necessary

const Profile = () => {
  const handleImageChange = useCallback((event) => {
    // Handle image change logic here
  }, []);

  const handleButtonClick = useCallback(() => {
    document.getElementById("fileInput").click(); // Trigger file input click
  }, []);

  const validationSchema = Yup.object().shape({
    oldPassword: Yup.string().required("Old password is required."),
    newPassword: Yup.string().required("New password is required."),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
      .required("Confirm password is required."),
  });

  const nameValidationSchema = Yup.object({
    name: Yup.string().required("Name is required.").min(3),
  });

  const passwordFields = [
    {
      label: "Old Password",
      name: "oldPassword",
      type: "password",
      placeholder: "Enter your old password",
    },
    {
      label: "New Password",
      name: "newPassword",
      type: "password",
      placeholder: "Enter your new password",
    },
    {
      label: "Confirm Password",
      name: "confirmPassword",
      type: "password",
      placeholder: "Confirm your new password",
    },
  ];

  return (
    <section className="container">
      <Heading heading="Profile" />
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 overflow-hidden border rounded-full border-custom_primary">
          <img
            src="data:image/jpeg;base64,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"
            alt="User"
            className="object-cover w-full h-full transition duration-300 ease-in-out hover:opacity-70"
          />
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="absolute inset-0 opacity-0 cursor-pointer"
          />
          <Button
            type="button"
            onClick={handleButtonClick}
            className="absolute inset-0 flex items-center justify-center text-white transition duration-300 bg-black bg-opacity-50 opacity-0 hover:opacity-100"
          >
            Change Image
          </Button>
        </div>
      </div>

      <Formik
        initialValues={{
          name: "Pettrify Admin",
        }}
        validationSchema={nameValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ values }) => (
          <Form className="mt-12 space-y-2">
            <Heading heading="Change name" className="mt-5" />
            <InputField
              label="Name"
              name="name"
              placeholder="Enter name"
              type="text"
              value={values.name}
            />
            <Button
              type="submit"
              className="px-3 py-2 mt-4 text-sm font-medium text-white rounded-md bg-custom_primary hover:bg-custom_secondary"
            >
              Change Name
            </Button>
          </Form>
        )}
      </Formik>

      <Formik
        initialValues={{
          oldPassword: "",
          newPassword: "",
          confirmPassword: "",
        }}
        validationSchema={validationSchema}
        onSubmit={(values) => {
          console.log(values);
          // Handle form submission logic here
        }}
      >
        {() => (
          <Form className="mt-12 space-y-2">
            <Heading heading="Change password" className="mb-4" />
            {passwordFields.map((field) => (
              <InputField
                key={field.name}
                label={field.label}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
              />
            ))}
            <Button
              type="submit"
              className="px-3 py-2 mt-4 text-sm font-medium text-white rounded-md bg-custom_primary hover:bg-custom_secondary"
            >
              Change Password
            </Button>
          </Form>
        )}
      </Formik>
    </section>
  );
};

export default React.memo(Profile);

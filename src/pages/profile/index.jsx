import { Form, Formik } from "formik";
import React, { useCallback } from "react";
import { Button, Heading } from "../../common";
import { passwordFields } from "../../constant/profile";
import { InputField } from "../../components";
import {
  changePasswordSchema,
  nameValidationSchema,
} from "../../schema/profile.schema";
import { alternativeImg, logo } from "../../assets/images";

const Profile = () => {
  const handleImageChange = useCallback((event) => {
    // Handle image change logic here
  }, []);

  const handleButtonClick = useCallback(() => {
    document.getElementById("fileInput").click();
  }, []);

  return (
    <section className="container">
      <Heading heading="Profile" />
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 overflow-hidden border rounded-full border-custom_primary">
          <img
            src={alternativeImg}
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
        validationSchema={changePasswordSchema}
        onSubmit={(values) => {
          console.log(values);
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

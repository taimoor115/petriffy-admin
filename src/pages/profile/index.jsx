import { Form, Formik } from "formik";
import React, { useCallback, useState, useEffect } from "react";
import { alternativeImg } from "../../assets/images";
import { Button, Heading, Spinner } from "../../common";
import { InputField } from "../../components";
import { passwordFields } from "../../constant/profile";
import {
  changePasswordSchema,
  nameValidationSchema,
} from "../../schema/profile.schema";
import { useGetAdminInfo } from "../../hooks";

const Profile = () => {
  const { data = {}, isLoading: isLoadingProfile = false } = useGetAdminInfo();
  // Example of another API call (you would replace this with your actual second API call)
  const [isLoadingImage, setIsLoadingImage] = useState(false);

  const { avatar = "", name = "" } = data?.data || {};

  const handleImageChange = useCallback((event) => {
    const file = event.target.files[0];
    if (file) {
      setIsLoadingImage(true);
      // Simulate image upload API call
      setTimeout(() => {
        setIsLoadingImage(false);
        // Handle the actual image change logic here
      }, 2000);
    }
  }, []);

  const handleButtonClick = useCallback(() => {
    document.getElementById("fileInput").click();
  }, []);

  // Define loading states for the spinner
  const loadingStates = [
    { isLoading: isLoadingProfile, message: "Fetching profile information..." },
    { isLoading: isLoadingImage, message: "Uploading image..." },
  ];

  return (
    <section className="container">
      <Spinner loadingStates={loadingStates} />

      <Heading heading="Profile" />
      <div className="flex flex-col items-center">
        <div className="relative w-24 h-24 overflow-hidden border rounded-full border-custom_primary">
          <img
            src={avatar || alternativeImg}
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
          name: name || "",
        }}
        validationSchema={nameValidationSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
        enableReinitialize={true}
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

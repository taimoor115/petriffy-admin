import { Form, Formik } from "formik";
import React, { useCallback } from "react";
import { alternativeImg } from "../../assets/images";
import { Button, Heading, Spinner } from "../../common";
import { InputField } from "../../components";
import { passwordFields } from "../../constant/profile";
import { useChangeAvatar, useGetAdminInfo } from "../../hooks";
import {
  changePasswordSchema,
  nameValidationSchema,
} from "../../schema/profile.schema";

const Profile = () => {
  const { data = {}, isLoading: isLoadingProfile = false } = useGetAdminInfo();
  const { changeAvatar, isLoading: isAvatarUpdating } = useChangeAvatar();

  const { avatar = "", name = "" } = data?.data || {};

  const handleImageChange = useCallback(
    (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64String = reader.result;
          changeAvatar({ body: { avatar: base64String } });
        };
        reader.readAsDataURL(file);
      }
    },
    [changeAvatar]
  );

  const handleButtonClick = useCallback(() => {
    document.getElementById("fileInput").click();
  }, []);

  const loadingStates = [
    { isLoading: isLoadingProfile, message: "Fetching profile information..." },
    { isLoading: isAvatarUpdating, message: "Uploading image..." },
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

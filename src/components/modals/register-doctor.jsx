import { ErrorMessage, Form, Formik } from "formik";
import React, { useCallback, useState } from "react";
import { toast } from "sonner";
import { Button } from "../../common";
import { InputField } from "../../components";
import {
  DOCTOR_INITIAL_VALUES,
  doctorsRegistrationFields,
} from "../../constant/doctor";
import { DoctorSchema } from "../../schema/doctor.schema";
import { useModal } from "../../context/modal";

const AvatarUpload = ({ avatarPreview, handleFileChange }) => (
  <div className="space-y-2">
    <div className="flex flex-col items-center gap-4">
      {avatarPreview && (
        <div className="relative w-24 h-24 overflow-hidden border border-gray-200 rounded-full">
          <img
            src={avatarPreview}
            alt="Avatar preview"
            className="object-cover w-full h-full"
          />
        </div>
      )}
      <input
        id="avatar"
        name="avatar"
        type="file"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />
      <label
        htmlFor="avatar"
        className="w-full px-4 py-2 text-center transition-colors bg-white border border-gray-300 rounded-md cursor-pointer text-custom_primary "
      >
        {avatarPreview ? "Change Image" : "Upload Image"}
      </label>
    </div>
    <ErrorMessage
      name="avatar"
      component="div"
      className="text-sm text-red-500"
    />
  </div>
);

const RegisterDoctor = React.memo(({ onSubmit }) => {
  const [avatarPreview, setAvatarPreview] = useState(null);
  const { closeModal: onCancel } = useModal();

  const handleSubmit = useCallback(
    (values, { setSubmitting, resetForm }) => {
      try {
        // onSubmit(values);
        console.log(values);
        toast.success("Registration submitted successfully");
        resetForm();
        setAvatarPreview(null);
      } catch (error) {
        toast.error("An error occurred during registration");
        console.error("Registration error:", error);
      } finally {
        setSubmitting(false);
      }
    },
    [onSubmit]
  );

  const handleFileChange = (event, setFieldValue) => {
    const file = event.currentTarget.files?.[0] || null;
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        setFieldValue("avatar", base64String);
        setAvatarPreview(base64String);
      };
      reader.readAsDataURL(file);
    } else {
      setFieldValue("avatar", null);
      setAvatarPreview(null);
    }
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <h2 className="mb-6 text-2xl font-semibold text-center">
        Doctor Registration
      </h2>
      <Formik
        initialValues={DOCTOR_INITIAL_VALUES}
        validationSchema={DoctorSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue }) => (
          <Form className="space-y-4">
            {doctorsRegistrationFields.map((field) => (
              <InputField
                key={field.name}
                label={field.label}
                name={field.name}
                type={field.type}
                placeholder={field.placeholder}
              />
            ))}
            <AvatarUpload
              avatarPreview={avatarPreview}
              handleFileChange={(event) =>
                handleFileChange(event, setFieldValue)
              }
            />
            <div className="flex justify-end gap-4 pt-4">
              <Button
                type="button"
                className="px-3 py-2 text-sm font-medium text-white rounded-md bg-custom_primary hover:bg-custom_secondary"
                variant="outline"
                onClick={onCancel}
                disabled={isSubmitting}
              >
                Cancel
              </Button>
              <Button
                className="px-3 py-2 text-sm font-medium text-white rounded-md bg-custom_primary hover:bg-custom_secondary"
                type="submit"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Submitting..." : "Register"}
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
});

export default RegisterDoctor;

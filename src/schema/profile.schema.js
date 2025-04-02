import * as Yup from "yup";

export const changePasswordSchema = Yup.object().shape({
  oldPassword: Yup.string().required("Old password is required."),
  newPassword: Yup.string()
    .required("New password is required.")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])/,
      "New password must contain at least one uppercase letter, one lowercase letter, and one special character."
    ),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("newPassword"), null], "Passwords must match")
    .required("Confirm password is required."),
});

export const nameValidationSchema = Yup.object({
  name: Yup.string().required("Name is required.").min(3),
});


export const COMMUNITY_SCHEMA = Yup.object().shape({
  name: Yup.string()
    .min(3, "Name must be at least 3 characters")
    .required("Name is required"),
  description: Yup.string().required("Description is required"),
  image: Yup.string().required("Image is required"),
});
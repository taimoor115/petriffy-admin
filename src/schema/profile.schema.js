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

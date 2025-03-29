import * as Yup from "yup";

// const phoneRegExp = /^[0-9]{10,15}$/;

export const DoctorSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),
  phoneNumber: Yup.string()
    // .matches(phoneRegExp, "Phone number is not valid")
    .required("Phone number is required"),
  city: Yup.string().required("City is required"),
  experience: Yup.number()
    .typeError("Experience must be a number")
    .required("Experience is required")
    .min(0, "Experience cannot be negative"),
  specialization: Yup.string().required("Specialization is required"),
  avatar: Yup.mixed().required("Profile picture is required"),
});




  export const EditDoctorSchema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required"),
    experience: Yup.number()
      .typeError("Must be a number")
      .required("Required")
      .positive("Must be a positive number"),
  });
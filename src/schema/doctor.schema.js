import * as Yup from "yup";

const phoneRegExp = /^92\d{10}$/;
const nameRegExp = /^Dr\.\s.+/;

export const DoctorSchema = Yup.object().shape({
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    )
    .required("Password is required"),
  phoneNumber: Yup.string()
    .trim()
    .matches(
      phoneRegExp,
      "Phone number must be a valid Pakistani number starting with 92"
    )
    .required("Phone number is required"),
  name: Yup.string()
    .matches(
      nameRegExp,
      "Name must start with 'Dr.' followed by a space and the name"
    )
    .required("Name is required"),
  city: Yup.string().required("City is required"),
  specialization: Yup.string().required("Specialization is required"),
  experience: Yup.number()
    .typeError("Experience must be a number")
    .required("Experience is required")
    .min(1, "Experience cannot be negative"),
  avatar: Yup.mixed().required("Profile picture is required"),
});

export const EditDoctorSchema = Yup.object({
  email: Yup.string().email("Invalid email format").required("Required"),
  phoneNumber: Yup.string()
    .trim()
    .matches(
      phoneRegExp,
      "Phone number must be a valid Pakistani number starting with 92 and have 12 digits"
    )
    .required("Phone number is required"),
  name: Yup.string()
    .matches(
      nameRegExp,
      "Name must start with 'Dr.' followed by a space and the name"
    )
    .required("Name is required"),
  city: Yup.string().required("City is required"),
  specialization: Yup.string().required("Specialization is required"),
  experience: Yup.number()
    .typeError("Experience must be a number")
    .required("Experience is required")
    .positive("Experience cannot be negative")
    .min(1, "Experience cannot be negative"),
});

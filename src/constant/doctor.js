export const doctorsRegistrationFields = [
  {
    label: "Full Name",
    name: "name",
    type: "text",
    placeholder: "Dr. John Doe",
  },
  {
    label: "Email",
    name: "email",
    type: "email",
    placeholder: "doctor@example.com",
  },
  {
    label: "Password",
    name: "password",
    type: "password",
    placeholder: "••••••••",
  },
  {
    label: "Phone Number",
    name: "phoneNumber",
    type: "tel",
    placeholder: "+923242324234",
  },
  { label: "City", name: "city", type: "text", placeholder: "Lahore" },
  {
    label: "Years of Experience",
    name: "experience",
    type: "number",
    placeholder: "2",
  },
  {
    label: "Specialization",
    name: "specialization",
    type: "text",
    placeholder: "MBBS, Cardiology, etc.",
  },
];

export const DOCTOR_INITIAL_VALUES = {
  name: "",
  email: "",
  password: "",
  phoneNumber: "",
  city: "",
  experience: "",
  specialization: "",
  avatar: null,
};

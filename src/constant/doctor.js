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


export const doctorData = [
  {
    _id: "1",
    name: "Dr. John Doe",
    email: "john.doe@example.com",
    experience: "10 years",
    specialization: "Cardiology",
    phoneNumber: "123-456-7890",
  },
  {
    _id: "2",
    name: "Dr. Jane Smith",
    email: "jane.smith@example.com",
    experience: "8 years",
    specialization: "Pediatrics",
    phoneNumber: "098-765-4321",
  },
  {
    _id: "3",
    name: "Dr. Emily Johnson",
    email: "emily.johnson@example.com",
    experience: "5 years",
    specialization: "Dermatology",
    phoneNumber: "555-123-4567",
  },
  {
    _id: "4",
    name: "Dr. Michael Brown",
    email: "michael.brown@example.com",
    experience: "12 years",
    specialization: "Orthopedics",
    phoneNumber: "444-987-6543",
  },
  {
    _id: "5",
    name: "Dr. Sarah Davis",
    email: "sarah.davis@example.com",
    experience: "7 years",
    specialization: "Neurology",
    phoneNumber: "333-222-1111",
  },
];


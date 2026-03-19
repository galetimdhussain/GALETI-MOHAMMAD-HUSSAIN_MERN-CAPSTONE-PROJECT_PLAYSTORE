import * as Yup from "yup";

const today = new Date();
today.setHours(0, 0, 0, 0);

const bookingSchema = Yup.object({
  fullName: Yup.string()
    .min(3, "Full name must be at least 3 characters")
    .required("Full name is required"),
  email: Yup.string()
    .email("Enter a valid email")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Phone must be exactly 10 digits")
    .required("Phone number is required"),
  travelDate: Yup.date()
    .min(today, "Travel date cannot be in the past")
    .required("Travel date is required"),
  travelers: Yup.number()
    .transform((value, originalValue) =>
      originalValue === "" ? undefined : value
    )
    .typeError("Travelers must be a number")
    .min(1, "At least 1 traveler is required")
    .max(10, "Maximum 10 travelers allowed")
    .required("Number of travelers is required"),
  specialRequests: Yup.string().max(200, "Maximum 200 characters"),
});

export default bookingSchema;

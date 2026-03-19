import { useState } from "react";
import { useBooking } from "../context/BookingContext";
import api from "../services/api";

export default function useBookingSubmission() {
  const { addBooking, clearSelectedPackage } = useBooking();
  const [status, setStatus] = useState("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const submitBooking = async (values, selectedPackage) => {
    setStatus("submitting");
    setErrorMessage("");

    const payload = {
      ...values,
      packageId: selectedPackage.id,
      packageTitle: selectedPackage.title,
      packagePrice: selectedPackage.price,
      bookedOn: new Date().toISOString(),
      bookingStatus: "Confirmed",
    };

    try {
      const response = await api.post("/bookings", payload);
      addBooking(response.data);
      clearSelectedPackage();
      setStatus("success");
      return { ok: true, data: response.data };
    } catch (error) {
      setStatus("error");
      setErrorMessage("Booking failed. Please check server and try again.");
      return { ok: false, error };
    }
  };

  return { submitBooking, status, errorMessage };
}

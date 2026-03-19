import BookingForm from "../components/booking/BookingForm";
import { useBooking } from "../context/BookingContext";

function BookingPage() {
  const { selectedPackage } = useBooking();

  return (
    <section>
      <h1 className="h3 mb-3">Booking Form</h1>
      <p className="text-muted mb-4">
        Complete your details and confirm your travel package.
      </p>
      <BookingForm selectedPackage={selectedPackage} />
    </section>
  );
}

export default BookingPage;

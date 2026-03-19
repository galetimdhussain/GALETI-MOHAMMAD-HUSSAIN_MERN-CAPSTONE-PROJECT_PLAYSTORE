import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Link } from "react-router-dom";
import bookingSchema from "../../validation/bookingSchema";
import useBookingSubmission from "../../hooks/useBookingSubmission";

function BookingForm({ selectedPackage }) {
  const { submitBooking, status, errorMessage } = useBookingSubmission();

  const initialValues = {
    fullName: "",
    email: "",
    phone: "",
    travelDate: "",
    travelers: "",
    specialRequests: "",
  };

  if (!selectedPackage) {
    return (
      <div className="alert alert-warning">
        <p className="mb-2">
          No package selected. Please select one from the Packages page.
        </p>
        <Link to="/packages" className="btn btn-primary btn-sm">
          Go to Packages
        </Link>
      </div>
    );
  }

  return (
    <section className="form-card p-4 shadow-sm">
      <h2 className="h4 mb-3">Book Package: {selectedPackage.title}</h2>
      <p className="text-muted mb-4">
        {selectedPackage.location} | INR {selectedPackage.price.toLocaleString()}
      </p>

      <Formik
        initialValues={initialValues}
        validationSchema={bookingSchema}
        onSubmit={async (values, { resetForm }) => {
          const response = await submitBooking(values, selectedPackage);
          if (response.ok) {
            resetForm();
          }
        }}
      >
        {({ isSubmitting }) => (
          <Form noValidate>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <Field name="fullName" type="text" className="form-control" />
                <div className="text-danger small mt-1">
                  <ErrorMessage name="fullName" />
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <Field name="email" type="email" className="form-control" />
                <div className="text-danger small mt-1">
                  <ErrorMessage name="email" />
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="phone" className="form-label">
                  Phone
                </label>
                <Field name="phone" type="text" className="form-control" />
                <div className="text-danger small mt-1">
                  <ErrorMessage name="phone" />
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="travelDate" className="form-label">
                  Travel Date
                </label>
                <Field name="travelDate" type="date" className="form-control" />
                <div className="text-danger small mt-1">
                  <ErrorMessage name="travelDate" />
                </div>
              </div>

              <div className="col-md-6">
                <label htmlFor="travelers" className="form-label">
                  Travelers
                </label>
                <Field name="travelers" type="number" className="form-control" />
                <div className="text-danger small mt-1">
                  <ErrorMessage name="travelers" />
                </div>
              </div>

              <div className="col-12">
                <label htmlFor="specialRequests" className="form-label">
                  Special Requests
                </label>
                <Field
                  as="textarea"
                  name="specialRequests"
                  rows="3"
                  className="form-control"
                />
                <div className="text-danger small mt-1">
                  <ErrorMessage name="specialRequests" />
                </div>
              </div>
            </div>

            {status === "success" && (
              <div className="alert alert-success mt-3 mb-0">
                Booking submitted successfully.
              </div>
            )}
            {status === "error" && (
              <div className="alert alert-danger mt-3 mb-0">{errorMessage}</div>
            )}

            <button
              type="submit"
              className="btn btn-success mt-4"
              disabled={isSubmitting || status === "submitting"}
            >
              {status === "submitting" ? "Submitting..." : "Confirm Booking"}
            </button>
          </Form>
        )}
      </Formik>
    </section>
  );
}

BookingForm.propTypes = {
  selectedPackage: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }),
};

BookingForm.defaultProps = {
  selectedPackage: null,
};

export default BookingForm;

import { NavLink } from "react-router-dom";
import { useBooking } from "../../context/BookingContext";

function Header() {
  const { wishlist, bookings } = useBooking();

  const navClass = ({ isActive }) =>
    `nav-link ${isActive ? "active fw-semibold text-primary" : "text-dark"}`;

  return (
    <header className="border-bottom bg-white sticky-top">
      <nav className="navbar navbar-expand-lg container py-3">
        <NavLink to="/home" className="navbar-brand fw-bold text-primary">
          Travel Booking Platform-BY HUSSAIN
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainNav"
          aria-controls="mainNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="mainNav">
          <div className="navbar-nav ms-auto gap-lg-2">
            <NavLink to="/home" className={navClass}>
              Home
            </NavLink>
            <NavLink to="/packages" className={navClass}>
              Packages
            </NavLink>
            <NavLink to="/booking" className={navClass}>
              Booking
            </NavLink>
            <NavLink to="/contact" className={navClass}>
              Contact
            </NavLink>
          </div>
          <div className="d-flex align-items-center gap-2 ms-lg-3 mt-2 mt-lg-0">
            <span className="badge text-bg-light border">
              Wishlist: {wishlist.length}
            </span>
            <span className="badge text-bg-light border">
              Bookings: {bookings.length}
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;

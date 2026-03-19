import { Link } from "react-router-dom";
import DestinationCard from "../components/home/DestinationCard";
import featuredDestinations from "../data/featuredDestinations";
import { useBooking } from "../context/BookingContext";

function HomePage() {
  const { wishlist, toggleWishlist } = useBooking();

  return (
    <section>
      <div className="hero-box mb-4 shadow-sm">
        <h1 className="display-6 fw-bold mb-2">Plan Your Next Journey</h1>
        <p className="text-muted mb-3">
          Explore destinations, compare packages, and complete your booking in
          one flow.
        </p>
        <div className="d-flex gap-2 flex-wrap">
          <Link to="/packages" className="btn btn-primary">
            Explore Packages
          </Link>
          <Link to="/booking" className="btn btn-outline-secondary">
            Go to Booking
          </Link>
        </div>
      </div>

      <h2 className="section-title mb-3">Featured Destinations</h2>
      <div className="row g-3">
        {featuredDestinations.map((destination) => (
          <div className="col-md-6 col-lg-4" key={destination.id}>
            <DestinationCard
              destination={destination}
              onToggleWishlist={toggleWishlist}
              isWishlisted={wishlist.some(
                (item) => String(item.id) === String(destination.id)
              )}
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default HomePage;

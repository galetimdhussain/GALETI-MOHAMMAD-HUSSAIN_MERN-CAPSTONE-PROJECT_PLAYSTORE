import PropTypes from "prop-types";

function DestinationCard({ destination, onToggleWishlist, isWishlisted }) {
  return (
    <article className="card custom-card h-100">
      <img
        src={destination.image}
        className="card-img-top"
        alt={destination.name}
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title mb-1">{destination.name}</h5>
        <p className="text-muted mb-1">{destination.country}</p>
        <p className="small text-success fw-semibold mb-3">{destination.offer}</p>
        <button
          type="button"
          className={`btn mt-auto ${
            isWishlisted ? "btn-outline-danger" : "btn-outline-primary"
          }`}
          onClick={() => onToggleWishlist(destination)}
        >
          {isWishlisted ? "Remove from Wishlist" : "Add to Wishlist"}
        </button>
      </div>
    </article>
  );
}

DestinationCard.propTypes = {
  destination: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
    offer: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
  onToggleWishlist: PropTypes.func.isRequired,
  isWishlisted: PropTypes.bool.isRequired,
};

export default DestinationCard;

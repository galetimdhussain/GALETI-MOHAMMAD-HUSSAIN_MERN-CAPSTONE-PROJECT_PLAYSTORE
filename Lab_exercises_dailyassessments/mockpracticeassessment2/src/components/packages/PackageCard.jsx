import PropTypes from "prop-types";

function PackageCard({
  packageData,
  onBookNow,
  onToggleWishlist,
  isWishlisted,
}) {
  return (
    <article className="card custom-card h-100">
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{packageData.title}</h5>
        <p className="mb-1 text-muted">{packageData.location}</p>
        <p className="mb-2 small">{packageData.duration}</p>
        <p className="mb-2 small">Rating: {packageData.rating} / 5</p>
        <p className="card-text small">{packageData.description}</p>
        <p className="price-tag mb-3">INR {packageData.price.toLocaleString()}</p>
        <div className="d-flex gap-2 mt-auto">
          <button
            type="button"
            className="btn btn-primary btn-sm"
            onClick={() => onBookNow(packageData)}
          >
            Book Now
          </button>
          <button
            type="button"
            className={`btn btn-sm ${
              isWishlisted ? "btn-outline-danger" : "btn-outline-secondary"
            }`}
            onClick={() => onToggleWishlist(packageData)}
          >
            {isWishlisted ? "Wishlisted" : "Add Wishlist"}
          </button>
        </div>
      </div>
    </article>
  );
}

PackageCard.propTypes = {
  packageData: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onBookNow: PropTypes.func.isRequired,
  onToggleWishlist: PropTypes.func.isRequired,
  isWishlisted: PropTypes.bool.isRequired,
};

export default PackageCard;

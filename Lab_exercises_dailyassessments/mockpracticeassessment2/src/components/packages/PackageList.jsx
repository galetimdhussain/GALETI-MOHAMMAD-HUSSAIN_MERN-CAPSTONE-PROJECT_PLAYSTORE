import PropTypes from "prop-types";
import PackageCard from "./PackageCard";

function PackageList({ packages, onBookNow, onToggleWishlist, wishlist }) {
  if (packages.length === 0) {
    return <div className="alert alert-info">No packages available right now.</div>;
  }

  return (
    <div className="row g-3">
      {packages.map((item) => (
        <div className="col-md-6 col-lg-4" key={item.id}>
          <PackageCard
            packageData={item}
            onBookNow={onBookNow}
            onToggleWishlist={onToggleWishlist}
            isWishlisted={wishlist.some((wish) => String(wish.id) === String(item.id))}
          />
        </div>
      ))}
    </div>
  );
}

PackageList.propTypes = {
  packages: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      duration: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  onBookNow: PropTypes.func.isRequired,
  onToggleWishlist: PropTypes.func.isRequired,
  wishlist: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default PackageList;

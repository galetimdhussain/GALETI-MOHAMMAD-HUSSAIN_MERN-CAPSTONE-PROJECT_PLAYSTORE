import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Loader from "../components/common/Loader";
import PackageList from "../components/packages/PackageList";
import { useBooking } from "../context/BookingContext";
import api from "../services/api";

function PackagesPage() {
  const navigate = useNavigate();
  const { wishlist, toggleWishlist, setSelectedPackage } = useBooking();
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;

    const fetchPackages = async () => {
      setLoading(true);
      setError("");
      try {
        const response = await api.get("/packages");
        if (isMounted) {
          setPackages(response.data);
        }
      } catch (fetchError) {
        if (isMounted) {
          setError("Unable to fetch packages. Start json-server and try again.");
        }
      } finally {
        if (isMounted) {
          setLoading(false);
        }
      }
    };

    fetchPackages();

    return () => {
      isMounted = false;
    };
  }, []);

  const handleBookNow = (packageData) => {
    setSelectedPackage(packageData);
    navigate("/booking");
  };

  return (
    <section>
      <h1 className="h3 mb-3">Travel Packages</h1>
      <p className="text-muted mb-4">
        Select a package to continue to booking. Data is loaded from json-server.
      </p>

      {loading && <Loader message="Loading packages..." />}
      {error && <div className="alert alert-danger">{error}</div>}
      {!loading && !error && (
        <PackageList
          packages={packages}
          onBookNow={handleBookNow}
          onToggleWishlist={toggleWishlist}
          wishlist={wishlist}
        />
      )}
    </section>
  );
}

export default PackagesPage;

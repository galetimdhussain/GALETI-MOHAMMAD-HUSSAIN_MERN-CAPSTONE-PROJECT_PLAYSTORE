import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import HomePage from "../pages/HomePage";
import PackagesPage from "../pages/PackagesPage";
import BookingPage from "../pages/BookingPage";
import ContactPage from "../pages/ContactPage";
import NotFoundPage from "../pages/NotFoundPage";

function AppRoutes() {
  const location = useLocation();
  return (
    <div className="route-wrapper">
      <div key={location.pathname} className="route-page route-animate">
        <Routes location={location}>
          <Route path="/" element={<Navigate to="/home" replace />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default AppRoutes;

import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <section className="text-center py-5">
      <h1 className="display-6 fw-bold">404</h1>
      <p className="text-muted">Page not found.</p>
      <Link to="/home" className="btn btn-primary">
        Go to Home
      </Link>
    </section>
  );
}

export default NotFoundPage;

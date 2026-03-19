function Loader({ message = "Loading..." }) {
  return (
    <div className="d-flex flex-column align-items-center justify-content-center py-5">
      <div className="spinner-border text-primary" role="status" />
      <p className="text-muted mt-3 mb-0">{message}</p>
    </div>
  );
}

export default Loader;

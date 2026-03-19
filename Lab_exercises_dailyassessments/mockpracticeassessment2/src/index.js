import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BookingProvider } from "./context/BookingContext";
import ErrorBoundary from "./error/ErrorBoundary";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <BookingProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </BookingProvider>
    </ErrorBoundary>
  </React.StrictMode>
);

if (process.env.NODE_ENV === "production") {
  serviceWorkerRegistration.register();
} else {
  serviceWorkerRegistration.unregister();
}
reportWebVitals();

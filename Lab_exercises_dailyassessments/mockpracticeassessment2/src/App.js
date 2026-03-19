import Header from "./components/common/Header";
import Footer from "./components/common/Footer";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import "./styles/routeTransitions.css";

function App() {
  return (
    <div className="app-shell d-flex flex-column min-vh-100">
      <Header />
      <main className="container py-4 flex-grow-1">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}

export default App;

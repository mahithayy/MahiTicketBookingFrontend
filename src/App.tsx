import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Booking from "./pages/Booking";

export default function App() {
  return (
    <BrowserRouter>
    <div className="container">
        <nav className="navbar">
          <Link to="/"> Book tickets</Link>
          <Link to="/admin" style={{ fontSize: "1rem", fontWeight: "normal" }}>Admin Dashboard</Link>
        </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/booking/:id" element={<Booking />} />
      </Routes>
      </div>
    </BrowserRouter>
  );
}
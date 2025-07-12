import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import ProfilePage from "./ProfilePage";
import AdminDashboard from "./AdminDashboard";

export default function App() {
  return (
    <div>
      <nav style={{ backgroundColor: "#1e1e1e", padding: "1rem" }}>
        <Link to="/" style={linkStyle}>🏠 Home</Link> |{" "}
        <Link to="/profilo" style={linkStyle}>👤 Profilo</Link> |{" "}
        <Link to="/admin" style={linkStyle}>🛠️ Admin</Link>
      </nav>
      <Routes>
        <Route path="/" element={<h1 style={{ color: "#fff", textAlign: "center" }}>Benvenuto su LoveMatch360 💘</h1>} />
        <Route path="/profilo" element={<ProfilePage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </div>
  );
}

const linkStyle = {
  color: "#f08fc0",
  textDecoration: "none",
  margin: "0 1rem"
};



import React from "react";

export default function App() {
  return (
    <div style={{
      backgroundColor: "#121212",
      color: "white",
      padding: "2rem",
      minHeight: "100vh",
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <h1 style={{
        color: "#f08fc0",
        textShadow: "0 0 10px #f08fc0"
      }}>💘 Benvenuto su LoveMatch360 💘</h1>
      <ul style={{ marginTop: "2rem", lineHeight: "2rem" }}>
        <li>👤 Profilo Utente</li>
        <li>🛠️ Pannello Admin</li>
        <li>📰 Feed pubblico</li>
      </ul>
      <p style={{ marginTop: "3rem", opacity: 0.6 }}>Versione minimal pronta per il deploy.</p>
    </div>
  );
}

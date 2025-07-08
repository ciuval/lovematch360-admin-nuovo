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

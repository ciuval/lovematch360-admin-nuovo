// src/pages/AdminDashboard.jsx
import React from "react";

export default function AdminDashboard() {
  return (
    <div style={{
      backgroundColor: "#121212",
      color: "white",
      minHeight: "100vh",
      padding: "2rem",
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <h1 style={{ color: "#f08fc0", textShadow: "0 0 8px #f08fc0" }}>
        🛠️ Pannello di Controllo Admin
      </h1>
      <p>Benvenuto nell'area riservata agli amministratori di LoveMatch360.</p>
      <ul style={{ marginTop: "1.5rem" }}>
        <li>👥 Gestione utenti</li>
        <li>📝 Moderazione contenuti</li>
        <li>💌 Newsletter & notifiche</li>
        <li>📊 Statistiche e logs</li>
      </ul>
    </div>
  );
}
                                                                                                                                                                                                                              

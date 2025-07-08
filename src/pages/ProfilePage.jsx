// src/pages/ProfilePage.jsx
import React from "react";

export default function ProfilePage() {
  const utente = {
    nome: "Valerio C.",
    bio: "Creatore di LoveMatch360 💘 – Costruendo connessioni vere.",
    interessi: ["Musica", "Tecnologia", "Empatia", "Startup"],
    località: "Roma, Italia"
  };

  return (
    <div style={{
      fontFamily: "'Segoe UI', sans-serif",
      backgroundColor: "#121212",
      color: "#fff",
      padding: "2rem",
      maxWidth: "600px",
      margin: "0 auto",
      borderRadius: "8px",
      boxShadow: "0 0 20px #f08fc055"
    }}>
      <h2 style={{ color: "#f08fc0" }}>👤 Profilo Utente</h2>
      <p><strong>Nome:</strong> {utente.nome}</p>
      <p><strong>Bio:</strong> {utente.bio}</p>
      <p><strong>Località:</strong> {utente.località}</p>
      <p><strong>Interessi:</strong></p>
      <ul>
        {utente.interessi.map((int, i) => (
          <li key={i}>💖 {int}</li>
        ))}
      </ul>
    </div>
  );
}
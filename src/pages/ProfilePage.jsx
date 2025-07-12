import React, { useState, useEffect } from 'react';

export default function ProfilePage() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  const [interests, setInterests] = useState('');
  const [photo, setPhoto] = useState('');
  const [preview, setPreview] = useState('');

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('userProfile'));
    if (saved) {
      setName(saved.name);
      setBio(saved.bio);
      setInterests(saved.interests);
      setPhoto(saved.photo);
      setPreview(saved.photo);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('userProfile', JSON.stringify({ name, bio, interests, photo }));
  }, [name, bio, interests, photo]);

  const handlePhoto = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPhoto(reader.result);
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div style={{
      padding: "2rem",
      backgroundColor: "#121212",
      color: "white",
      minHeight: "100vh",
      fontFamily: "'Segoe UI', sans-serif"
    }}>
      <h2 style={{ color: "#f08fc0", textShadow: "0 0 10px #f08fc0" }}>
        👤 Il tuo profilo
      </h2>
      <input type="text" placeholder="Nome" value={name} onChange={(e) => setName(e.target.value)} style={inputStyle} />
      <textarea placeholder="Bio" value={bio} onChange={(e) => setBio(e.target.value)} style={{ ...inputStyle, height: "100px" }} />
      <input type="text" placeholder="Interessi" value={interests} onChange={(e) => setInterests(e.target.value)} style={inputStyle} />
      <input type="file" accept="image/*" onChange={handlePhoto} style={inputStyle} />
      {preview && <img src={preview} alt="Anteprima" style={{ maxWidth: "200px", borderRadius: "8px", marginTop: "1rem" }} />}
      <p style={{ opacity: 0.6, marginTop: "2rem" }}>💾 I dati vengono salvati in locale</p>
    </div>
  );
}

const inputStyle = {
  display: "block",
  width: "100%",
  margin: "1rem 0",
  padding: "0.8rem",
  borderRadius: "8px",
  border: "none",
  backgroundColor: "#1e1e1e",
  color: "#fff",
  fontSize: "1rem"
};// 
src/pages/ProfilePage.jsx
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

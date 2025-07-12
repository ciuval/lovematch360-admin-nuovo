import React, { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';

export default function AdminTest() {
  const [data, setData] = useState([]);

  useEffect(() => {
    supabase.from('utenti').select('*').then(({ data, error }) => {
      if (error) console.error('Errore:', error);
      else setData(data);
    });
  }, []);

  return (
    <div style={{ padding: "2rem", color: "white", background: "#121212" }}>
      <h2>👮‍♂️ Admin Test – Utenti</h2>
      {data.length === 0 && <p>⏳ Nessun dato trovato...</p>}
      <ul>
        {data.map((utente, i) => (
          <li key={i}>🧑‍💻 {utente.nome || 'Nome non disponibile'}</li>
        ))}
      </ul>
    </div>
  );
}

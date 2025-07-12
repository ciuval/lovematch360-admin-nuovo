Dimport React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function AdminDashboard() {
  const [utenti, setUtenti] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUtenti();

    const channel = supabase
      .channel("realtime-users")
      .on("postgres_changes", { event: "*", schema: "public", table: "profili" }, () => {
        fetchUtenti();
      })
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  async function fetchUtenti() {
    const { data, error } = await supabase.from("profili").select("*").order("created_at", { ascending: false });
    if (error) console.error(error);
    else setUtenti(data);
  }

  async function cambiaRuolo(id, nuovoRuolo) {
    await supabase.from("profili").update({ ruolo: nuovoRuolo }).eq("id", id);
  }

  async function eliminaUtente(id) {
    await supabase.from("profili").delete().eq("id", id);
  }

  const filtrati = utenti.filter(u => u.nome?.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ backgroundColor: "#121212", color: "#fff", minHeight: "100vh", padding: "2rem", fontFamily: "'Segoe UI', sans-serif" }}>
      <h1 style={{ color: "#f08fc0", marginBottom: "1rem" }}>🛠️ Admin Dashboard</h1>
      <input
        placeholder="🔍 Cerca utente..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%", borderRadius: "6px", background: "#1e1e1e", color: "white", border: "none" }}
      />
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#1e1e1e" }}>
            <th style={th}>Nome</th>
            <th style={th}>Ruolo</th>
            <th style={th}>Azione</th>
          </tr>
        </thead>
        <tbody>
          {filtrati.map((u) => (
            <tr key={u.id} style={{ borderBottom: "1px solid #333" }}>
              <td style={td}>{u.nome || "—"}</td>
              <td style={td}>{u.ruolo}</td>
              <td style={td}>
                <select onChange={(e) => cambiaRuolo(u.id, e.target.value)} defaultValue={u.ruolo}>
                  <option value="user">user</option>
                  <option value="premium">premium</option>
                  <option value="admin">admin</option>
                </select>
                <button onClick={() => eliminaUtente(u.id)} style={{ marginLeft: "1rem", backgroundColor: "#f44336", color: "#fff", border: "none", 
padding: "0.5rem", borderRadius: "5px" }}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = { padding: "1rem", textAlign: "left", color: "#f08fc0" };
const td = { padding: "0.8rem", verticalAlign: "top" }import React, { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL,
  import.meta.env.VITE_SUPABASE_ANON_KEY
);

export default function AdminDashboard() {
  const [utenti, setUtenti] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchUtenti();

    const channel = supabase
      .channel("realtime-users")
      .on("postgres_changes", { event: "*", schema: "public", table: "profili" }, () => {
        fetchUtenti();
      })
      .subscribe();

    return () => supabase.removeChannel(channel);
  }, []);

  async function fetchUtenti() {
    const { data, error } = await supabase.from("profili").select("*").order("created_at", { ascending: false });
    if (error) console.error(error);
    else setUtenti(data);
  }

  async function cambiaRuolo(id, nuovoRuolo) {
    await supabase.from("profili").update({ ruolo: nuovoRuolo }).eq("id", id);
  }

  async function eliminaUtente(id) {
    await supabase.from("profili").delete().eq("id", id);
  }

  const filtrati = utenti.filter(u => u.nome?.toLowerCase().includes(search.toLowerCase()));

  return (
    <div style={{ backgroundColor: "#121212", color: "#fff", minHeight: "100vh", padding: "2rem", fontFamily: "'Segoe UI', sans-serif" }}>
      <h1 style={{ color: "#f08fc0", marginBottom: "1rem" }}>🛠️ Admin Dashboard</h1>
      <input
        placeholder="🔍 Cerca utente..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={{ marginBottom: "1rem", padding: "0.5rem", width: "100%", borderRadius: "6px", background: "#1e1e1e", color: "white", border: "none" }}
      />
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr style={{ backgroundColor: "#1e1e1e" }}>
            <th style={th}>Nome</th>
            <th style={th}>Ruolo</th>
            <th style={th}>Azione</th>
          </tr>
        </thead>
        <tbody>
          {filtrati.map((u) => (
            <tr key={u.id} style={{ borderBottom: "1px solid #333" }}>
              <td style={td}>{u.nome || "—"}</td>
              <td style={td}>{u.ruolo}</td>
              <td style={td}>
                <select onChange={(e) => cambiaRuolo(u.id, e.target.value)} defaultValue={u.ruolo}>
                  <option value="user">user</option>
                  <option value="premium">premium</option>
                  <option value="admin">admin</option>
                </select>
                <button onClick={() => eliminaUtente(u.id)} style={{ marginLeft: "1rem", backgroundColor: "#f44336", color: "#fff", border: "none", 
padding: "0.5rem", borderRadius: "5px" }}>❌</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const th = { padding: "1rem", textAlign: "left", color: "#f08fc0" };
const td = { padding: "0.8rem", verticalAlign: "top" };
// 
src/pages/AdminDashboard.jsx
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
                                                                                                                                                                                                                              

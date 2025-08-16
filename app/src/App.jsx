// app/src/App.jsx
import React from "react";
import { Routes, Route, NavLink } from "react-router-dom";

function Home() { return <p>Home Page</p>; }
function About() { return <p>About Page</p>; }
function Tools() { return <p>PDF Tools Page</p>; }

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
      <nav style={{ display: "flex", gap: 12, marginBottom: 16 }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/tools">Tools</NavLink>
      </nav>

      <h1>OnDevicePDF</h1>
      <p>If you can see this, React + Router is set up correctly.</p>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/tools" element={<Tools />} />
      </Routes>
    </div>
  );
}

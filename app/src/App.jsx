import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router basename="/">
      <div style={{ padding: 24, fontFamily: "system-ui, sans-serif" }}>
        <h1>OnDevicePDF</h1>
        <p>If you can see this, React + Router is set up correctly.</p>

        <Routes>
          <Route path="/" element={<p>Home Page</p>} />
          <Route path="/about" element={<p>About Page</p>} />
          <Route path="/tools" element={<p>PDF Tools Page</p>} />
        </Routes>
      </div>
    </Router>
  );
}

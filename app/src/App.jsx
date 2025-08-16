// app/src/App.jsx
import * as pdfjsLib from "pdfjs-dist/legacy/build/pdf";
import workerSrc from "pdfjs-dist/legacy/build/pdf.worker.min.js?url";
pdfjsLib.GlobalWorkerOptions.workerSrc = workerSrc;

import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Tools from "./pages/Tools";
import About from "./pages/About";

export default function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/tools" element={<Tools />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  );
}

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// app/vite.config.js
export default {
  plugins: [react()],
  base: "/",        // ✅ NOT "/on-device-pdf"
};


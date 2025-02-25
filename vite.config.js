import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  proxy: {
    "/api": {
      // Any request using the /api prefix will be proxied
      target: "https://6e95-182-253-246-147.ngrok-free.app", // Target server for backend API server, this is where the proxied request will be forwarded to
      changeOrigin: true, // Modifies the Host header of the proxied request to match the target server's host
    },
  },
});

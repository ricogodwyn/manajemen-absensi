import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    allowedHosts: ["9eac-118-99-106-104.ngrok-free.app"],
    proxy: {
      "/api/in-out": {
        target: "http://661f-118-99-81-87.ngrok-free.app/", // Target server for backend API server, this is where the proxied request will be forwarded to
        changeOrigin: true, // Ensures the Host header matches the target
        secure: false, // Use this if your backend has self-signed certificates
      },
    },
  },
});

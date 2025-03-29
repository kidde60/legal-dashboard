import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],

  test: {
    globals: true, // Enables globals like `describe`, `it`, `expect`, etc.
    environment: "jsdom", // Ensures a browser-like environment
    setupFiles: "./src/setupTests.ts", // Correct path to your setupTests.ts
  },
});

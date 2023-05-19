import { defineConfig } from "vite";
import linaria from "@linaria/rollup";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: "jsdom",
        includeSource: ["src/__tests__/*.{js,tsx,ts}"],
        setupFiles: "src/setupTests.ts",
    },
});

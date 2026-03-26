import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Замени REPO_NAME на точное имя твоего репозитория
const REPO_NAME = "minty-haven-landing";

export default defineConfig(({ mode }) => ({
  base: `/${REPO_NAME}/`, // ← важно для GitHub Pages
  server: {
    host: "::",
    port: 8080,
    hmr: { overlay: false },
  },
  plugins: [react(), mode === "development" && componentTagger()].filter(
    Boolean,
  ),
  resolve: {
    alias: { "@": path.resolve(__dirname, "./src") },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
    ],
  },
}));

// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react-swc";
// import path from "path";
// import { componentTagger } from "lovable-tagger";

// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => ({
//   server: {
//     host: "::",
//     port: 8080,
//     hmr: {
//       overlay: false,
//     },
//   },
//   plugins: [react(), mode === "development" && componentTagger()].filter(
//     Boolean,
//   ),
//   resolve: {
//     alias: {
//       "@": path.resolve(__dirname, "./src"),
//     },
//     dedupe: [
//       "react",
//       "react-dom",
//       "react/jsx-runtime",
//       "react/jsx-dev-runtime",
//     ],
//   },
// }));

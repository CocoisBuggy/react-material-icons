import { defineConfig } from "vite";
import dts from "vite-plugin-dts";
import { peerDependencies } from "./package.json";

export default defineConfig({
  // generate TypeScript declaration files
  plugins: [dts()],
  // build options
  build: {
    lib: {
      // Specifies the entry point for building the library.
      entry: "./src/index.tsx",
      name: "react-material-icons",
      fileName: (format) => `index.${format}.js`,
      // We're going to need CJS and ES formats for bundling.
      formats: ["cjs", "es"],
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
    },
    sourcemap: true,
    emptyOutDir: true,
  },
});

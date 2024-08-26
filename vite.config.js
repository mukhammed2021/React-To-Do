import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import createSvgSpritePlugin from "vite-plugin-svg-spriter";

const SRC_PATH = path.resolve(__dirname, "src");
const SVG_FOLDER_PATH = path.resolve(SRC_PATH, "assets", "svg-sprite");

// https://vitejs.dev/config/
export default defineConfig({
   plugins: [react(), createSvgSpritePlugin({ svgFolder: SVG_FOLDER_PATH })],
});

import { fileURLToPath, URL } from "url";

import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Inspector from "vite-plugin-vue-inspector";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [vue(), Inspector({ enabled: false })],
	resolve: {
		alias: {
			"@": fileURLToPath(new URL("./src", import.meta.url)),
		},
	},
});

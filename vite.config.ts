import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vuePugPlugin from "vite-plugin-pug";

// https://vitejs.dev/config/
export default defineConfig(async () => ({
	plugins: [vue({
		template: {
			preprocessOptions: {
				// 'preprocessOptions' is passed through to the pug compiler
				plugins: [vuePugPlugin],
			},
		},
	})],
	clearScreen: false, // 1. prevent vite from obscuring rust errors
	// 2. tauri expects a fixed port, fail if that port is not available
	server: {
		port: 1415,
		strictPort: true,
		watch: {
			// 3. tell vite to ignore watching `src-tauri`
			ignored: ["**/src-tauri/**"],
		},
	},
}));

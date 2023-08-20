const path = require( 'path' );
import { rmSync } from "node:fs";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import electron from "vite-plugin-electron";
import renderer from "vite-plugin-electron-renderer";
import pkg from "./package.json";
import vuePugPlugin from "vue-pug-plugin";
// import ckeditor5 from '@ckeditor/vite-plugin-ckeditor5';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
	rmSync("dist-electron", { recursive: true, force: true });

	const isServe = command === "serve";
	const isBuild = command === "build";
	const sourcemap = isServe || !!process.env.VSCODE_DEBUG;

	return {
		plugins: [
			vue({
				template: {
					preprocessOptions: {
						// 'preprocessOptions' is passed through to the pug compiler
						plugins: [vuePugPlugin],
					},
				},
			}),
			electron([
				{
					// Main-Process entry file of the Electron App.
					entry: "electron/main/index.ts",
					onstart(options) {
						if (process.env.VSCODE_DEBUG) {
							console.log(
								/* For `.vscode/.debug.script.mjs` */ "[startup] Electron App"
							);
						} else {
							options.startup();
						}
					},
					vite: {
						build: {
							sourcemap,
							minify: isBuild,
							outDir: "dist-electron/main",
							rollupOptions: {
								external: Object.keys(
									"dependencies" in pkg
										? pkg.dependencies
										: {}
								),
							},
						},
					},
				},
				{
					entry: "electron/preload/index.ts",
					onstart(options) {
						// Notify the Renderer-Process to reload the page when the Preload-Scripts build is complete,
						// instead of restarting the entire Electron App.
						options.reload();
					},
					vite: {
						build: {
							sourcemap: sourcemap ? "inline" : undefined, // #332
							minify: isBuild,
							outDir: "dist-electron/preload",
							rollupOptions: {
								external: Object.keys(
									"dependencies" in pkg
										? pkg.dependencies
										: {}
								),
							},
						},
					},
				},
				{
					entry: "electron/main/functions.ts",
					vite: {
						build: {
							sourcemap: sourcemap ? "inline" : undefined, // #332
							minify: isBuild,
							outDir: "dist-electron/main",
							rollupOptions: {
								external: Object.keys(
									"dependencies" in pkg
										? pkg.dependencies
										: {}
								),
							},
						},
					},
				},
				{
					entry: "electron/main/menu.ts",
					vite: {
						build: {
							sourcemap: sourcemap ? "inline" : undefined, // #332
							minify: isBuild,
							outDir: "dist-electron/main",
							rollupOptions: {
								external: Object.keys(
									"dependencies" in pkg
										? pkg.dependencies
										: {}
								),
							},
						},
					},
				},
				{
					entry: "electron/main/renderer",
					vite: {
						build: {
							sourcemap: sourcemap ? "inline" : undefined, // #332
							minify: isBuild,
							outDir: "dist-electron/main",
							rollupOptions: {
								external: Object.keys(
									"dependencies" in pkg
										? pkg.dependencies
										: {}
								),
							},
						},
					},
				},
			]),
			// ckeditor5( { theme: require.resolve( '@ckeditor/ckeditor5-theme-lark' ) } ),
			// Use Node.js API in the Renderer-process
			renderer(),
		],
		server:
			process.env.VSCODE_DEBUG &&
			(() => {
				const url = new URL(pkg.debug.env.VITE_DEV_SERVER_URL);
				return {
					host: url.hostname,
					port: +url.port,
				};
			})(),
		clearScreen: false,
	};

});
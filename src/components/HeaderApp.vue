<script lang="ts">
import { ipcRenderer } from 'electron';
// The Header
export default {
	data() {
		return {
			LogoLink: "Https://www.google.com",
			rootElement: document.querySelector(":root") as HTMLElement,
			gradin: {
				"var(--linearGradient)": "linear-gradient(-45deg, #20b173 0%, #13a868 25%, #faae28 25%, #f78723 50%, #f67e9b 50%, #f33a6c 75%, #c237c0 75%, #d43c7d 100%)",
				"var(--sky)": "linear-gradient(90deg, #03947c 0%, #00bba2 35%, #64ecda 100%)",
				"var(--yellow)": "linear-gradient(90deg, #ff6600 0%, #e9912d 35%, #fdc063 100%)",
				"var(--green)": "linear-gradient(90deg, #37cf4c 0%, #22dd61 35%, #49c46e 100%)",
				"var(--pink)": "linear-gradient(90deg, #e00043 0%, #d1457f 35%, #fc7373 100%)",
				"var(--purple)": "linear-gradient(90deg, #9001ce 0%, #9a44cc 35%, #c16bf3 100%)",
				"var(--blue)": "linear-gradient(90deg, #125ce6 0%, #3a69c0 35%, #7c94ff 100%)",
			},
			LiColorActive: "var(--linearGradient)",
		};
	},
	methods: {
		changeAppColor(color: string, _alt: any) {
			this.LiColorActive = color;
			this.rootElement.style.setProperty("--favColor", _alt);
			// Error Typescript Element implicitly has an 'any' type because expression of type 'any' can't be used to index type
			this.rootElement.style.setProperty("--bgG", this.gradin[color]);
		},
		closeBtn(){
			ipcRenderer.send("closeApp");
		},
		minimizeApp(){
			ipcRenderer.send("minimizeApp");
		},
		maximizeApp() {
			ipcRenderer.send("maximizeApp");
		},

	}
}
</script>
<template lang="pug">
header(class="w-full p-2 flex items-center justify-between select-none h-[var(--HeaderHeight)] bg-[var(--dark300)] border-b border-[var(--dark200)]" style="-webkit-app-region: drag;")
	//- Logo
	a(class="ml-4 text-xl outline-none text-[var(--favColor)]" :href="LogoLink" style="-webkit-app-region: no-drag") LyeApp #[span(class="text-xs opacity-70") v1.0]

	//- Colors
	div(class="flex items-center justify-center" style="-webkit-app-region: no-drag")
		ul(class="h-9 p-1 px-3 rounded-full flex items-center justify-center bg-[var(--dark200)]" id="favColorsUL")
			li(data-color="var(--blue)"   class="duration-200 hover:scale-90 cursor-pointer h-5 w-5 rounded-lg m-1 bg-[var(--blue)]")
			li(data-color="var(--sky)"    class="duration-200 hover:scale-90 cursor-pointer h-5 w-5 rounded-lg m-1 bg-[var(--sky)]")
			li(data-color="var(--purple)" class="duration-200 hover:scale-90 cursor-pointer h-5 w-5 rounded-lg m-1 bg-[var(--purple)]")
			li(data-color="var(--green)"  class="duration-200 hover:scale-90 cursor-pointer h-5 w-5 rounded-lg m-1 bg-[var(--green)]")
			li(data-color="var(--yellow)" class="duration-200 hover:scale-90 cursor-pointer h-5 w-5 rounded-lg m-1 bg-[var(--yellow)] scale-125 mx-2")
			li(data-color="var(--pink)"   class="duration-200 hover:scale-90 cursor-pointer h-5 w-5 rounded-lg m-1 bg-[var(--pink)]")

	//- Main App Fram
	div(class="h-7 mr-2 flex items-center justify-center" style="-webkit-app-region: no-drag")
		button(class="duration-150 hover:opacity-50 w-7 h-7 rounded-lg bg-yellow-500" id="minimize")
			<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M12 16L6 10H18L12 16Z"/></svg>
		button(class="duration-150 hover:opacity-50 w-7 h-7 mx-2 	rounded-lg bg-green-500" id="maximize")
			<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M12 8L18 14H6L12 8Z"/></svg>
		button(class="duration-150 hover:opacity-50 w-7 h-7 p-1 	rounded-lg bg-red-500" id="closeBtn")
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="white" stroke="white" stroke-width="2"><path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/></svg>
</template>

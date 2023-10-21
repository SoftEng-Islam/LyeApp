<script lang="ts">
import { ipcRenderer } from 'electron';
// The Header
export default {
	data() {
		return {
			LogoLink: "Https://www.google.com",
			rootElement: document.querySelector(":root") as HTMLElement,
			LiColorActive: "var(--yellow)",
		};
	},
	methods: {
		changeAppColor(color: string) {
			this.LiColorActive = color;
			// Error Typescript Element implicitly has an 'any' type because expression of type 'any' can't be used to index type
			this.rootElement.style.setProperty("--favColor", color);
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
			li( @click="changeAppColor('var(--blue)')" 		:class="LiColorActive === 'var(--blue)' ? 'scale-125 mx-2': ''" 	class="cursor-pointer duration-200 hover:scale-95 h-5 w-5 rounded-full m-1 bg-[var(--blue)]")
			li( @click="changeAppColor('var(--sky)')" 		:class="LiColorActive === 'var(--sky)' ? 'scale-125 mx-2': ''" 		class="cursor-pointer duration-200 hover:scale-95 h-5 w-5 rounded-full m-1 bg-[var(--sky)]")
			li( @click="changeAppColor('var(--purple)')" 	:class="LiColorActive === 'var(--purple)' ? 'scale-125 mx-2': ''" 	class="cursor-pointer duration-200 hover:scale-95 h-5 w-5 rounded-full m-1 bg-[var(--purple)]")
			li( @click="changeAppColor('var(--green)')" 	:class="LiColorActive === 'var(--green)' ? 'scale-125 mx-2': ''" 	class="cursor-pointer duration-200 hover:scale-95 h-5 w-5 rounded-full m-1 bg-[var(--green)]")
			li( @click="changeAppColor('var(--yellow)')" 	:class="LiColorActive === 'var(--yellow)' ? 'scale-125 mx-2': ''" 	class="cursor-pointer duration-200 hover:scale-95 h-5 w-5 rounded-full m-1 bg-[var(--yellow)]")
			li( @click="changeAppColor('var(--pink)')" 		:class="LiColorActive === 'var(--pink)' ? 'scale-125 mx-2': ''" 	class="cursor-pointer duration-200 hover:scale-95 h-5 w-5 rounded-full m-1 bg-[var(--pink)]")
	//- Main App Fram
	div(class="h-7 mr-2 flex items-center justify-center" style="-webkit-app-region: no-drag")
		button(class="duration-150 hover:opacity-50 w-7 h-7 rounded-lg bg-yellow-500" id="minimize")
			<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M12 16L6 10H18L12 16Z"/></svg>
		button(class="duration-150 hover:opacity-50 w-7 h-7 mx-2 	rounded-lg bg-green-500" id="maximize")
			<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M12 8L18 14H6L12 8Z"/></svg>
		button(class="duration-150 hover:opacity-50 w-7 h-7 p-1 	rounded-lg bg-red-500" id="closeBtn")
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="white" stroke="white" stroke-width="2"><path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/></svg>
</template>

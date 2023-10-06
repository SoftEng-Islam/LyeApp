<script lang="ts">
// The Header
export default {
	data() {
		return {
			LogoLink: "Https://www.google.com",
		};
	},
};
</script>
<template lang="pug">
header(class="border-[var(--dark200)] border-b w-full flex items-center p-2 select-none h-[var(--HeaderHeight)] bg-[var(--dark300)]" style="-webkit-app-region: drag;")
	//- Logo
	a(class="ml-4 text-xl outline-none text-[var(--favColor)]" :href="LogoLink" style="-webkit-app-region: no-drag") LyeApp #[span(class="text-xs opacity-70") v1.0]

	//- Main App Fram
	div(class="h-7 ml-auto mr-2 flex items-center justify-center" style="-webkit-app-region: no-drag")
		button(class="duration-150 hover:opacity-50 w-8 h-8 rounded-lg bg-yellow-500" id="minimize")
			<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M12 16L6 10H18L12 16Z"/></svg>
		button(class="duration-150 hover:opacity-50 w-8 h-8 mx-2 	rounded-lg bg-green-500" id="maximize")
			<svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="white"><path d="M12 8L18 14H6L12 8Z"/></svg>
		button(class="duration-150 hover:opacity-50 w-8 h-8 p-1 	rounded-lg bg-red-500" id="closeBtn")
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 200 200" fill="white" stroke="white" stroke-width="2"><path d="M114,100l49-49a9.9,9.9,0,0,0-14-14L100,86,51,37A9.9,9.9,0,0,0,37,51l49,49L37,149a9.9,9.9,0,0,0,14,14l49-49,49,49a9.9,9.9,0,0,0,14-14Z"/></svg>
</template>

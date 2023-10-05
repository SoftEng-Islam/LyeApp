<script setup lang="ts">
import Header from "./components/_0Header.vue";
import Oils from "./components/_1Oils.vue";
import InfoOils from "./components/_2Info.vue";
import AddedOils from "./components/_3AddedOils.vue";
import RecipeTotal from "./components/_4RecipeTotal.vue";
import SoapProperties from "./components/_5SoapProperties.vue";
import { useOilStore } from "./store/index";
import RecipeProps from "./components/RecipeProps.vue";
console.log("[App.vue]", `Hello world from Electron ${process.versions.electron}!`);
</script>

<template lang="pug">
Header
div(class="w-full h-full flex items-start dark:bg-[var(--dark400)]")
	Oils
	div(class="h-full w-full flex flex-col items-center justify-start")
		RecipeProps
		perfect-scrollbar(class="h-[90%] w-full flex items-center justify-center")
			div(class="h-full w-full bg-[var(--dark400)] ")
				div(class="flex flex-row gap-2 flex-wrap justify-center items-stretch [&_.lyeWidget]:w-72 [&_.lyeWidget]:p-2 [&_.lyeWidget]:rounded-lg [&_.lyeWidget]:bg-[var(--dark300)]")
					info-oils
					added-oils
					recipe-total
					soap-properties
	div(class="fixed bottom-5 right-5 flex items-center justify-center" style="-webkit-app-region: no-drag")
		ul(class=" w-9 p-1 px-3 rounded-full flex flex-col items-center justify-center bg-[var(--dark200)]" id="favColorsUL")
			li(data-color="var(--blue)"   class="duration-200 hover:scale-90 cursor-pointer h-5 w-5 rounded-lg m-1 bg-[var(--blue)]")
			li(data-color="var(--sky)"    class="duration-200 hover:scale-90 cursor-pointer h-5 w-5 rounded-lg m-1 bg-[var(--sky)]")
			li(data-color="var(--purple)" class="duration-200 hover:scale-90 cursor-pointer h-5 w-5 rounded-lg m-1 bg-[var(--purple)]")
			li(data-color="var(--green)"  class="duration-200 hover:scale-90 cursor-pointer h-5 w-5 rounded-lg m-1 bg-[var(--green)]")
			li(data-color="var(--yellow)" class="duration-200 hover:scale-90 cursor-pointer h-5 w-5 rounded-lg m-1 bg-[var(--yellow)] scale-125 mx-2")
			li(data-color="var(--pink)"   class="duration-200 hover:scale-90 cursor-pointer h-5 w-5 rounded-lg m-1 bg-[var(--pink)]")
</template>

<style></style>

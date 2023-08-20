<script setup lang="ts">
import Header from "./components/layout/_0Header.vue";
import Oils from "./components/_1Oils.vue";
import Info from "./components/_2Info.vue";
import AddedOils from "./components/_3AddedOils.vue";
import RecipeTotal from "./components/_4RecipeTotal.vue";
import SoapProperties from "./components/_5SoapProperties.vue";
console.log(
	"[App.vue]",
	`Hello world from Electron ${process.versions.electron}!`
);
</script>

<template lang="pug">
Header
div(class="w-full h-full flex items-center overflow-hidden bg-[var(--dark400)]")
	<Oils msg="Islam & Islam" />
	div(class="w-full h-full taps flex flex-row gap-2 flex-wrap justify-center items-center bg-gray-500 [&>div]:w-72 [&>div]:p-2 [&>div]:rounded-lg [&>div]:bg-slate-950")
		Info
		AddedOils
		RecipeTotal
		SoapProperties
</template>

<style></style>

<script setup lang="ts">
import HeaderApp from "./components/HeaderApp.vue";
import OilsList from "./components/OilsList.vue";
import InfoOils from "./components/OilInfo.vue";
import AddedOils from "./components/AddedOils.vue";
import RecipeTotal from "./components/RecipeTotal.vue";
import SoapProperties from "./components/SoapProperties.vue";
import RecipeProps from "./components/RecipeProps.vue";
// console.log("[App.vue]", `Hello world from Electron ${process.versions.electron}!`);
</script>

<template lang="pug">
header-app
div(class="w-full h-full flex items-start dark:bg-[var(--dark400)]")
	oils-list
	div(class="flex flex-wrap")
		recipe-props
		perfect-scrollbar(class="h-[90%] w-full flex items-center justify-center")
			div(class="h-full w-full bg-[var(--dark400)] ")
				div(class="flex flex-row gap-4 flex-wrap justify-center items-stretch [&_.lyeWidget]:w-72 [&_.lyeWidget]:p-2 [&_.lyeWidget]:rounded-lg [&_.lyeWidget]:bg-[var(--dark100)]")
					info-oils
					added-oils
					recipe-total
					soap-properties
</template>

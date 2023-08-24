<script setup lang="ts">
import Header from "./components/layout/_0Header.vue";
import Oils from "./components/_1Oils.vue";
import Info from "./components/_2Info.vue";
import AddedOils from "./components/_3AddedOils.vue";
import RecipeTotal from "./components/_4RecipeTotal.vue";
import SoapProperties from "./components/_5SoapProperties.vue";
import {useOilStore} from "./store/index";

console.log("[App.vue]",`Hello world from Electron ${process.versions.electron}!`);
const OilsStore = useOilStore();
</script>

<template lang="pug">
Header
div(class="w-full h-full flex items-center bg-[var(--dark400)]")
	<Oils :OilsList="OilsStore" />
	perfect-scrollbar(class="h-[90%] w-full flex items-center justify-center")
		div(class="h-full w-full bg-[var(--dark400)] ")
			div(class="flex flex-row gap-2 flex-wrap justify-center items-stretch [&_.lyeWidget]:w-72 [&_.lyeWidget]:p-2 [&_.lyeWidget]:rounded-lg [&_.lyeWidget]:bg-[var(--dark300)]")
				<Info :OilProperties="OilsStore.selectedOilProprt" />
				<AddedOils :OilSelected="OilsStore.selectedOilArray" />
				RecipeTotal
				SoapProperties
</template>

<style></style>

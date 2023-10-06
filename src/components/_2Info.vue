<script lang="ts">
import { storeToRefs } from 'pinia';
import { useOilStore } from "../store/index";
export default {

	setup() {
		const { selectedOilProprt } = storeToRefs(useOilStore());
		return {
			selectedOilProprt
		}
	}
};
</script>
<template lang="pug">
//- Info Section
div(class="lyeWidget flex flex-col min-h-[200px] border border-transparent hover:border-yellow-500")
	div(class="Head bg-yellow-500 p-2 rounded-md")
		span(class="text-black font-bold ") {{ selectedOilProprt.name }}.
	ul(class="bg-[var(--dark400)] mt-4 p-2 rounded-md h-full")
		li(v-for="val , key in selectedOilProprt") #[span(class="float-left text-white") {{key.charAt(0).toUpperCase() + key.slice(1)}} ] #[span(class="text-yellow-500") :] #[span(class="float-right text-yellow-500") {{ val }}]
</template>

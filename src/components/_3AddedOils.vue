<script lang="ts">
import { ref } from "vue";
import { storeToRefs } from 'pinia';
import { useOilStore } from "../store/index";
import AddedOil from "./AddedOil.vue";
export default {
	components: {
		AddedOil
	},
	setup() {
		const OilStore = storeToRefs(useOilStore());
		const { selectedOilArray } = storeToRefs(useOilStore());
		const RemoveThisOil = (val: Object) => {
			useOilStore().RemoveOils(val);
		}
		if (OilStore.weightOils.value > 1000) {
			console.log(OilStore.weightOils.value / 1000); // Gram to k.g
		}
		return {
			OilStore,
			selectedOilArray,
			RemoveThisOil,
		}
	},
};
</script>
<template lang="pug">
//- The Added Oils
div(class="lyeWidget flex flex-col min-h-[200px] border border-transparent hover:border-green-500")
	div(class="Head bg-green-500 p-2 rounded-md")
		span(class="text-black font-bold ") Added Oils.
	ul(class="bg-[var(--dark400)] mt-4 p-2 rounded-md h-full overflow-hidden")
		added-oil(v-for="oil of selectedOilArray" :oil="oil")
	div(class="flex items-center overflow-hidden px-2 h-10")
		span(class="text-sm text-white") Oils
		span(class="text-green-500 ml-auto bg-[var(--dark400)] rounded-full px-2 border border-[var(--dark200)]") {{ OilStore.weightOils }} #[span(class="text-gray-300") Gram]

</template>

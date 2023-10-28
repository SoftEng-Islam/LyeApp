<script lang="ts">
import { storeToRefs } from 'pinia';
import { useOilStore } from "../store/index";
export default {
	setup() {
		const OilStore = storeToRefs(useOilStore());
		return {
			OilStore
		}
	}
}
</script>
<template lang="pug">
div(class="lyeWidget flex flex-col min-h-[200px] border border-transparent hover:border-blue-500")
	div(class="Head bg-blue-500 p-2 rounded-md")
		span(class="text-black font-bold") Recipe Total.
	ul(class="bg-[var(--dark400)] mt-4 p-2 rounded-md h-full")
		li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
			span(class="text-sm text-white") Water
			span(class="text-blue-500 ml-auto duration-200") {{ OilStore.RecipeTotal.value.weightWater || 0}} #[span(class="text-gray-300") Gram]
		li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
			span(class="text-sm text-white") Lye - {{OilStore.getTypeOfLye}}
			span(class="text-blue-500 ml-auto duration-200") {{parseInt(OilStore.RecipeTotal.value.weightLye.toFixed(0)) || 0}} #[span(class="text-gray-300") Gram]
		li(class="flex overflow-hidden py-2 border-t border-t-[var(--dark200)]")
			span(class="text-sm text-white") Oils
			span(class="text-blue-500 ml-auto") {{OilStore.RecipeTotal.value.weightOils || 0}} #[span(class="text-gray-300") Gram]
		li(class="flex overflow-hidden py-2 border-t border-t-[var(--dark200)]")
			span(class="text-sm text-white") Fragrance
			span(class="text-blue-500 ml-auto") {{OilStore.RecipeTotal.value.FragranceWeight}} #[span(class="text-gray-300") Gram]
	div(class="flex items-center overflow-hidden p-2")
		span(class="text-sm text-white") Recipe
		span(class="text-blue-500 ml-auto bg-[var(--dark400)] rounded-full px-2 border border-[var(--dark200)]") {{ parseInt((OilStore.RecipeTotal.value.weightWater + OilStore.RecipeTotal.value.weightLye + OilStore.RecipeTotal.value.weightOils + OilStore.headerOptions.value.fragrance.value).toFixed(0)) || 0 }} #[span(class="text-gray-300") Gram]
</template>

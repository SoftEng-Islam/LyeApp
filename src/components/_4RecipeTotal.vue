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
			span(class="text-blue-500 ml-auto duration-200") {{ OilStore.weightWater || 0}} #[span(class="text-gray-500") Gram]
		li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
			span(class="text-sm text-white") Lye - {{OilStore.getTypeOfLye}}
			span(class="text-blue-500 ml-auto duration-200") {{OilStore.weightLye || 0}} #[span(class="text-gray-500") Gram]
		li(class="flex overflow-hidden py-2 border-t border-t-[var(--dark200)]")
			span(class="text-sm text-white") Oils
			span(class="text-blue-500 ml-auto") {{OilStore.weightOils || 0}} #[span(class="text-gray-500") Gram]
		li(class="flex overflow-hidden py-2 border-t border-t-[var(--dark200)]")
			span(class="text-sm text-white") Fragrance
			span(class="text-blue-500 ml-auto") {{OilStore.headerOptions.value.fragrance.value}} #[span(class="text-gray-500") Gram]
		li(class="p-4")
			hr(class="opacity-50")
		li(class="flex overflow-hidden py-2")
			span(class="text-sm text-white") Weight of Recipe
			span(class="text-blue-500 ml-auto bg-[var(--dark400)] rounded-full px-2 border border-[var(--dark200)]") {{ OilStore.weightWater.value + OilStore.weightLye.value + OilStore.weightOils.value + OilStore.headerOptions.value.fragrance.value || 0 }} #[span(class="text-gray-500") Gram]
</template>

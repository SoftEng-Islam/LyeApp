<script lang="ts">
import { ref } from 'vue';
import { useOilStore } from "../store/index";
export default {
	setup() {
		let STypeLye = ref("NaOH"); // Default => NaOH
		const OilStore = useOilStore();
		const SetTypeOfLye = () => {
			useOilStore().setTypeOfLye(STypeLye.value);
		};
		return {
			OilStore,
			STypeLye,
			SetTypeOfLye
		}
	}
}
</script>
<template lang="pug">
ul(class="w-full mb-5 py-2 px-4 flex flex-row gap-2 items-start justify-between bg-[var(--dark100)]")
	li(class="hover:border-[var(--favColor)] border border-transparent flex items-center justify-center w-1/4 h-full bg-[var(--dark300)] rounded-lg p-2")
		span(class="text-white") Type of #[span(class="text-[var(--favColor)]") Lye]:
		select(class="ml-2 p-1 px-2 text-lg text-green-500 bg-[var(--dark400)] border border-[var(--dark100)] outline-none" id="Units" v-model="STypeLye" @change="SetTypeOfLye()")
			option(value="NaOH") NaOH
			option(value="KOH") KOH
	li(class="hover:border-[var(--favColor)] border border-transparent flex items-center justify-center w-1/4 h-full bg-[var(--dark300)] rounded-lg p-2")
		span(class="text-white text-sm") Weight of #[span(class="text-[var(--favColor)]") Oils]:
		input(type="number" class="w-1/4 bg-[var(--dark200)] placeholder:text-white text-white pl-2 py-1 rounded-md scale-90" v-model="OilStore.RecipeTotal.weightOils")
		select(class="bg-[var(--dark200)] text-red-500 pl-2 py-1 rounded-md scale-90")
			option(value="Pounds") Pounds
			option(value="Ounces") Ounces
			option(value="Grams" selected) Grams
			option(value="Kilo") Kilo
			option(value="Tons") Tons
	li(class="w-1/4 h-full p-2 text-sm flex items-center justify-center bg-[var(--dark300)] rounded-lg overflow-hidden hover:border-[var(--favColor)] border border-transparent")
		span(class="text-[var(--favColor)] mr-3") Water#[span(class="text-white") :]
		input(class="w-12 pl-2 py-1 rounded-md scale-9 bg-[var(--dark200)] placeholder:text-white text-white" type="text" value="38")
		select(class="bg-[var(--dark200)] text-blue-500 pl-2 py-1 rounded-md scale-90")
			option(value="Water as % of Oils") Water as % of Oils
			option(value="Lye Concentration") Lye Concentration
			option(value="Water : Lye Ratio") Water : Lye Ratio
	li(class="hover:border-[var(--favColor)] border border-transparent text-sm flex flex-col items-start justify-center w-1/4 h-full bg-[var(--dark300)] rounded-lg p-2")
		div(class="flex justify-between items-center")
			span(class="text-orange-400 mr-10") Super Fat
			input(class="pl-2 w-1/3 mr-auto bg-[var(--dark200)] placeholder:text-white text-white py-1 rounded-md scale-90" type="number" v-model="OilStore.headerOptions.superFat")
			span(class="text-orange-400 ml-auto") %
		div(class="flex justify-between items-center")
			span(class="text-fuchsia-400 mr-10") Fragrance
			input(class="pl-2 w-1/3 mr-auto bg-[var(--dark200)] placeholder:text-white text-white py-1 rounded-md scale-90" type="number" v-model="OilStore.headerOptions.fragrance.value")
			span(class="text-fuchsia-400 ml-auto") {{OilStore.headerOptions.fragrance.frWeight}}
</template>
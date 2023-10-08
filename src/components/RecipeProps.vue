<script lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
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
ul(class="overflow-hidden w-full mb-5 py-2 px-4 flex flex-row gap-2 items-start justify-between bg-[var(--dark100)]")
	li(class="hover:border-[var(--favColor)] border border-transparent flex items-center justify-center w-1/4 h-full bg-[var(--dark300)] rounded-lg p-2")
		span(class="text-white") Type of #[span(class="text-[var(--favColor)]") Lye]:
		select(class="ml-2 text-sm text-green-500 h-6 bg-[var(--dark400)] outline-none" id="Units" v-model="STypeLye" @change="SetTypeOfLye()")
			option(value="NaOH") NaOH
			option(value="KOH") KOH
	li(class="hover:border-[var(--favColor)] border border-transparent flex flex-col items-center justify-center w-1/4 h-full bg-[var(--dark300)] rounded-lg p-2")
		span(class="text-white text-sm") Weight of #[span(class="text-[var(--favColor)]") Oils]:
		div(class="flex flex-row items-center justify-center")
			input(type="number" class="w-1/4 bg-[var(--dark200)] placeholder:text-white text-white pl-2 py-1 rounded-md scale-90" v-model="OilStore.weightOils")
			select(class="bg-[var(--dark200)] text-red-500 pl-2 py-1 rounded-md scale-90")
				option(value="Pounds") Pounds
				option(value="Ounces") Ounces
				option(value="Grams" selected) Grams
				option(value="Kilo") Kilo
				option(value="Tons") Tons
	li(class="hover:border-[var(--favColor)] border border-transparent text-sm flex flex-col items-center justify-center w-1/4 h-full bg-[var(--dark300)] rounded-lg p-2")
		span(class="text-[var(--favColor)]") Water #[span(class="text-white") :]
		div(class="flex flex-row items-center justify-center")
			select(class="bg-[var(--dark200)] text-blue-500 pl-2 py-1 rounded-md scale-90")
				option(value="Water as % of Oils") Water as % of Oils
				option(value="Lye Concentration") Lye Concentration
				option(value="Water : Lye Ratio") Water : Lye Ratio
			input(class="w-1/2 bg-[var(--dark200)] placeholder:text-white text-white pl-2 py-1 rounded-md scale-90" type="text" value="38")
	li(class="hover:border-[var(--favColor)] border border-transparent text-sm flex flex-col items-start justify-center w-1/4 h-full bg-[var(--dark300)] rounded-lg p-2")
		div(class="flex justify-between items-center")
			span(class="text-orange-400 mr-auto") Super Fat
			input(class="pl-2 w-1/3 mx-auto bg-[var(--dark200)] placeholder:text-white text-white  py-1 rounded-md scale-90" type="number" value="5")
			span(class="text-orange-400") %
		div(class="flex justify-between items-center")
			span(class="text-fuchsia-400 mr-auto") Fragrance
			input(class="pl-2 w-1/3 mx-auto bg-[var(--dark200)] placeholder:text-white text-white  py-1 rounded-md scale-90" type="number" v-model="OilStore.headerOptions.fragrance")
			span(class="text-fuchsia-400") oz/lb
</template>
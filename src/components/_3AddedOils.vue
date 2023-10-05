<script lang="ts">
import { ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useOilStore } from "../store/index";
export default {
	setup() {
		let weightOfOil;
		const { selectedOilArray } = storeToRefs(useOilStore());

		const RemoveThisOil = (val: Object) => {
			useOilStore().RemoveOils(val);
		}

		const SetOilWeight = (nameOfOil: string) => {
			useOilStore().AddedOilsWeight(nameOfOil, weightOfOil!);
		}

		return {
			weightOfOil,
			RemoveThisOil,
			selectedOilArray,
			SetOilWeight
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
		li(v-for="oil of selectedOilArray" :key="oil.name" class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
			button(type="button" class="text-red-500 mx-1" @click="RemoveThisOil(oil)") -
			span(class="text-sm text-white" :data-NaOHSAP="Math.round((40 / 56.1) * oil['KOH SAP'] * Math.pow(10, 3)) / Math.pow(10, 3)" :data-KOHSAP="oil['KOH SAP']") {{ oil.name }}
			input(class="text-green-500 ml-auto h-6 min-w-[30px] max-w-[60px] bg-[var(--dark300)] outline-none" type="number" maxlength="3" v-model="weightOfOil" @input="SetOilWeight(oil.name)")
			select(class="text-xs text-green-500 h-6 bg-[var(--dark400)] outline-none" id="Units")
				option(value="Gram") Gram
				option(value="Kilo") Kilo
</template>

<script lang="ts">
import { ref } from "vue";
import { useOilStore } from "../store/index";
export default {
	props: ['oil'],
	setup() {
		const weightOfOil = ref(0);
		// console.log(selectedOilArray.value);

		const RemoveThisOil = (val: Object) => {
			useOilStore().RemoveOils(val);
		}

		// weightOfOil
		const SetOilWeight = (nameOfOil: string) => {
			useOilStore().AddedOilsWeight(nameOfOil, weightOfOil.value);
			// console.log(`${nameOfOil}, ${weightOfOil}`); done
		}

		return {
			weightOfOil,
			RemoveThisOil,
			SetOilWeight
		}
	},
}
</script>
<template lang="pug">
li( class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
	button(type="button" class="text-red-500 mx-1" @click="RemoveThisOil(oil)") -
	span(class="text-sm text-white" :data-NaOHSAP="Math.round((40 / 56.1) * oil['KOH SAP'] * Math.pow(10, 3)) / Math.pow(10, 3)" :data-KOHSAP="oil['KOH SAP']") {{ oil.name }}
	input(class="text-green-500 ml-auto h-6 min-w-[30px] max-w-[60px] bg-[var(--dark300)] outline-none" type="number" maxlength="3" v-model="weightOfOil" @input="SetOilWeight(oil.name)")
	select(class="text-xs text-green-500 h-6 bg-[var(--dark400)] outline-none" id="Units")
		option(value="Gram") Gram
		option(value="Kilo") Kilo
</template>

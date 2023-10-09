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
	button(type="button" class="mr-1 w-4 h-4 rounded-sm hover:opacity-50" @click="RemoveThisOil(oil)")
		<svg class="w-full fill-red-500" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M7 6V3C7 2.44772 7.44772 2 8 2H16C16.5523 2 17 2.44772 17 3V6H22V8H20V21C20 21.5523 19.5523 22 19 22H5C4.44772 22 4 21.5523 4 21V8H2V6H7ZM13.4142 13.9997L15.182 12.232L13.7678 10.8178L12 12.5855L10.2322 10.8178L8.81802 12.232L10.5858 13.9997L8.81802 15.7675L10.2322 17.1817L12 15.4139L13.7678 17.1817L15.182 15.7675L13.4142 13.9997ZM9 4V6H15V4H9Z"/></svg>
	span(class="text-sm text-white" :data-NaOHSAP="Math.round((40 / 56.1) * oil['KOH SAP'] * Math.pow(10, 3)) / Math.pow(10, 3)" :data-KOHSAP="oil['KOH SAP']") {{ oil.name }}
	input(class="text-green-500 ml-auto h-6 min-w-[20px] max-w-[50px] bg-[var(--dark300)] outline-none" type="number" maxlength="3" v-model="weightOfOil" @input="SetOilWeight(oil.name)")
	select(class="text-xs text-green-500 h-6 bg-[var(--dark400)] outline-none" id="Units")
		option(value="Gram") g
		option(value="Kilo") K.g
</template>

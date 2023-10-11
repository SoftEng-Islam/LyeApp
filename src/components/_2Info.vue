<script lang="ts">
import { storeToRefs } from 'pinia';
import { useOilStore } from "../store/index";
export default {

	setup() {
		let aryRanges = Array(7);
		aryRanges[0] = "Hardness (in the All column): 29 to 54, higher is harder.";
		aryRanges[1] = "Cleansing (in the All column): 12 to 22, all soap cleanses but the higher numbers more so.";
		aryRanges[2] = "Conditioning (in the All column): 44 to 69, higher offers more skin conditioning.";
		aryRanges[3] = "Bubbly (in the All column): 14 to 46, higher gives a more bubbly lather.";
		aryRanges[4] = "Creamy (in the All column): 16 to 48, higher gives a more creamy lather.";
		aryRanges[5] = "Iodine Value (in the All column): 41 to 70, lower equals harder bar, much above 70 and bar could possibly be too soft.";
		aryRanges[6] = "INS (in the All column): 136 to 165, the commonly accepted ideal is 160.&nbsp; This value gauges the physical qualities of the bar; primarily hardness, with higher being harder.";


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
		li(v-for="val , key in selectedOilProprt")
			span(class="float-left text-white") {{key.charAt(0).toUpperCase() + key.slice(1)}}
			span(class="text-yellow-500") :
			span(class="float-right text-yellow-500") {{ val }}
</template>

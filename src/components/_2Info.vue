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


		const { selectedOilProprt, OilInfo } = storeToRefs(useOilStore());

		function getProperties(id: number, oilWeight: number) {
			if (id === 31) {
				OilInfo.value.Conditioning += 98 * oilWeight;
				OilInfo.value.Creamy += 2 * oilWeight;
				OilInfo.value.Hardness += 2 * oilWeight;
				OilInfo.value.INS += 77 * oilWeight;
				OilInfo.value.Iodine += 92 * oilWeight;
				OilInfo.value.PolyUnsaturated += 100 * oilWeight;
			}
			if (id === 65) {
				OilInfo.value.Hardness += 100 * oilWeight;
				OilInfo.value.Cleansing += 100 * oilWeight;
				OilInfo.value.Bubbly += 100 * oilWeight;
				OilInfo.value.Lauric += 2 * oilWeight;
				OilInfo.value.Myristic += 1 * oilWeight;
				OilInfo.value.INS += 324 * oilWeight;
				OilInfo.value.Iodine += 1 * oilWeight;
				OilInfo.value.Saturated += 90 * oilWeight;
			}
			if (id === 138) {
				OilInfo.value.Hardness += 7 * oilWeight;
				OilInfo.value.Creamy += 6 * oilWeight;
				OilInfo.value.Conditioning += 93 * oilWeight;
				OilInfo.value.Oleic += 14 * oilWeight;
				OilInfo.value.Linoleic += 11 * oilWeight;
				OilInfo.value.Linolenic += 9 * oilWeight;
				OilInfo.value.INS += 67 * oilWeight;
				OilInfo.value.Iodine += 105 * oilWeight;
				OilInfo.value.Saturated += 6 * oilWeight;
				OilInfo.value.MonoUnsaturated += 70 * oilWeight;
				OilInfo.value.PolyUnsaturated += 24 * oilWeight;
			}
			if (id === 40) {
				OilInfo.value.Hardness += 5 * oilWeight
				OilInfo.value.Creamy += 1 * oilWeight
				OilInfo.value.Conditioning += 95 * oilWeight
				OilInfo.value.Oleic += 17 * oilWeight
				OilInfo.value.Linoleic += 13 * oilWeight
				OilInfo.value.Linolenic += 9 * oilWeight
				OilInfo.value.INS += 69 * oilWeight
				OilInfo.value.Iodine += 106 * oilWeight
				OilInfo.value.Saturated += 7 * oilWeight
				OilInfo.value.MonoUnsaturated += 68 * oilWeight
				OilInfo.value.PolyUnsaturated += 25 * oilWeight
			}
			if (id === 5) {
				OilInfo.value.Hardness += 90 * oilWeight
				OilInfo.value.Creamy += 50 * oilWeight
				OilInfo.value.Conditioning += 50 * oilWeight
				OilInfo.value.INS += 84 * oilWeight
				OilInfo.value.Iodine += 10 * oilWeight
			}

			if (id === 140) {
				OilInfo.value.Hardness += 28 * oilWeight
				OilInfo.value.Creamy += 3 * oilWeight
				OilInfo.value.Conditioning += 72 * oilWeight
				OilInfo.value.Myristic += 5 * oilWeight
				OilInfo.value.Palmitic += 19 * oilWeight
				OilInfo.value.Stearic += 2 * oilWeight
				OilInfo.value.Oleic += 23 * oilWeight
				OilInfo.value.Linoleic += 2 * oilWeight
				OilInfo.value.Linolenic += 1 * oilWeight
				OilInfo.value.INS += 69 * oilWeight
				OilInfo.value.Iodine += 106 * oilWeight
				OilInfo.value.Saturated += 28 * oilWeight
				OilInfo.value.MonoUnsaturated += 32 * oilWeight
				OilInfo.value.PolyUnsaturated += 40 * oilWeight
			}

			if (id === 140) {
				OilInfo.value.Hardness += 68 * oilWeight
				OilInfo.value.Creamy += 60 * oilWeight
				OilInfo.value.Conditioning = 60 * oilWeight
				OilInfo.value.INS += 12 * oilWeight
				OilInfo.value.Iodine += 106 * oilWeight
			}
			if (id === 145) {
				OilInfo.value.Hardness += 6 * oilWeight
				OilInfo.value.Creamy += 80 * oilWeight
				OilInfo.value.Conditioning += 94 * oilWeight
				OilInfo.value.Palmitic += 3 * oilWeight
				OilInfo.value.Stearic += 2 * oilWeight
				OilInfo.value.Oleic += 18 * oilWeight
				OilInfo.value.Linoleic += 11 * oilWeight
				OilInfo.value.Linolenic += 4 * oilWeight
				OilInfo.value.INS += 70 * oilWeight
				OilInfo.value.Iodine += 98 * oilWeight
			}
			if (id === 149) {
				OilInfo.value.Hardness += 6 * oilWeight
				OilInfo.value.Cleansing += 2 * oilWeight
				OilInfo.value.Creamy += 4 * oilWeight
				OilInfo.value.Bubbly += 2 * oilWeight
				OilInfo.value.Conditioning += 83 * oilWeight
				OilInfo.value.Lauric += 1 * oilWeight
				OilInfo.value.Myristic += 1 * oilWeight
				OilInfo.value.Palmitic += 2 * oilWeight
				OilInfo.value.Stearic += 2 * oilWeight
				OilInfo.value.Oleic += 44 * oilWeight
				OilInfo.value.Linoleic += 2 * oilWeight
				OilInfo.value.Linolenic += 2 * oilWeight
				OilInfo.value.INS += 107 * oilWeight
				OilInfo.value.Iodine += 68 * oilWeight
				OilInfo.value.Saturated += 54 * oilWeight
				OilInfo.value.MonoUnsaturated += 42 * oilWeight
				OilInfo.value.PolyUnsaturated += 2 * oilWeight
			}
		}

		return {
			OilInfo,
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
	ul(class="bg-[var(--dark400)] mt-4 p-2 rounded-md h-full flex flex-col")
		//- li(v-for="val , key in selectedOilProprt")
		//- 	span(class="float-left text-white") {{key.charAt(0).toUpperCase() + key.slice(1)}}
		//- 	span(class="text-yellow-500") :
		//- 	span(class="float-right text-yellow-500") {{ val }}
		li
			span(class="float-left text-white") Hardness#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilInfo.Hardness}}
		li
			span(class="float-left text-white") Cleansing#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilInfo.Cleansing}}
		li
			span(class="float-left text-white") Condition#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilInfo.Conditioning}}
		li
			span(class="float-left text-white") Bubbly#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilInfo.Bubbly}}
		li
			span(class="float-left text-white") Creamy#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilInfo.Creamy}}
		li
			span(class="float-left text-white") Iodine#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilInfo.Iodine}}
		li
			span(class="float-left text-white") INS#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilInfo.INS}}
		//- Part Two ---------------------------------
		li
			span(class="float-left text-white") Lauric#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilInfo.Lauric}}
		li
			span(class="float-left text-white") Myristic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilInfo.Myristic}}
		li
			span(class="float-left text-white") Palmitic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilInfo.Palmitic}}
		li
			span(class="float-left text-white") Stearic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilInfo.Stearic}}
		li
			span(class="float-left text-white") Ricinoleic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilInfo.Ricinoleic}}
		li
			span(class="float-left text-white") Oleic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilInfo.Oleic}}
		li
			span(class="float-left text-white") Linoleic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilInfo.Linoleic}}
		li
			span(class="float-left text-white") Linolenic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilInfo.Linolenic}}
</template>

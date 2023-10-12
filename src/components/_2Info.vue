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

    let Conditioning,Creamy,Hard,INS,Iodine,PolyUnsaturated;


		function getProperties(id, oilWeight) {

      if(id === 31) {
        Conditioning += 98 * oilWeight;
        Creamy += 2 * oilWeight;
        Hard += 2 * oilWeight;
        INS += 77 * oilWeight;
        Iodine += 92 * oilWeight;
        PolyUnsaturated += 100 * oilWeight;
      }
      if(id === 65) {
        Hard += 100 * oilWeight;
        Cleansing += 100 * oilWeight;
        Bubbly += 100 * oilWeight;
        Lauric += 2 * oilWeight;
        Myristic += 1 * oilWeight;
        INS += 324 * oilWeight;
        Iodine += 1 * oilWeight;
        Saturated += 90 * oilWeight;
      }
      if(id === 138){
        Hard += 7 * oilWeight;
        Creamy += 6 * oilWeight;
        Conditioning += 93 * oilWeight;
        Oleic += 14 * oilWeight;
        Linoleic += 11 * oilWeight;
        Linolenic += 9 * oilWeight;
        INS += 67 * oilWeight;
        Iodine += 105 * oilWeight;
        Saturated += 6 * oilWeight;
        MonoUnsaturated += 70 * oilWeight;
        PolyUnsaturated += 24 * oilWeight;
      }
      if(id === 40) {
        Hard += 5 * oilWeight
        Creamy += 1 * oilWeight
        Conditioning += 95 * oilWeight
        Oleic += 17 * oilWeight
        Linoleic += 13 * oilWeight
        Linolenic += 9 * oilWeight
        INS += 69 * oilWeight
        Iodine += 106 * oilWeight
        Saturated += 7 * oilWeight
        MonoUnsaturated += 68 * oilWeight
        PolyUnsaturated += 25 * oilWeight
      }
      if(id === 5) {
        Hard += 90 * oilWeight
        Creamy += 50 * oilWeight
        Conditioning += 50 * oilWeight
        INS += 84 * oilWeight
        Iodine += 10 * oilWeight
      }

      if(id === 140){
        Hard += 28 * oilWeight
        Creamy += 3 * oilWeight
        Conditioning += 72 * oilWeight
        Myristic += 5 * oilWeight
        Palmitic += 19 * oilWeight
        Stearic += 2 * oilWeight
        Oleic += 23 * oilWeight
        Linoleic += 2 * oilWeight
        Linolenic += 1 * oilWeight
        INS += 69 * oilWeight
        Iodine += 106 * oilWeight
        Saturated += 28 * oilWeight
        MonoUnsaturated += 32 * oilWeight
        PolyUnsaturated += 40 * oilWeight
      }

      if(id === 140){
        Hard += 68 * oilWeight
        Creamy += 60 * oilWeight
        Conditioning = 60 * oilWeight
        INS += 12 * oilWeight
        Iodine += 106 * oilWeight
      }
      if(id === 145) {
          Hard += 6 * oilWeight
          Creamy += 80 * oilWeight
          Conditioning += 94 * oilWeight
          Palmitic += 3 * oilWeight
          Stearic += 2 * oilWeight
          Oleic += 18 * oilWeight
          Linoleic += 11 * oilWeight
          Linolenic += 4 * oilWeight
          INS += 70 * oilWeight
          Iodine += 98 * oilWeight
      }
      if(id === 149) {
        Hard += 6 * oilWeight
        Cleansing += 2 * oilWeight
        Creamy += 4 * oilWeight
        Bubbly += 2 * oilWeight
        Conditioning += 83 * oilWeight
        Lauric += 1 * oilWeight
        Myristic += 1 * oilWeight
        Palmitic += 2 * oilWeight
        Stearic += 2 * oilWeight
        Oleic += 44 * oilWeight
        Linoleic += 2 * oilWeight
        Linolenic += 2 * oilWeight
        INS += 107 * oilWeight
        Iodine += 68 * oilWeight
        Saturated += 54 * oilWeight
        MonoUnsaturated += 42 * oilWeight
        PolyUnsaturated += 2 * oilWeight
      }
}

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
		//- li(v-for="val , key in selectedOilProprt")
		//- 	span(class="float-left text-white") {{key.charAt(0).toUpperCase() + key.slice(1)}}
		//- 	span(class="text-yellow-500") :
		//- 	span(class="float-right text-yellow-500") {{ val }}
		li
			span(class="float-left text-white") Hardness#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{Hardness}}
		li
			span(class="float-left text-white") Cleansing#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{Cleansing}}
		li
			span(class="float-left text-white") Condition#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{Condition}}
		li
			span(class="float-left text-white") Bubbly#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{Bubbly}}
		li
			span(class="float-left text-white") Creamy#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{Creamy}}
		li
			span(class="float-left text-white") Iodine#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{Iodine}}
		li
			span(class="float-left text-white") INS#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{INS}}
		//- Part Two
		li
			span(class="float-left text-white") Lauric#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{Lauric}}
		li
			span(class="float-left text-white") Myristic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{Myristic}}
		li
			span(class="float-left text-white") Palmitic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{Palmitic}}
		li
			span(class="float-left text-white") Stearic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{Stearic}}
		li
			span(class="float-left text-white") Ricinoleic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{Ricinoleic}}
		li
			span(class="float-left text-white") Oleic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{Oleic}}
		li
			span(class="float-left text-white") Linoleic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{Linoleic}}
		li
			span(class="float-left text-white") Linolenic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{Linolenic}}
</template>

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


		function getProperties(b, a) {
  var c
  c = parseInt(selectedOilProprt.value.id, 10)
  31 == c ||
  65 == c ||
  138 == c ||
  40 == c ||
  5 == c ||
  140 == c ||
  142 == c ||
  145 == c ||
  149 == c ||
  101 == c
    ? 31 === c
      ? ((Conditioning += 98 * a),
        (Creamy += 2 * a),
        (Hard += 2 * a),
        (INS += 77 * a),
        (Iodine += 92 * a),
        (PolyUnsaturated += 100 * a))
      : 65 === c
      ? ((Hard += 100 * a),
        (Cleansing += 100 * a),
        (Bubbly += 100 * a),
        (Lauric += 2 * a),
        (Myristic += 1 * a),
        (INS += 324 * a),
        (Iodine += 1 * a),
        (Saturated += 90 * a))
      : 138 == c
      ? ((Hard += 7 * a),
        (Creamy += 6 * a),
        (Conditioning += 93 * a),
        (Oleic += 14 * a),
        (Linoleic += 11 * a),
        (Linolenic += 9 * a),
        (INS += 67 * a),
        (Iodine += 105 * a),
        (Saturated += 6 * a),
        (MonoUnsaturated += 70 * a),
        (PolyUnsaturated += 24 * a))
      : 40 === c
      ? ((Hard += 5 * a),
        (Creamy += 1 * a),
        (Conditioning += 95 * a),
        (Oleic += 17 * a),
        (Linoleic += 13 * a),
        (Linolenic += 9 * a),
        (INS += 69 * a),
        (Iodine += 106 * a),
        (Saturated += 7 * a),
        (MonoUnsaturated += 68 * a),
        (PolyUnsaturated += 25 * a))
      : 5 === c
      ? ((Hard += 90 * a),
        (Creamy += 50 * a),
        (Conditioning += 50 * a),
        (INS += 84 * a),
        (Iodine += 10 * a))
      : 140 === c
      ? ((Hard += 28 * a),
        (Creamy += 3 * a),
        (Conditioning += 72 * a),
        (Myristic += 5 * a),
        (Palmitic += 19 * a),
        (Stearic += 2 * a),
        (Oleic += 23 * a),
        (Linoleic += 2 * a),
        (Linolenic += 1 * a),
        (INS += 69 * a),
        (Iodine += 106 * a),
        (Saturated += 28 * a),
        (MonoUnsaturated += 32 * a),
        (PolyUnsaturated += 40 * a))
      : 142 === c
      ? ((Hard += 68 * a),
        (Creamy += 60 * a),
        (Conditioning = 60 * a),
        (INS += 12 * a),
        (Iodine += 106 * a))
      : 145 === c
      ? ((Hard += 6 * a),
        (Creamy += 80 * a),
        (Conditioning += 94 * a),
        (Palmitic += 3 * a),
        (Stearic += 2 * a),
        (Oleic += 18 * a),
        (Linoleic += 11 * a),
        (Linolenic += 4 * a),
        (INS += 70 * a),
        (Iodine += 98 * a))
      : 149 == c
      ? ((Hard += 6 * a),
        (Cleansing += 2 * a),
        (Creamy += 4 * a),
        (Bubbly += 2 * a),
        (Conditioning += 83 * a),
        (Lauric += 1 * a),
        (Myristic += 1 * a),
        (Palmitic += 2 * a),
        (Stearic += 2 * a),
        (Oleic += 44 * a),
        (Linoleic += 2 * a),
        (Linolenic += 2 * a),
        (INS += 107 * a),
        (Iodine += 68 * a),
        (Saturated += 54 * a),
        (MonoUnsaturated += 42 * a),
        (PolyUnsaturated += 2 * a));

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

<script lang="ts">
import { storeToRefs } from 'pinia';
import { useOilStore } from "../store/index";
import { setDefaultProps, directive } from 'vue-tippy';
export default {
	directives: {
		tippy: directive,
	},
	setup() {

		const { OilProperties } = storeToRefs(useOilStore());

		let aryRanges: any[] = Array(7);
		aryRanges[0] = "Hardness (in the All column): 29 to 54, higher is harder.";
		aryRanges[1] = "Cleansing (in the All column): 12 to 22, all soap cleanses but the higher numbers more so.";
		aryRanges[2] = "Conditioning (in the All column): 44 to 69, higher offers more skin conditioning.";
		aryRanges[3] = "Bubbly (in the All column): 14 to 46, higher gives a more bubbly lather.";
		aryRanges[4] = "Creamy (in the All column): 16 to 48, higher gives a more creamy lather.";
		aryRanges[5] = "Iodine Value (in the All column): 41 to 70, lower equals harder bar, much above 70 and bar could possibly be too soft.";
		aryRanges[6] = "INS (in the All column): 136 to 165, the commonly accepted ideal is 160.&nbsp; This value gauges the physical qualities of the bar; primarily hardness, with higher being harder.";

		let aryFADetail = Array(8),
			tailFADetail = "<br /><br />Click/Tap on green <span style='font-weight:700;font-size:14px;font-family:Courier'>i</span> button to get more detail from Wikipedia.";
		aryFADetail[0] = "<b>Lauric Acid</b><br /><br />&bull; 12:0<br />&bull; Saturated<br />&bull; dodecanoic acid. &nbsp;&nbsp;(doe-dec-a-no-ik)";
		aryFADetail[1] = "<b>Myristic Acid</b><br /><br />&bull; 14:0<br />&bull; Saturated<br />&bull; tetradecanoic acid. &nbsp;&nbsp;(te-tra-dec-a-no-ik)";
		aryFADetail[2] = "<b>Palmitic Acid</b><br /><br />&bull; 16:0<br />&bull; Saturated<br />&bull; hexadecanoic acid. &nbsp;&nbsp;(hex-a-dec-a-no-ik)";
		aryFADetail[3] = "<b>Stearic Acid</b><br /><br />&bull; 18:0<br />&bull; Saturated<br />&bull; octadecanoic acid. &nbsp;&nbsp;(oc-ta-dec-a-no-ik)";
		aryFADetail[4] = "<b>Ricinoleic Acid</b><br /><br />&bull; 18:1<br />&bull; MonoUnsaturated<br />&bull; 12-hydroxy-9-cis-octadecenoic acid.<br />(hy-drox-y, sis, oc-ta-dec-e-no-ik)";
		aryFADetail[5] = "<b>Oleic Acid</b><br /><br />&bull; 18:1<br />&bull; MonoUnsaturated<br />&bull; cis-9-octadecenoic acid. &nbsp;&nbsp;(sis, oc-ta-dec-e-no-ik)";
		aryFADetail[6] = "<b>Linoleic Acid</b><br /><br />&bull; 18:2<br />&bull; PolyUnsaturated<br />&bull; cis, cis-9,12-octadecadienoic acid.<br /> (sis, oc-ta-dec-a-di-e-no-ic)";
		aryFADetail[7] = "<b>Linolenic Acid</b><br /><br />&bull; 18:3<br />&bull; PolyUnsaturated<br />&bull; cis, cis,cis-9,12,15-octadecatrienoic acid.<br />(sis, oc-ta-dec-a-tri-e-no-ic)";

		return {
			aryRanges,
			tailFADetail,
			aryFADetail,
			OilProperties
		}
	}
};
</script>
<template lang="pug">
//- Info Section
div(class="lyeWidget flex flex-col min-h-[200px] border border-transparent hover:border-yellow-500")
	div(class="Head bg-yellow-500 p-2 rounded-md")
		span(class="text-black font-bold ") {{ OilProperties.Name }}.
	ul(class="bg-[var(--dark400)] mt-4 p-2 rounded-md h-full flex flex-col")
		//- {{key.charAt(0).toUpperCase() + key.slice(1)}}
		li
			span(class="float-left text-white flex items-center")
				<button class="w-4 h-4 rounded-full flex items-center justify-center bg-yellow-500 text-sm mr-2 text-black" v-tippy="{ content: aryRanges[0] }">!</button>
				| Hardness#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilProperties.Hardness}}
		li
			span(class="float-left text-white flex items-center")
				<button class="w-4 h-4 rounded-full flex items-center justify-center bg-yellow-500 text-sm mr-2 text-black" v-tippy="{ content: aryRanges[1] }">!</button>
				| Cleansing#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilProperties.Cleansing}}
		li
			span(class="float-left text-white flex items-center")
				<button class="w-4 h-4 rounded-full flex items-center justify-center bg-yellow-500 text-sm mr-2 text-black" v-tippy="{ content: aryRanges[2] }">!</button>
				| Condition#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilProperties.Condition}}
		li
			span(class="float-left text-white flex items-center")
				<button class="w-4 h-4 rounded-full flex items-center justify-center bg-yellow-500 text-sm mr-2 text-black" v-tippy="{ content: aryRanges[3] }">!</button>
				| Bubbly#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilProperties.Bubbly}}
		li
			span(class="float-left text-white flex items-center")
				<button class="w-4 h-4 rounded-full flex items-center justify-center bg-yellow-500 text-sm mr-2 text-black" v-tippy="{ content: aryRanges[4] }">!</button>
				| Creamy#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilProperties.Creamy}}
		li
			span(class="float-left text-white flex items-center")
				<button class="w-4 h-4 rounded-full flex items-center justify-center bg-yellow-500 text-sm mr-2 text-black" v-tippy="{ content: aryRanges[5] }">!</button>
				| Iodine#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilProperties.Iodine}}
		li
			span(class="float-left text-white flex items-center")
				<button class="w-4 h-4 rounded-full flex items-center justify-center bg-yellow-500 text-sm mr-2 text-black" v-tippy="{ content: aryRanges[6] }">!</button>
				| INS#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilProperties.INS}}
		//- -------------------------------------------
		li(class="p-4")
			hr(class="opacity-50")
		//- -------------------------------------------
		li
			span(class="float-left text-white flex items-center")
				<button class="w-4 h-4 rounded-full flex items-center justify-center bg-yellow-500 text-sm mr-2 text-black" v-tippy="{ content: aryFADetail[0] }">!</button>
				| Lauric#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilProperties.Lauric}}
		li
			span(class="float-left text-white flex items-center")
				<button class="w-4 h-4 rounded-full flex items-center justify-center bg-yellow-500 text-sm mr-2 text-black" v-tippy="{ content: aryFADetail[1] }">!</button>
				| Myristic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilProperties.Myristic}}
		li
			span(class="float-left text-white flex items-center")
				<button class="w-4 h-4 rounded-full flex items-center justify-center bg-yellow-500 text-sm mr-2 text-black" v-tippy="{ content: aryFADetail[2] }">!</button>
				| Palmitic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilProperties.Palmitic}}
		li
			span(class="float-left text-white flex items-center")
				<button class="w-4 h-4 rounded-full flex items-center justify-center bg-yellow-500 text-sm mr-2 text-black" v-tippy="{ content: aryFADetail[3] }">!</button>
				| Stearic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilProperties.Stearic}}
		li
			span(class="float-left text-white flex items-center")
				<button class="w-4 h-4 rounded-full flex items-center justify-center bg-yellow-500 text-sm mr-2 text-black" v-tippy="{ content: aryFADetail[4] }">!</button>
				| Ricinoleic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilProperties.Ricinoleic}}
		li
			span(class="float-left text-white flex items-center")
				<button class="w-4 h-4 rounded-full flex items-center justify-center bg-yellow-500 text-sm mr-2 text-black" v-tippy="{ content: aryFADetail[5] }">!</button>
				| Oleic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilProperties.Oleic}}
		li
			span(class="float-left text-white flex items-center")
				<button class="w-4 h-4 rounded-full flex items-center justify-center bg-yellow-500 text-sm mr-2 text-black" v-tippy="{ content: aryFADetail[6] }">!</button>
				| Linoleic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilProperties.Linoleic}}
		li
			span(class="float-left text-white flex items-center")
				<button class="w-4 h-4 rounded-full flex items-center justify-center bg-yellow-500 text-sm mr-2 text-black" v-tippy="{ content: aryFADetail[7] }">!</button>
				| Linolenic#[span(class="text-yellow-500") :]
			span(class="float-right text-yellow-500") {{OilProperties.Linolenic}}
</template>

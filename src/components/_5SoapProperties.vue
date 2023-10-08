<script lang="ts">
import { storeToRefs } from 'pinia';
import { useOilStore } from "../store/index";
export default {
	setup() {
		const { soapProperties } = storeToRefs(useOilStore());
		return {
			soapProperties
		}
	}
}
</script>
<template lang="pug">
div(class="lyeWidget flex flex-col min-h-[200px] max-h-[600px] border border-transparent hover:border-pink-500")
	div(class="Head bg-pink-500 p-2 rounded-md")
		span(class="text-black font-bold ") Soap Properties.
	perfect-scrollbar
		ul(class="bg-[var(--dark400)] mt-4 p-2 rounded-md overflow-hidden")
			li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
				span(class="text-sm text-white") Hardness
				span(class="text-pink-500 ml-auto") {{soapProperties.Hardness}}
			li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
				span(class="text-sm text-white") Cleansing
				span(class="text-pink-500 ml-auto") {{soapProperties.Cleansing}}
			li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
				span(class="text-sm text-white") Conditioning
				span(class="text-pink-500 ml-auto") {{soapProperties.Conditioning}}
			li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
				span(class="text-sm text-white") Bubbly
				span(class="text-pink-500 ml-auto") {{soapProperties.Bubbly}}
			li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
				span(class="text-sm text-white") Creamy
				span(class="text-pink-500 ml-auto") {{soapProperties.Creamy}}
			li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
				span(class="text-sm text-white") Iodine
				span(class="text-pink-500 ml-auto") {{soapProperties.Iodine}}
			li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
				span(class="text-sm text-white") INS
				span(class="text-pink-500 ml-auto") {{soapProperties.INS}}
			li(class="p-4")
				hr(class="opacity-50")
			li(class="flex overflow-hidden py-2")
				span(class="text-sm text-white") Lauric
				span(class="text-pink-500 ml-auto") {{soapProperties.Lauric}}
			li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
				span(class="text-sm text-white") Myristic
				span(class="text-pink-500 ml-auto") {{soapProperties.Myristic}}
			li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
				span(class="text-sm text-white") Palmitic
				span(class="text-pink-500 ml-auto") {{soapProperties.Palmitic}}
			li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
				span(class="text-sm text-white") Stearic
				span(class="text-pink-500 ml-auto") {{soapProperties.Stearic}}
			li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
				span(class="text-sm text-white") Ricinoleic
				span(class="text-pink-500 ml-auto") {{soapProperties.Ricinoleic}}
			li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
				span(class="text-sm text-white") Oleic
				span(class="text-pink-500 ml-auto") {{soapProperties.Oleic}}
			li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
				span(class="text-sm text-white") Linoleic
				span(class="text-pink-500 ml-auto") {{soapProperties.Linoleic}}
			li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
				span(class="text-sm text-white") Linolenic
				span(class="text-pink-500 ml-auto") {{soapProperties.Linolenic}}
</template>

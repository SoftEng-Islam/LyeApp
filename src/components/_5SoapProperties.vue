<script lang="ts">
import { storeToRefs } from 'pinia';
import { useOilStore } from "../store/index";
export default {
	setup() {
		const { soapProperties } = storeToRefs(useOilStore());





		function getProperties(b: number, a: number): void {
		let id: number;
		id = parseInt(aryAllOils[b].Id, 10);
    if (
        31 === c ||
        65 === c ||
        138 === c ||
        40 === c ||
        5 === c ||
        140 === c ||
        142 === c ||
        145 === c ||
        149 === c ||
        101 === c
    ) {
        if (31 === c) {
            Conditioning += 98 * a;
            Creamy += 2 * a;
            Hard += 2 * a;
            INS += 77 * a;
            Iodine += 92 * a;
            PolyUnsaturated += 100 * a;
        } else if (65 === c) {
            Hard += 100 * a;
            Cleansing += 100 * a;
            Bubbly += 100 * a;
            Lauric += 2 * a;
            Myristic += 1 * a;
            INS += 324 * a;
            Iodine += 1 * a;
            Saturated += 90 * a;
        } else if (138 === c) {
            Hard += 7 * a;
            Creamy += 6 * a;
            Conditioning += 93 * a;
            Oleic += 14 * a;
            Linoleic += 11 * a;
            Linolenic += 9 * a;
            INS += 67 * a;
            Iodine += 105 * a;
            Saturated += 6 * a;
            MonoUnsaturated += 70 * a;
            PolyUnsaturated += 24 * a;
        } else if (40 === c) {
            Hard += 5 * a;
            Creamy += 1 * a;
            Conditioning += 95 * a;
            Oleic += 17 * a;
            Linoleic += 13 * a;
            Linolenic += 9 * a;
            INS += 69 * a;
            Iodine += 106 * a;
            Saturated += 7 * a;
            MonoUnsaturated += 68 * a;
            PolyUnsaturated += 25 * a;
        } else if (5 === c) {
            Hard += 90 * a;
            Creamy += 50 * a;
            Conditioning += 50 * a;
            INS += 84 * a;
            Iodine += 10 * a;
        } else if (140 === c) {
            Hard += 28 * a;
            Creamy += 3 * a;
            Conditioning += 72 * a;
            Myristic += 5 * a;
            Palmitic += 19 * a;
            Stearic += 2 * a;
            Oleic += 23 * a;
            Linoleic += 2 * a;
            Linolenic += 1 * a;
            INS += 69 * a;
            Iodine += 106 * a;
            Saturated += 28 * a;
            MonoUnsaturated += 32 * a;
            PolyUnsaturated += 40 * a;
        } else if (142 === c) {
            Hard += 68 * a;
            Creamy += 60 * a;
            Conditioning = 60 * a;
            INS += 12 * a;
            Iodine += 106 * a;
        } else if (145 === c) {
            Hard += 6 * a;
            Creamy += 80 * a;
            Conditioning += 94 * a;
            Palmitic += 3 * a;
            Stearic += 2 * a;
            Oleic += 18 * a;
            Linoleic += 11 * a;
            Linolenic += 4 * a;
            INS += 70 * a;
            Iodine += 98 * a;
        } else if (149 === c) {
            Hard += 6 * a;
            Cleansing += 2 * a;
            Creamy += 4 * a;
            Bubbly += 2 * a;
            Conditioning += 83 * a;
            Lauric += 1 * a;
            Myristic += 1 * a;
            Palmitic += 2 * a;
            Stearic += 2 * a;
            Oleic += 44 * a;
            Linoleic += 2 * a;
            Linolenic += 2 * a;
            INS += 107 * a;
            Iodine += 68 * a;
            Saturated += 54 * a;
            MonoUnsaturated += 42 * a;
            PolyUnsaturated += 2 * a;
        } else if (101 === c) {
            Hard += 54 * a;
            Creamy += 43 * a;
            Conditioning += 44 * a;
            Palmitic += 8 * a;
            Stearic += 35 * a;
            Oleic += 42 * a;
            Linoleic += 2 * a;
            INS += 153 * a;
            Iodine += 39 * a;
            Saturated += 54 * a;
            MonoUnsaturated += 42 * a;
            PolyUnsaturated += 2 * a;
        }
    } else {
        c = parseInt(aryAllOils[b].lauric, 10);
        if (0 < c) {
            Hard += c * a;
            Cleansing += c * a;
            Bubbly += c * a;
            Lauric += c * a;
            Saturated += c * a;
        }
        c = parseInt(aryAllOils[b].myristic, 10);
        if (0 < c) {
            Hard += c * a;
            Cleansing += c * a;
            Bubbly += c * a;
            Myristic += c * a;
            Saturated += c * a;
        }
        c = parseInt(aryAllOils[b].palmitic, 10);
        if (0 < c) {
            Hard += c * a;
            Creamy += c * a;
            Palmitic += c * a;
            Saturated += c * a;
        }
        c = parseInt(aryAllOils[b].stearic, 10);
        if (0 < c) {
            Hard += c * a;
            Creamy += c * a;
            Stearic += c * a;
            Saturated += c * a;
        }
        c = parseInt(aryAllOils[b].ricinoleic, 10);
        if (0 < c) {
            Conditioning += c * a;
            Bubbly += c * a;
            Creamy += c * a;
            Ricinoleic += c * a;
            MonoUnsaturated += c * a;
        }
        c = parseInt(aryAllOils[b].oleic, 10);
        if (0 < c) {
            Conditioning += c * a;
            Oleic += c * a;
            MonoUnsaturated += c * a;
        }
        c = parseInt(aryAllOils[b].linoleic, 10);
        if (0 < c) {
            Conditioning += c * a;
            Linoleic += c * a;
            PolyUnsaturated += c * a;
        }
        c = parseInt(aryAllOils[b].linolenic, 10);
        if (0 < c) {
            Conditioning += c * a;
            Linolenic += c * a;
            PolyUnsaturated += c * a;
        }
        INS += aryAllOils[b].ins * a;
        Iodine += aryAllOils[b].iodine * a;
    }
}








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

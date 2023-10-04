<script lang="ts">
import { useOilStore } from "../store/index";
export default {
	props: {
		OilSelected: {
			type: [Object],
			required: true,
		},
	},
	setup() {
		const uOilStore = useOilStore();
		const handleRemove = (val: Object) => {
			uOilStore.RemoveOils(val);
		}
		return {
			handleRemove,
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
		li(v-for="oil in OilSelected" class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
			button(type="button" class="text-red-500 mx-1" @click="handleRemove(oil)") -
			span(class="text-sm text-white") {{ oil.name }}
			input(class="text-green-500 ml-auto h-6 min-w-[30px] max-w-[60px] bg-[var(--dark300)] outline-none" type="number" value="0" maxlength="3")
			select(class="text-xs text-green-500 h-6 bg-[var(--dark400)] outline-none" id="Units")
				option(value="Gram") Gram
				option(value="Kilo") Kilo
</template>

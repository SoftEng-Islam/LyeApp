<script lang="ts">
import { ref } from "vue";
import { storeToRefs } from 'pinia';
import { useOilStore } from "../store/index";
import AddedOil from "./AddedOil.vue";
export default {
	components: {
		AddedOil
	},
	setup() {

		const { selectedOilArray } = storeToRefs(useOilStore());
		const RemoveThisOil = (val: Object) => {
			useOilStore().RemoveOils(val);
		}

		return {
			selectedOilArray,
			RemoveThisOil,
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
		added-oil(v-for="oil of selectedOilArray" :oil="oil")
</template>

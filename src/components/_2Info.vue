<script lang="ts">
export default {
	props: {
		OilProperties: {
			type: Object,
			required: true,
		},
	}
};
</script>
<template lang="pug">
div(class="lyeWidget flex flex-col min-h-[200px] ")
	div(class="Head bg-yellow-500 p-2 rounded-md")
		span(class="text-black font-bold ") {{ OilProperties.name || 'Oil' }} Properties.
	ul(class="bg-[var(--dark400)] mt-4 p-2 rounded-md h-full")
		li(v-for="val , key in OilProperties") #[span(class="float-left text-white") {{key}} ] : #[span(class="float-right text-yellow-500") {{ val }}]

</template>

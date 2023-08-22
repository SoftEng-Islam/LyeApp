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
div(class="flex flex-col")
	div(class="Head bg-emerald-500 p-2 rounded-md")
		span(class="text-black font-bold ") {{ OilProperties.name }} Properties
	ul(class="bg-gray-500 mt-4 p-2 rounded-md")
		li(v-for="val , key in OilProperties") {{key}} : {{ val }}

</template>

<script lang="ts">
	export default {

	}
</script>
<template lang="pug">
ul(class="h-20 w-full mb-5 py-2 px-4 flex flex-row items-center justify-between bg-[var(--dark100)]")
	li(class="")
		span Type of Lye
		select(class="text-sm text-green-500 h-6 bg-[var(--dark400)] outline-none" id="Units")
			option(value="Gram") NaOH
			option(value="Kilo") KOH
	li(class="")
		span Weight of Oils

	li(class="") Hi
	li(class="")
		div(class="")
			span(class="") Super Fat
			input(class="" value="5")
			span(class="") %
		div(class="")
			span(class="") Fragrance
			input(class="")
		div(class="")
			span

</template>
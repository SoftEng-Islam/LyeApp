<script lang="ts">
	export default {

	}
</script>
<template lang="pug">
ul(class="overflow-hidden w-full mb-5 py-2 px-4 flex flex-row items-start justify-between bg-[var(--dark100)]")
	li(class="flex flex-col")
		span(class="text-white") Type of #[span(class="text-[var(--favColor)]") Lye ]:
		select(class="text-sm text-green-500 h-6 bg-[var(--dark400)] outline-none" id="Units")
			option(value="Gram") NaOH
			option(value="Kilo") KOH
	li(class="flex flex-col")
		span(class="text-white") Weight of #[span(class="text-[var(--favColor)]") Oils ]:
		div(class="flex flex-row")
			input(type="number" class="w-1/2 bg-[var(--dark200)] placeholder:text-white text-white pl-2 py-1 rounded-md scale-90" value="100")
			select(class="bg-[var(--dark200)] text-red-500 pl-2 py-1 rounded-md scale-90")
				option(value="Pounds") Pounds
				option(value="Ounces") Ounces
				option(value="Grams") Grams
	li(class="flex flex-col")
		span(class="text-[var(--favColor)]") Water #[span(class="text-white") :]
		div(class="flex flex-row")
			select(class="bg-[var(--dark200)] text-blue-500 pl-2 py-1 rounded-md scale-90")
				option(value="Water as % of Oils") Water as % of Oils
				option(value="Lye Concentration") Lye Concentration
				option(value="Water : Lye Ratio") Water : Lye Ratio
			input(class="w-1/2 bg-[var(--dark200)] placeholder:text-white text-white pl-2 py-1 rounded-md scale-90" type="text" value="38")
	li(class="flex flex-row")
		div(class="flex flex-col text-white")
			span(class="") Super Fat
			span(class="") Fragrance
			span(class="") Amount
		div(class="flex flex-col")
			input(class="w-1/2 bg-[var(--dark200)] placeholder:text-white text-white pl-2 py-1 rounded-md scale-90" value="5")
			input(class="w-1/2 bg-[var(--dark200)] placeholder:text-white text-white pl-2 py-1 rounded-md scale-90")
			input(class="w-1/2 bg-[var(--dark200)] placeholder:text-white text-white pl-2 py-1 rounded-md scale-90")
		div(class="flex flex-col text-pink-500")
			span(class="") %
			span(class="") oz/lb

</template>
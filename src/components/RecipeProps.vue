<script lang="ts">
	export default {

	}
</script>
<template lang="pug">
ul(class="overflow-hidden h-20 w-full mb-5 py-2 px-4 flex flex-row items-center justify-between bg-[var(--dark100)]")
	li(class="flex flex-col")
		span(class="text-white") Type of #[span(class="text-[var(--favColor)]") Lye ]:
		select(class="text-sm text-green-500 h-6 bg-[var(--dark400)] outline-none" id="Units")
			option(value="Gram") NaOH
			option(value="Kilo") KOH
	li(class="flex flex-col items-start")
		span(class="text-white") Weight of #[span(class="text-[var(--favColor)]") Oils ]:
		div(class="flex flex-row")
			select(class="bg-[var(--dark200)] text-red-500 pl-2 py-1 rounded-md scale-90")
				option(value="Pounds") Pounds
				option(value="Ounces") Ounces
				option(value="Grams") Grams
			input(type="number" class="inline bg-[var(--dark200)] placeholder:text-white text-white pl-2 py-1 rounded-md scale-90" value="100")
	li(class="flex flex-col")
		span(class="text-[var(--favColor)]") Water #[span(class="text-white") :]
		div(class="flex flex-row")
			select(class="bg-[var(--dark200)] text-blue-500 pl-2 py-1 rounded-md scale-90")
				option(value="Water as % of Oils") Water as % of Oils
				option(value="Lye Concentration") Lye Concentration
				option(value="Water : Lye Ratio") Water : Lye Ratio
			input(class="bg-[var(--dark200)] placeholder:text-white text-white pl-2 py-1 rounded-md scale-90" type="text" value="38")
	li(class="flex flex-col")
		span(class="") Addons
		div(class="")
			span(class="") Super Fat
			input(class="bg-[var(--dark200)] placeholder:text-white text-white pl-2 py-1 rounded-md scale-90" value="5")
			span(class="") %
		div(class="")
			span(class="") Fragrance
			input(class="bg-[var(--dark200)] placeholder:text-white text-white pl-2 py-1 rounded-md scale-90")
			span(class="") oz/lb
		div(class="")
			span Amount
			input(class="bg-[var(--dark200)] placeholder:text-white text-white pl-2 py-1 rounded-md scale-90")

</template>
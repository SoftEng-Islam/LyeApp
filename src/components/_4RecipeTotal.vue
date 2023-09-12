<script lang="ts">
</script>
<template lang="pug">
div(class="lyeWidget flex flex-col min-h-[200px] ")
	div(class="Head bg-blue-500 p-2 rounded-md")
		span(class="text-black font-bold ") Recipe Total.
	ul(class="bg-[var(--dark400)] mt-4 p-2 rounded-md h-full")
		li(class="flex overflow-hidden py-2 first-of-type:border-none border-t border-t-[var(--dark200)]")
			span(class="text-sm text-white") Water
			span(class="text-blue-500 ml-auto") 100 #[span(class="text-gray-500") GRAM]
</template>

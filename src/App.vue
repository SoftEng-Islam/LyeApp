<script setup lang="ts">
import AppHeader from "./components/AppHeader.vue";
import OilsList from "./components/OilsList.vue";
import OilProperties from "./components/OilProperties.vue";
import AddedOils from "./components/AddedOils.vue";
import TotalRecipe from "./components/TotalRecipe.vue";
import SoapProperties from "./components/SoapProperties.vue";
import RecipeOptions from "./components/RecipeOptions.vue";
</script>

<template lang="pug">
<AppHeader/>
div(class="w-full h-full flex flex-wrap items-start dark:bg-[var(--dark400)]")
	<RecipeOptions/>
	PerfectScrollbar(class="h-[90%] w-full flex items-center justify-center")
		div(class="h-full w-full flex flex-row gap-4 flex-wrap justify-center items-stretch [&_.lyeWidget]:w-72 [&_.lyeWidget]:p-2 [&_.lyeWidget]:rounded-lg [&_.lyeWidget]:bg-[var(--dark100)]")
			<OilsList/>
			<OilProperties/>
			<AddedOils/>
			<TotalRecipe/>
			<SoapProperties/>
</template>

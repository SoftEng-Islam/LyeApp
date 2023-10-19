<script lang="ts">
import { ref } from 'vue';
import { useOilStore } from "../store/index";
export default {
	data() {
		return {
			enteredValue: <string>"",
			show: "hidden",
			clkOil: <object>{},
			count: ref(0)
		};
	},
	setup() {
		let searchForOil = ref("");
		const { Oils } = useOilStore();
		function filteredOils() {
			return Oils.filter((oil: any) => oil.Name.toLowerCase().includes(searchForOil.value.toLowerCase()));;
		};

		const ClickdOnOil = (val: object) => {
			useOilStore().ClickedOil(val);
			// console.log(val)
		};
		const ShowTheInfo = (val: object) => {
			useOilStore().showTheInfo(val);
		}

		return {
			searchForOil,
			filteredOils,
			ClickdOnOil,
			ShowTheInfo
		}
	}
}
</script>
<template lang="pug">
//- Oils list Section
div(class="duration-200 z-10 relative h-full bg-[var(--dark400)]  p-3 w-1/5 border-r-2 border-solid border-[var(--favColor)]" id="notes")
	div(class="w-full h-full flex flex-col items-center")
		//- Search
		div(class="relative w-full p-3 m-2 mb-5 flex items-center justify-center")
			div(class="z-10 w-full pl-4 h-9 flex items-center justify-center rounded-xl bg-[var(--dark200)]")
				input(v-on:focusin="show = ''" v-on:focusout="show = 'hidden'" v-model="searchForOil" class="h-7 w-4/5 outline-none text-white placeholder:focus:opacity-40 bg-transparent" type="text" placeholder="Search...")
				button(class="outline-none")
					<svg class="h-7 fill-white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 128 128" width="64px" height="64px"><path d="M79.2,25.5L79.2,25.5c-14.8-14.8-38.9-14.8-53.7,0c-14.8,14.8-14.8,38.9,0,53.7c7.4,7.4,17.1,11.1,26.9,11.1s19.5-3.7,26.9-11.1C94,64.4,94,40.3,79.2,25.5z M75,75c-12.5,12.5-32.8,12.5-45.3,0c-12.5-12.5-12.5-32.8,0-45.3c6.2-6.2,14.4-9.4,22.6-9.4c8.2,0,16.4,3.1,22.6,9.4C87.4,42.2,87.4,62.5,75,75z"/><path d="M104.7,113.7c2.3,0,4.6-0.9,6.4-2.6l0,0c3.5-3.5,3.5-9.2,0-12.7L98.3,85.6c-1.7-1.7-4-2.6-6.4-2.6c-1.4,0-2.7,0.3-3.9,0.9l-2.5-2.5c-1.2-1.2-3.1-1.2-4.2,0c-1.2,1.2-1.2,3.1,0,4.2l2.5,2.5c-0.6,1.2-0.9,2.5-0.9,3.9c0,2.4,0.9,4.7,2.6,6.4L98.3,111C100.1,112.8,102.4,113.7,104.7,113.7z M88.9,91.9c0-0.8,0.3-1.6,0.9-2.1c0.6-0.6,1.3-0.9,2.1-0.9s1.6,0.3,2.1,0.9l12.7,12.7c1.2,1.2,1.2,3.1,0,4.2c-1.2,1.2-3.1,1.2-4.2,0L89.8,94.1C89.2,93.5,88.9,92.7,88.9,91.9z"/><path d="M52.3,26.3C45.4,26.3,38.9,29,34,34c-4.7,4.7-7.3,10.8-7.6,17.4c-0.1,1.7,1.2,3,2.9,3.1c0,0,0.1,0,0.1,0c1.6,0,2.9-1.3,3-2.9c0.2-5.1,2.3-9.8,5.8-13.4c3.8-3.8,8.8-5.9,14.1-5.9c1.7,0,3-1.3,3-3S54,26.3,52.3,26.3z"/><circle cx="35" cy="67" r="3"/></svg>
		//- Tools
		div(class="w-full hidden items-center justify-center overflow-hidden")
			ul(class="px-2 py-1 flex items-center justify-between rounded-full text-gray-400 bg-[var(--dark400)]")
				li(class="mx-4 hover:text-white hover:cursor-pointer") Edit
				li(class="mx-4 hover:text-white hover:cursor-pointer") Sort
					ul(class="hidden")
						li(class="")
						li(class="")
						li(class="")
						li(class="")
						li(class="")
						li(class="")
				li(class="mx-4 hover:text-white hover:cursor-pointer") Select
		//- Oils
		div(class="OilsList pt-5 w-full h-full flex items-start justify-center border-t border-solid border-[var(--dark100)]")
			perfect-scrollbar(class="h-[83%] w-full bg-[var(--dark300)] rounded-lg border-4 border-[var(--dark300)]")
				transition-group(name="list" tag="ul" class="h-full w-full pl-5 pb-6")
					li(v-for="Oil in filteredOils()" :key="Oil.Name" class="py-2 my-2 text-sm rounded-lg flex flex-nowrap items-center gap-2 text-[var(--favColor)]" @click="ShowTheInfo(Oil)" @dblclick="ClickdOnOil(Oil)")
						span(v-show="false" class="bg-[var(--favColor)] text-black font-bold px-2 rounded-md inline-block h-full")
							| {{ Oil.Id }}
						button(type="button" class="h-6 w-6 mx-1  font-bold text-xl rounded-md opacity-50 flex-none bg-[var(--favColor)] text-black hover:opacity-100" @click="ClickdOnOil(Oil)")
							<svg class="w-full" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"/></svg>
						span(class="w-full inline-block p-1 rounded-lg hover:bg-[var(--dark300)] cursor-default" style="text-wrap: nowrap;") {{ Oil.Name }}
		//- Close
	button(type="button" id="closeOrResize" class="w-5 h-9 rounded-lg bg-[var(--dark300)] text-[var(--favColor)] border-2 border-solid border-[var(--favColor)] absolute top-1/2 right-[-.7rem] translate-y-[-50%]")
		| |
</template>
<style lang="scss">
.OilsList {
	.ps {
		.ps__rail-y {
			left: 0;
		}

		.ps__rail-x,
		.ps__rail-y,
		.ps__rail-x,
		.ps__rail-y,
		.ps__rail-x:hover,
		.ps__rail-y:hover,
		.ps__rail-x:focus,
		.ps__rail-y:focus,
		.ps__rail-x.ps--clicking,
		.ps__rail-y.ps--clicking {
			background-color: var(--dark300) !important;
			opacity: 1;
		}
	}

	.ps__thumb-y {
		width: 11px;
		background-color: var(--favColor) !important;
	}
}

.list-move,
/* apply transition to moving elements */
.list-enter-active,
.list-leave-active {
	transition: all 0.5s ease;
}

.list-enter-from,
.list-leave-to {
	opacity: 0;
	transform: translateX(30px);
}

/* ensure leaving items are taken out of layout flow so that moving
   animations can be calculated correctly. */
.list-leave-active {
	position: absolute;
}
</style>
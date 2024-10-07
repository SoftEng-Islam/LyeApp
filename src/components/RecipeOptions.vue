<script lang="ts">
import { ref, Ref, WritableComputedRef } from 'vue';
import { computed } from 'vue';
import { useOilStore } from "../store/index";
export default {
	setup() {
		const OilStore: any = useOilStore();

		// set Type of Lye
		let STypeLye: Ref<string> = ref("NaOH"); // Default => NaOH
		const SetTypeOfLye: () => void = (): void => {
			OilStore.setTypeOfLye(STypeLye.value);
		};

		// The Water Options
		let TheWaterOption: Ref<number> = ref(0);
		const TheWaterSelect: () => void = ():void => {
			OilStore.headerOptions.water.selcted = TheWaterOption.value;
		}
		const TheWater: WritableComputedRef<any> = computed({
			get(): any {
				if(TheWaterOption.value == 0) {
					return OilStore.headerOptions.water.waterAsOfOils;
				} else if (TheWaterOption.value == 1) {
					return OilStore.headerOptions.water.lyeConcentration;
				} else {
					return OilStore.headerOptions.water.WaterToLyeRatio;
				}
			},
			set(value: any): void {
				OilStore.WaterAsofOils(TheWaterOption.value, value)
			}
		});

		// Set Super Fat
		const SetsuperFat = computed({
			get(): number{
				return OilStore.headerOptions.superFat || 0;
			},
			set(value: number): void {
				OilStore.ChangeSuperFat(value || 0);
			}
		});

		// Set Fragrance
		const SetFragrance = computed({
			get(): number{
				return OilStore.headerOptions.fragrance.value || 0;
			},
			set(value: number): void {
				OilStore.ChangeFragrance(value || 0);
			}
		});
		return {
			OilStore,
			STypeLye,
			SetTypeOfLye,
			TheWaterOption,
			TheWater,
			TheWaterSelect,
			SetsuperFat,
			SetFragrance
		}
	}
}
</script>
<template lang="pug">
ul(class="w-full mb-5 py-2 px-4 flex flex-row gap-2 items-start justify-between bg-[var(--dark100)]")
	//- Type Of Lye
	li(class="hover:border-[var(--favColor)] border border-transparent flex items-center justify-center w-1/4 h-full bg-[var(--dark300)] rounded-lg p-2")
		span(class="text-white") Type of #[span(class="text-[var(--favColor)]") Lye]:
		select(class="ml-2 p-1 px-2 text-lg text-green-500 bg-[var(--dark400)] border border-[var(--dark100)] outline-none" id="Units" v-model="STypeLye" @change="SetTypeOfLye()")
			option(value="NaOH") NaOH
			option(value="KOH") KOH
	//- Weight of Oils
	li(class="hover:border-[var(--favColor)] border border-transparent flex items-center justify-center w-1/4 h-full bg-[var(--dark300)] rounded-lg p-2")
		span(class="text-white text-sm") Weight of #[span(class="text-[var(--favColor)]") Oils]:
		input(type="number" readonly class="w-1/4 bg-[var(--dark200)] placeholder:text-white text-white pl-2 py-1 rounded-md scale-90" v-model="OilStore.RecipeTotal.weightOils")
		select(class="bg-[var(--dark200)] text-red-500 pl-2 py-1 rounded-md scale-90")
			option(value="Pounds") Pounds
			option(value="Ounces") Ounces
			option(value="Grams" selected) Grams
			option(value="Kilo") Kilo
			option(value="Tons") Tons
	//- Water
	li(class="w-1/4 h-full p-2 text-sm flex items-center justify-center bg-[var(--dark300)] rounded-lg overflow-hidden hover:border-[var(--favColor)] border border-transparent")
		span(class="text-[var(--favColor)] mr-3") Water#[span(class="text-white") :]
		input(class="w-12 pl-2 py-1 rounded-md scale-9 bg-[var(--dark200)] placeholder:text-white text-white" type="text" v-model="TheWater")
		select(class="bg-[var(--dark200)] text-blue-300 pl-2 py-1 rounded-md scale-90" v-model="TheWaterOption" @change="TheWaterSelect")
			option(value="0") Water as % of Oils
			//- option(value="1" ) Lye Concentration
			//- option(value="2" ) Water : Lye Ratio
	//- The Lest Section
	li(class="hover:border-[var(--favColor)] border border-transparent text-sm flex flex-col items-start justify-center w-1/4 h-full bg-[var(--dark300)] rounded-lg p-2")
		//- Super Fat
		div(class="flex justify-between items-center")
			span(class="text-orange-400 mr-10") Super Fat
			//- v-model="OilStore.headerOptions.superFat"
			input(class="pl-2 w-1/3 mr-auto bg-[var(--dark200)] placeholder:text-white text-white py-1 rounded-md scale-90" type="number" v-model="SetsuperFat")
			span(class="text-orange-400 ml-auto") %
		//- Fragrance
		div(class="flex justify-between items-center")
			span(class="text-fuchsia-400 mr-10") Fragrance
			input(class="pl-2 w-1/3 mr-auto bg-[var(--dark200)] placeholder:text-white text-white py-1 rounded-md scale-90" type="number" v-model="SetFragrance")
			span(class="text-fuchsia-400 ml-auto") {{OilStore.headerOptions.fragrance.frWeight}}
</template>
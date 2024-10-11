<script lang="ts">
import { ref, Ref, WritableComputedRef } from 'vue';
import { computed } from 'vue';
import { useOilStore } from "../store/index";
export default {
	setup() {
		const OilStore: any = useOilStore();
		// Set Type of Lye
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
ul(class="w-full mb-5 p-2 flex flex-row flex-wrap items-stretch justify-center gap-2 bg-[var(--dark200)] *:flex *:items-center *:justify-center *:p-2 *:rounded-md *:bg-[var(--dark300)]")
	//- Type Of Lye
	li(class="")
		span(class="text-white") Type of #[span(class="text-[var(--favColor)]") Lye]:
		select(class="ml-2 p-1 px-2 outline-none rounded-md border border-gray-700 text-green-500 bg-[var(--dark400)]" id="Units" v-model="STypeLye" @change="SetTypeOfLye()")
			option(value="NaOH") NaOH
			option(value="KOH") KOH
	//- Weight of Oils
	li(class="")
		span(class="text-white") Weight of #[span(class="text-[var(--favColor)]") Oils]:
		input(type="number" readonly class="w-1/4 bg-[var(--dark200)] placeholder:text-white text-white pl-2 py-1 rounded-md scale-90" v-model="OilStore.RecipeTotal.weightOils")
		select(class="bg-[var(--dark200)] text-red-500 pl-2 py-1 rounded-md scale-90")
			option(value="Pounds") Pounds
			option(value="Ounces") Ounces
			option(value="Grams" selected) Grams
			option(value="Kilo") Kilo
			option(value="Tons") Tons
	//- Water
	li(class="")
		span(class="text-[var(--favColor)] mr-3") Water#[span(class="text-white") :]
		input(class="w-12 pl-2 py-1 rounded-md scale-9 bg-[var(--dark200)] placeholder:text-white text-white" type="text" v-model="TheWater")
		select(class="bg-[var(--dark200)] text-blue-300 pl-2 py-1 rounded-md scale-90" v-model="TheWaterOption" @change="TheWaterSelect")
			option(value="0") Water as % of Oils
			option(value="1" ) Lye Concentration
			option(value="2" ) Water : Lye Ratio
	//- The Lest Section
	li(class="flex-col items-start justify-start gap-2")
		//- Super Fat
		div(class="w-full flex flex-row items-center justify-start")
			span(class="text-orange-400") Super Fat
			//- v-model="OilStore.headerOptions.superFat"
			input(class="bg-[var(--dark200)] placeholder:text-white text-white py-1 rounded-md scale-90" type="number" v-model="SetsuperFat")
			span(class="text-orange-400") %
		//- Fragrance
		div(class="w-full flex flex-row items-center justify-start")
			span(class="text-fuchsia-400") Fragrance
			input(class="bg-[var(--dark200)] placeholder:text-white text-white py-1 rounded-md scale-90" type="number" v-model="SetFragrance")
			span(class="text-fuchsia-400") {{OilStore.headerOptions.fragrance.frWeight}}
</template>
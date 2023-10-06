import { defineStore } from "pinia";
import OilsAPIJsonFile from "../API/oilsArray";
export const useOilStore = defineStore("taskStore", {
	state: () => ({
		Oils: OilsAPIJsonFile,
		selectedOilProprt: Object,
		selectedOilArray: new Array(),
		typeOfLye: "NaOH",
		addedOils: new Array(),
		weightLye: 0,
		weightWater: 0,
	}),
	getters: {
		GetOil(): Object {
			// this refer to state Object
			return this.Oils.filter((O) => O.name);
		},
		GetSelectedOils(): Object {
			return this.selectedOilArray;
		},
		getTypeOfLye(): string {
			return this.typeOfLye;
		},
	},
	actions: {
		setTypeOfLye(value: string) {
			// if (value === "NaOH" || "KOH") {
			this.typeOfLye = value;
			// }
		},
		ClickedOil(selectedOil: any) {
			if (this.selectedOilArray.includes(selectedOil) === false) {
				// console.log(this.selectedOilArray);
				// console.log(selectedOil);
				this.selectedOilArray.push(selectedOil);
			}
			this.selectedOilProprt = selectedOil;
		},
		RemoveOils(OilToRemove: object) {
			if (this.selectedOilArray.includes(OilToRemove) === true) {
				this.selectedOilArray = this.selectedOilArray.filter((o) => {
					return o != OilToRemove;
				});
			}
		},
		AddedOilsWeight(OilName: string, OilWeight: number) {
			this.weightLye = 0;
			this.weightWater = 0;
			this.selectedOilArray.forEach((oi) => {
				if (OilName === oi.name) {
					oi.weight = OilWeight;
				}

				let NaOH =
					OilWeight *
					(Math.round((40 / 56.1) * oi["KOH SAP"] * Math.pow(10, 3)) /
						Math.pow(10, 3));

				this.weightLye += +NaOH.toFixed(2);
			});
			this.weightWater = +(this.weightLye / 3).toFixed(2);
		},
	},
});

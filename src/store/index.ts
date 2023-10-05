import { defineStore } from "pinia";
import OilsAPIJsonFile from "../API/oilsArray";
export const useOilStore = defineStore("taskStore", {
	state: () => ({
		Oils: OilsAPIJsonFile,
		selectedOilProprt: Object,
		selectedOilArray: new Array(),
		typeOfLye: "NaOH",
		addedOils: new Array(),
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
			console.log(OilName);
			console.log(OilWeight);
			if (this.addedOils.length > 0) {
				this.addedOils.push({ oilName: OilName, oilWeight: OilWeight });
			} else {
				this.addedOils.forEach((oi) => {
					console.log(oi);
				});
			}
		},
	},
});

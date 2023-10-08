import { defineStore } from "pinia";
import OilsAPIJsonFile from "../API/oilsArray";
export const useOilStore = defineStore("taskStore", {
	state: () => ({
		Oils: OilsAPIJsonFile,
		selectedOilProprt: { name: "Oil Properties" },
		selectedOilArray: new Array(),
		addedOils: new Array(),
		weightLye: 0,
		weightWater: 0,
		weightOils: 0,

		headerOptions: {
			typeOfLye: "NaOH",
			weightOfOilsValue: 0,
			weightOfOilsUnit: "Grams",
			water: {
				waterAsOfOils: 38,
				lyeConcentration: 70,
				WaterToLyeRatio: "2:1",
			},
			superFat: 5,
			fragrance: {
				value: 29,
				frWeight: "g/Kg",
			},
		},
		soapProperties: {
			Hardness: 0,
			Cleansing: 0,
			Conditioning: 0,
			Bubbly: 0,
			Creamy: 0,
			Iodine: 0,
			INS: 0,
			Lauric: 0,
			Myristic: 0,
			Palmitic: 0,
			Stearic: 0,
			Ricinoleic: 0,
			Oleic: 0,
			Linoleic: 0,
			Linolenic: 0,
		},
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
			return this.headerOptions.typeOfLye;
		},
	},
	actions: {
		setTypeOfLye(value: string) {
			if (value === "NaOH" || "KOH") {
				this.headerOptions.typeOfLye = value;
				this.weightLye = 0;
				// this.weightWater = 0;

				this.selectedOilArray.forEach((oi) => {
					if (this.headerOptions.typeOfLye === "NaOH") {
						let NaOH =
							oi.weight *
							(Math.round(
								(40 / 56.1) * oi["KOH SAP"] * Math.pow(10, 3)
							) /
								Math.pow(10, 3));

						this.weightLye += parseInt(NaOH.toFixed(0));
					} else {
						this.weightLye += parseInt(
							(oi.weight * oi["KOH SAP"]).toFixed(0)
						);
					}
				});
			}
		},
		ClickedOil(selectedOil: any) {
			if (this.selectedOilArray.includes(selectedOil) === false) {
				// console.log(this.selectedOilArray);
				// console.log(selectedOil);
				this.selectedOilArray.push(selectedOil);
			}
			this.selectedOilProprt = selectedOil;
		},
		showTheInfo(selectedOil: any) {
			this.selectedOilProprt = selectedOil;
		},
		RemoveOils(OilToRemove: object) {
			if (this.selectedOilArray.includes(OilToRemove) === true) {
				this.selectedOilArray = this.selectedOilArray.filter((o) => {
					return o != OilToRemove;
				});
				this.weightOils = 0;
				this.weightLye = 0;
				this.weightWater = 0;
				this.selectedOilArray.forEach((oi) => {
					if (this.headerOptions.typeOfLye === "NaOH") {
						let NaOH =
							oi.weight *
							(Math.round(
								(40 / 56.1) * oi["KOH SAP"] * Math.pow(10, 3)
							) /
								Math.pow(10, 3));

						this.weightLye += parseInt(NaOH.toFixed(0));
					} else {
						this.weightLye += parseInt(
							(oi.weight * oi["KOH SAP"]).toFixed(0)
						);
					}
					this.weightOils += parseInt(oi.weight.toFixed(0));
				});
				this.weightWater += parseInt((this.weightLye * 3).toFixed(0));
			}
		},
		AddedOilsWeight(OilName: string, OilWeight: number) {
			this.weightLye = 0;
			this.weightWater = 0;
			this.weightOils = 0;
			this.selectedOilArray.forEach((oi) => {
				if (OilName === oi.name) {
					oi.weight = OilWeight;
				}
				if (this.headerOptions.typeOfLye === "NaOH") {
					let NaOH =
						oi.weight *
						(Math.round(
							(40 / 56.1) * oi["KOH SAP"] * Math.pow(10, 3)
						) /
							Math.pow(10, 3));

					this.weightLye += parseInt(NaOH.toFixed(0));
				} else {
					this.weightLye += parseInt(
						(oi.weight * oi["KOH SAP"]).toFixed(0)
					);
				}
				this.weightOils += parseInt(oi.weight.toFixed(0));
			});
			this.weightWater += parseInt((this.weightLye * 3).toFixed(0));
		},
	},
});

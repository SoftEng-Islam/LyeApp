import { defineStore } from "pinia";
import OilsAPIJsonFile from "../API/oilsArray2";
export const useOilStore = defineStore("taskStore", {
	state: () => ({
		Oils: OilsAPIJsonFile,
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
		OilProperties: {
			Name: "Oil Properties",
			Hardness: 0,
			Cleansing: 0,
			Condition: 0,
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
		RecipeTotal: {
			weightLye: 0,
			weightWater: 0,
			weightOils: 0,
			FragranceWeight: 0,
		},
		AddedOils: new Array(),


	}),
	getters: {
		GetOil(): Object {
			// this refer to state Object
			return this.Oils.filter((O) => O.Name);
		},
		GetSelectedOils(): Object {
			return this.AddedOils;
		},
		getTypeOfLye(): string {
			return this.headerOptions.typeOfLye;
		},
	},
	actions: {
		setTypeOfLye(value: string) {
			if (value === "NaOH" || "KOH") {
				this.headerOptions.typeOfLye = value;
				this.RecipeTotal.weightLye = 0;
				// this.weightWater = 0;

				this.AddedOils.forEach((oi) => {
					if (this.headerOptions.typeOfLye === "NaOH") {
						let NaOH: number = oi.weight * oi.NaOH;

						this.RecipeTotal.weightLye += parseInt(NaOH.toFixed(0));
					} else {
						this.RecipeTotal.weightLye += parseInt(
							(oi.weight * oi.KOH).toFixed(0)
						);
					}
				});
			}
		},
		ClickedOil(selectedOil: any) {
			if (this.AddedOils.includes(selectedOil) === false) {
				// console.log(this.selectedOilArray);
				// console.log(selectedOil);
				selectedOil["weight"] = 0;
				this.AddedOils.push(selectedOil);
			}
		},
		showTheInfo(selectedOil: any) {
			this.OilProperties = selectedOil;
		},
		RemoveOils(OilToRemove: object) {
			if (this.AddedOils.includes(OilToRemove) === true) {
				this.AddedOils = this.AddedOils.filter((o) => {
					return o != OilToRemove;
				});
				this.RecipeTotal.weightOils = 0;
				this.RecipeTotal.weightLye = 0;
				this.RecipeTotal.weightWater = 0;
				this.AddedOils.forEach((oi) => {
					if (this.headerOptions.typeOfLye === "NaOH") {
						let NaOH =
							oi.weight * oi.NaOH;
						this.RecipeTotal.weightLye += parseInt(NaOH.toFixed(0));
					} else {
						this.RecipeTotal.weightLye += parseInt(
							(oi.weight * oi.KOH).toFixed(0)
						);
					}
					this.RecipeTotal.weightOils += parseInt(oi.weight.toFixed(0));
				});
				this.RecipeTotal.weightWater += parseInt((this.RecipeTotal.weightLye * 3).toFixed(0));
			}
		},
		AddedOilsWeight(OilName: string, OilWeight: number) {
			this.RecipeTotal.weightLye = 0;
			this.RecipeTotal.weightWater = 0;
			this.RecipeTotal.weightOils = 0;
			this.RecipeTotal.FragranceWeight = 0;


			this.AddedOils.forEach((oi) => {
				if (OilName === oi.Name) {
					oi.weight = OilWeight;
				}
				if (this.headerOptions.typeOfLye === "NaOH") {
					let NaOH =
						oi.weight * oi.NaOH;

					this.RecipeTotal.weightLye += parseInt(NaOH.toFixed(0));
				} else {
					this.RecipeTotal.weightLye += parseInt(
						(oi.weight * oi.KOH).toFixed(0)
					);
				}
				this.RecipeTotal.weightOils += parseInt(oi.weight.toFixed(0));
			});
			this.RecipeTotal.weightWater += parseInt((this.RecipeTotal.weightLye * 3).toFixed(0));
			// ((2000 / 100) * 29) / 1000 * 100
			// this.FragranceWeight = (this.headerOptions.fragrance.value * this.weightOils / 1000 / this.weightOils ) * 1000 ;
			this.RecipeTotal.FragranceWeight = Math.round(((this.RecipeTotal.weightOils / 100) * this.headerOptions.fragrance.value) / 1000 * 100);
		},
	},
});

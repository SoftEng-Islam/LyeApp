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
				selcted: 0,
				waterAsOfOils: 38,
				lyeConcentration: 70,
				WaterToLyeRatio: "2:1"
			},
			superFat: 0,
			fragrance: {
				value: 0,
				frWeight: "g/Kg"
			}
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
			Linolenic: 0
		},
		RecipeTotal: {
			weightLye: 0,
			weightWater: 0,
			weightOils: 0,
			FragranceWeight: 0
		},
		AddedOils: new Array(),
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
			Saturated: 0,
			MonoUnsaturated: 0,
			PolyUnsaturated: 0
		}
	}),
	getters: {
		GetOil(): Object {
			return this.Oils.filter((O: { Name: any }) => O.Name);
		},
		GetHeaderOptions(value: any): any {
			return this.headerOptions[value];
		},
		GetSelectedOils(): Object {
			return this.AddedOils;
		},
		getTypeOfLye(): string {
			return this.headerOptions.typeOfLye;
		},
		getRecipeTotal(): any {
			return this.RecipeTotal;
		},
		getSoapProperties(): any {
			return this.soapProperties;
		}
	},
	actions: {
		setTypeOfLye(value: string): void {
			if (value === "NaOH" || "KOH") {
				this.headerOptions.typeOfLye = value;
				this.RecipeTotal.weightLye = 0;
				// this.weightWater = 0;

				this.AddedOils.forEach((oi: { weight: number; NaOH: number; KOH: number }) => {
					if (this.headerOptions.typeOfLye === "NaOH") {
						let NaOH: number = oi.weight * oi.NaOH;

						this.RecipeTotal.weightLye += parseInt(NaOH.toFixed(0));
					} else {
						this.RecipeTotal.weightLye += parseInt((oi.weight * oi.KOH).toFixed(0));
					}
				});
			}
		},
		ClickedOil(selectedOil: any): void {
			if (this.AddedOils.includes(selectedOil) === false) {
				// console.log(this.selectedOilArray);
				// console.log(selectedOil);
				selectedOil["weight"] = 0;
				this.AddedOils.push(selectedOil);
				console.log(this.AddedOils);
			}
		},
		showTheInfo(selectedOil: any): void {
			this.OilProperties = selectedOil;
		},
		WaterAsofOils(valueOne: any, valueTwo: any): void {
			if (valueOne == 0) {
				this.headerOptions.water.waterAsOfOils = valueTwo;
			} else if (valueOne == 1) {
				this.headerOptions.water.lyeConcentration = valueTwo;
			} else {
				this.headerOptions.water.WaterToLyeRatio = valueTwo;
			}
			console.log("weightWater", this.RecipeTotal.weightWater);
			console.log("waterAsOfOils", this.headerOptions.water.waterAsOfOils);
			console.log("weightOils", this.RecipeTotal.weightOils);
			console.log("weightWater", this.RecipeTotal.weightWater);

			this.RecipeTotal.weightWater = (this.RecipeTotal.weightOils / 100) * this.headerOptions.water.waterAsOfOils;
		},
		calcLye() {
			this.RecipeTotal.weightOils = 0;
			this.RecipeTotal.weightLye = 0;
			// this.RecipeTotal.weightWater = 0;
			this.AddedOils.forEach((oi: { weight: number; NaOH: number; KOH: number }) => {
				if (this.headerOptions.typeOfLye === "NaOH") {
					let NaOH = oi.weight * oi.NaOH;
					this.RecipeTotal.weightLye += parseInt(NaOH.toFixed(0));
				} else {
					this.RecipeTotal.weightLye += parseInt((oi.weight * oi.KOH).toFixed(0));
				}
				this.RecipeTotal.weightOils += parseInt(oi.weight.toFixed(0));
			});
			// this.RecipeTotal.weightWater += parseInt((this.RecipeTotal.weightLye * 3).toFixed(0));
			this.WaterAsofOils();
		},
		RemoveOils(OilToRemove: object): void {
			if (this.AddedOils.includes(OilToRemove) === true) {
				this.AddedOils = this.AddedOils.filter((o: object) => {
					return o != OilToRemove;
				});
				this.calcLye();
			}
		},
		getProperties(): void {
			this.soapProperties.Hardness = 0;
			this.soapProperties.Cleansing = 0;
			this.soapProperties.Conditioning = 0;
			this.soapProperties.Bubbly = 0;
			this.soapProperties.Creamy = 0;
			this.soapProperties.Iodine = 0;
			this.soapProperties.INS = 0;
			this.soapProperties.Lauric = 0;
			this.soapProperties.Myristic = 0;
			this.soapProperties.Palmitic = 0;
			this.soapProperties.Stearic = 0;
			this.soapProperties.Ricinoleic = 0;
			this.soapProperties.Oleic = 0;
			this.soapProperties.Linoleic = 0;
			this.soapProperties.Linolenic = 0;
			this.soapProperties.Saturated = 0;
			this.soapProperties.MonoUnsaturated = 0;
			this.soapProperties.PolyUnsaturated = 0;
			this.AddedOils.forEach(
				(ele: {
					Hardness: number;
					weight: number;
					Cleansing: number;
					Condition: number;
					Bubbly: number;
					Creamy: number;
					Iodine: number;
					INS: number;
					Lauric: number;
					Myristic: number;
					Palmitic: number;
					Stearic: number;
					Ricinoleic: number;
					Oleic: number;
					Linoleic: number;
					Linolenic: number;
					Saturated: number;
				}) => {
					this.soapProperties.Hardness += Math.round(
						(ele.Hardness * ((ele.weight * 100) / this.RecipeTotal.weightOils)) / 100
					);
					this.soapProperties.Cleansing += Math.round(
						(ele.Cleansing * ((ele.weight * 100) / this.RecipeTotal.weightOils)) / 100
					);
					this.soapProperties.Conditioning += Math.round(
						(ele.Condition * ((ele.weight * 100) / this.RecipeTotal.weightOils)) / 100
					);
					this.soapProperties.Bubbly += Math.round(
						(ele.Bubbly * ((ele.weight * 100) / this.RecipeTotal.weightOils)) / 100
					);
					this.soapProperties.Creamy += Math.round(
						(ele.Creamy * ((ele.weight * 100) / this.RecipeTotal.weightOils)) / 100
					);
					this.soapProperties.Iodine += Math.round(
						(ele.Iodine * ((ele.weight * 100) / this.RecipeTotal.weightOils)) / 100
					);
					this.soapProperties.INS += Math.round(
						(ele.INS * ((ele.weight * 100) / this.RecipeTotal.weightOils)) / 100
					);
					this.soapProperties.Lauric += Math.round(
						(ele.Lauric * ((ele.weight * 100) / this.RecipeTotal.weightOils)) / 100
					);
					this.soapProperties.Myristic += Math.round(
						(ele.Myristic * ((ele.weight * 100) / this.RecipeTotal.weightOils)) / 100
					);
					this.soapProperties.Palmitic += Math.round(
						(ele.Palmitic * ((ele.weight * 100) / this.RecipeTotal.weightOils)) / 100
					);
					this.soapProperties.Stearic += Math.round(
						(ele.Stearic * ((ele.weight * 100) / this.RecipeTotal.weightOils)) / 100
					);
					this.soapProperties.Ricinoleic += Math.round(
						(ele.Ricinoleic * ((ele.weight * 100) / this.RecipeTotal.weightOils)) / 100
					);
					this.soapProperties.Oleic += Math.round(
						(ele.Oleic * ((ele.weight * 100) / this.RecipeTotal.weightOils)) / 100
					);
					this.soapProperties.Linoleic += Math.round(
						(ele.Linoleic * ((ele.weight * 100) / this.RecipeTotal.weightOils)) / 100
					);
					this.soapProperties.Linolenic += Math.round(
						(ele.Linolenic * ((ele.weight * 100) / this.RecipeTotal.weightOils)) / 100
					);
					this.soapProperties.Saturated += Math.round(
						(ele.Saturated * ((ele.weight * 100) / this.RecipeTotal.weightOils)) / 100
					);
					// this.soapProperties.MonoUnsaturated += Math.round(ele.Id * (ele.weight * 100 / this.RecipeTotal.weightOils) /100);
					// this.soapProperties.PolyUnsaturated += Math.round(ele.Id * (ele.weight * 100 / this.RecipeTotal.weightOils) /100);
				}
			);
		},
		AddedOilsWeight(OilName: string, OilWeight: number): void {
			this.RecipeTotal.weightLye = 0;
			// this.RecipeTotal.weightWater = 0;
			this.RecipeTotal.weightOils = 0;
			this.RecipeTotal.FragranceWeight = 0;

			this.AddedOils.forEach((oi: any): void => {
				if (OilName === oi.Name) {
					oi.weight = OilWeight;
				}
				if (this.headerOptions.typeOfLye === "NaOH") {
					let NaOH: number = oi.weight * oi.NaOH;

					this.RecipeTotal.weightLye += parseInt(NaOH.toFixed(0));
				} else {
					this.RecipeTotal.weightLye += parseInt((oi.weight * oi.KOH).toFixed(0));
				}
				this.RecipeTotal.weightOils += parseInt(oi.weight.toFixed(0));
			});
			// this.RecipeTotal.weightWater += parseInt((this.RecipeTotal.weightLye * 3).toFixed(0));
			this.RecipeTotal.FragranceWeight = Math.round(
				(((this.RecipeTotal.weightOils / 100) * this.headerOptions.fragrance.value) / 1000) * 100
			);
			this.WaterAsofOils();
			this.getProperties();
			this.ChangeSuperFat(this.headerOptions.superFat);
		},
		ChangeSuperFat(value: number): void {
			this.calcLye();
			this.headerOptions.superFat = value;
			this.RecipeTotal.weightLye = ((100 - this.headerOptions.superFat) / 100) * this.RecipeTotal.weightLye;
		},
		ChangeFragrance(value: number): void {
			this.headerOptions.fragrance.value = value;
			this.RecipeTotal.FragranceWeight = Math.round(
				(((this.RecipeTotal.weightOils / 100) * this.headerOptions.fragrance.value) / 1000) * 100
			);
		}
	}
});

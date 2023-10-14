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
		setTypeOfLye(value: string): void {
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
		RemoveOils(OilToRemove: object): void {
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
			this.AddedOils.forEach((ele) => {
				let c: number;
				c = parseInt(ele.Id, 10);
				if (31 === c || 65 === c || 138 === c || 40 === c || 5 === c || 140 === c || 142 === c || 145 === c || 149 === c || 101 === c) {
					if (31 === c) {
						this.soapProperties.Conditioning += 98 * ele.weight;
						this.soapProperties.Creamy += 2 * ele.weight;
						this.soapProperties.Hardness += 2 * ele.weight;
						this.soapProperties.INS += 77 * ele.weight;
						this.soapProperties.Iodine += 92 * ele.weight;
						this.soapProperties.PolyUnsaturated += 100 * ele.weight;
					} else if (65 === c) {
						this.soapProperties.Hardness += 100 * ele.weight;
						this.soapProperties.Cleansing += 100 * ele.weight;
						this.soapProperties.Bubbly += 100 * ele.weight;
						this.soapProperties.Lauric += 2 * ele.weight;
						this.soapProperties.Myristic += 1 * ele.weight;
						this.soapProperties.INS += 324 * ele.weight;
						this.soapProperties.Iodine += 1 * ele.weight;
						this.soapProperties.Saturated += 90 * ele.weight;
					} else if (138 === c) {
						this.soapProperties.Hardness += 7 * ele.weight;
						this.soapProperties.Creamy += 6 * ele.weight;
						this.soapProperties.Conditioning += 93 * ele.weight;
						this.soapProperties.Oleic += 14 * ele.weight;
						this.soapProperties.Linoleic += 11 * ele.weight;
						this.soapProperties.Linolenic += 9 * ele.weight;
						this.soapProperties.INS += 67 * ele.weight;
						this.soapProperties.Iodine += 105 * ele.weight;
						this.soapProperties.Saturated += 6 * ele.weight;
						this.soapProperties.MonoUnsaturated += 70 * ele.weight;
						this.soapProperties.PolyUnsaturated += 24 * ele.weight;
					} else if (40 === c) {
						this.soapProperties.Hardness += 5 * ele.weight;
						this.soapProperties.Creamy += 1 * ele.weight;
						this.soapProperties.Conditioning += 95 * ele.weight;
						this.soapProperties.Oleic += 17 * ele.weight;
						this.soapProperties.Linoleic += 13 * ele.weight;
						this.soapProperties.Linolenic += 9 * ele.weight;
						this.soapProperties.INS += 69 * ele.weight;
						this.soapProperties.Iodine += 106 * ele.weight;
						this.soapProperties.Saturated += 7 * ele.weight;
						this.soapProperties.MonoUnsaturated += 68 * ele.weight;
						this.soapProperties.PolyUnsaturated += 25 * ele.weight;
					} else if (5 === c) {
						this.soapProperties.Hardness += 90 * ele.weight;
						this.soapProperties.Creamy += 50 * ele.weight;
						this.soapProperties.Conditioning += 50 * ele.weight;
						this.soapProperties.INS += 84 * ele.weight;
						this.soapProperties.Iodine += 10 * ele.weight;
					} else if (140 === c) {
						this.soapProperties.Hardness += 28 * ele.weight;
						this.soapProperties.Creamy += 3 * ele.weight;
						this.soapProperties.Conditioning += 72 * ele.weight;
						this.soapProperties.Myristic += 5 * ele.weight;
						this.soapProperties.Palmitic += 19 * ele.weight;
						this.soapProperties.Stearic += 2 * ele.weight;
						this.soapProperties.Oleic += 23 * ele.weight;
						this.soapProperties.Linoleic += 2 * ele.weight;
						this.soapProperties.Linolenic += 1 * ele.weight;
						this.soapProperties.INS += 69 * ele.weight;
						this.soapProperties.Iodine += 106 * ele.weight;
						this.soapProperties.Saturated += 28 * ele.weight;
						this.soapProperties.MonoUnsaturated += 32 * ele.weight;
						this.soapProperties.PolyUnsaturated += 40 * ele.weight;
					} else if (142 === c) {
						this.soapProperties.Hardness += 68 * ele.weight;
						this.soapProperties.Creamy += 60 * ele.weight;
						this.soapProperties.Conditioning = 60 * ele.weight;
						this.soapProperties.INS += 12 * ele.weight;
						this.soapProperties.Iodine += 106 * ele.weight;
					} else if (145 === c) {
						this.soapProperties.Hardness += 6 * ele.weight;
						this.soapProperties.Creamy += 80 * ele.weight;
						this.soapProperties.Conditioning += 94 * ele.weight;
						this.soapProperties.Palmitic += 3 * ele.weight;
						this.soapProperties.Stearic += 2 * ele.weight;
						this.soapProperties.Oleic += 18 * ele.weight;
						this.soapProperties.Linoleic += 11 * ele.weight;
						this.soapProperties.Linolenic += 4 * ele.weight;
						this.soapProperties.INS += 70 * ele.weight;
						this.soapProperties.Iodine += 98 * ele.weight;
					} else if (149 === c) {
						this.soapProperties.Hardness += 6 * ele.weight;
						this.soapProperties.Cleansing += 2 * ele.weight;
						this.soapProperties.Creamy += 4 * ele.weight;
						this.soapProperties.Bubbly += 2 * ele.weight;
						this.soapProperties.Conditioning += 83 * ele.weight;
						this.soapProperties.Lauric += 1 * ele.weight;
						this.soapProperties.Myristic += 1 * ele.weight;
						this.soapProperties.Palmitic += 2 * ele.weight;
						this.soapProperties.Stearic += 2 * ele.weight;
						this.soapProperties.Oleic += 44 * ele.weight;
						this.soapProperties.Linoleic += 2 * ele.weight;
						this.soapProperties.Linolenic += 2 * ele.weight;
						this.soapProperties.INS += 107 * ele.weight;
						this.soapProperties.Iodine += 68 * ele.weight;
						this.soapProperties.Saturated += 54 * ele.weight;
						this.soapProperties.MonoUnsaturated += 42 * ele.weight;
						this.soapProperties.PolyUnsaturated += 2 * ele.weight;
					} else if (101 === c) {
						this.soapProperties.Hardness += 54 * ele.weight;
						this.soapProperties.Creamy += 43 * ele.weight;
						this.soapProperties.Conditioning += 44 * ele.weight;
						this.soapProperties.Palmitic += 8 * ele.weight;
						this.soapProperties.Stearic += 35 * ele.weight;
						this.soapProperties.Oleic += 42 * ele.weight;
						this.soapProperties.Linoleic += 2 * ele.weight;
						this.soapProperties.INS += 153 * ele.weight;
						this.soapProperties.Iodine += 39 * ele.weight;
						this.soapProperties.Saturated += 54 * ele.weight;
						this.soapProperties.MonoUnsaturated += 42 * ele.weight;
						this.soapProperties.PolyUnsaturated += 2 * ele.weight;
					}
				} else {
					c = parseInt(ele.lauric, 10);
					if (0 < c) {
						this.soapProperties.Hardness += c * ele.weight;
						this.soapProperties.Cleansing += c * ele.weight;
						this.soapProperties.Bubbly += c * ele.weight;
						this.soapProperties.Lauric += c * ele.weight;
						this.soapProperties.Saturated += c * ele.weight;
					}
					c = parseInt(ele.myristic, 10);
					if (0 < c) {
						this.soapProperties.Hardness += c * ele.weight;
						this.soapProperties.Cleansing += c * ele.weight;
						this.soapProperties.Bubbly += c * ele.weight;
						this.soapProperties.Myristic += c * ele.weight;
						this.soapProperties.Saturated += c * ele.weight;
					}
					c = parseInt(ele.palmitic, 10);
					if (0 < c) {
						this.soapProperties.Hardness += c * ele.weight;
						this.soapProperties.Creamy += c * ele.weight;
						this.soapProperties.Palmitic += c * ele.weight;
						this.soapProperties.Saturated += c * ele.weight;
					}
					c = parseInt(ele.stearic, 10);
					if (0 < c) {
						this.soapProperties.Hardness += c * ele.weight;
						this.soapProperties.Creamy += c * ele.weight;
						this.soapProperties.Stearic += c * ele.weight;
						this.soapProperties.Saturated += c * ele.weight;
					}
					c = parseInt(ele.ricinoleic, 10);
					if (0 < c) {
						this.soapProperties.Conditioning += c * ele.weight;
						this.soapProperties.Bubbly += c * ele.weight;
						this.soapProperties.Creamy += c * ele.weight;
						this.soapProperties.Ricinoleic += c * ele.weight;
						this.soapProperties.MonoUnsaturated += c * ele.weight;
					}
					c = parseInt(ele.oleic, 10);
					if (0 < c) {
						this.soapProperties.Conditioning += c * ele.weight;
						this.soapProperties.Oleic += c * ele.weight;
						this.soapProperties.MonoUnsaturated += c * ele.weight;
					}
					c = parseInt(ele.linoleic, 10);
					if (0 < c) {
						this.soapProperties.Conditioning += c * ele.weight;
						this.soapProperties.Linoleic += c * ele.weight;
						this.soapProperties.PolyUnsaturated += c * ele.weight;
					}
					c = parseInt(ele.linolenic, 10);
					if (0 < c) {
						this.soapProperties.Conditioning += c * ele.weight;
						this.soapProperties.Linolenic += c * ele.weight;
						this.soapProperties.PolyUnsaturated += c * ele.weight;
					}
					this.soapProperties.INS += ele.ins * ele.weight;
					this.soapProperties.Iodine += ele.iodine * ele.weight;
				}
			}
			)
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
			this.getProperties();
		},
	},
});

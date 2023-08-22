import {defineStore} from 'pinia';
import OilsAPIJsonFile from "../API/oilsArray";
export const useOilStore = defineStore('taskStore', {
    state: () => ({
        Oils: OilsAPIJsonFile,
		selectedOilProprt: {},
    }),
    getters: {
        GetOil(): Object { // this refer to state Object
            return this.Oils.filter(O => O.name)
        }
    },
	actions: {
		ClickedOil(selectedOil: object) {
			this.selectedOilProprt = selectedOil
		}
	}
});


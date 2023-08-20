const Oils = {
	"Abyssinian Oil": {
		version: 1,
		iodine: 98,
		ins: 70,
		sap: 0.168,
		breakdown: {
			palmitic: 3,
			stearic: 2,
			oleic: 18,
			linoleic: 11,
			linolenic: 4,
		},
		properties: {
			hardness: 5,
			cleansing: 0,
			bubbly: 0,
			stable: 5,
			condition: 33,
			total_saponifiable: 38,
		},
		saturations: {
			saturated: 5,
			monoSaturated: 18,
			polySaturated: 11,
		},
	},
	"Almond Butter": {
		version: 1,
		iodine: 70,
		ins: 118,
		sap: 0.188,
		breakdown: {
			myristic: 1,
			palmitic: 9,
			stearic: 15,
			oleic: 58,
			linoleic: 16,
		},
		properties: {
			hardness: 25,
			cleansing: 1,
			bubbly: 1,
			stable: 24,
			condition: 74,
			total_saponifiable: 99,
		},
		saturations: {
			saturated: 25,
			monoSaturated: 58,
			polySaturated: 16,
		},
	},
};

export default Oils;

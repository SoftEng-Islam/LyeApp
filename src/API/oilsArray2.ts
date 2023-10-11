const oilsAPI: {
  id: number;
  name: string;
  sap: number;
  NaOH: number;
  iodine: number;
  ins: number;
  lauric: number;
  myristic: number;
  palmitic: number;
  stearic: number;
  ricinoleic: number;
  oleic: number;
  linoleic: number;
  linolenic: number;
  weight: number
}[] =
  [
    {
      id: 145,
      name: 'Abyssinian Oil',
      sap: 0.168,
      NaOH: 0.12,
      iodine: 98,
      ins: 70,
      lauric: 0,
      myristic: 0,
      palmitic: 3,
      stearic: 2,
      ricinoleic: 0,
      oleic: 18,
      linoleic: 11,
      linolenic: 4
      , weight: 0
    }
    , {
      id: 114,
      name: 'Almond Butter',
      sap: 0.188,
      NaOH: 0.134,
      iodine: 70,
      ins: 118,
      lauric: 0,
      myristic: 1,
      palmitic: 9,
      stearic: 15,
      ricinoleic: 0,
      oleic: 58,
      linoleic: 16,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 1,
      name: 'Almond Oil, sweet',
      sap: 0.195,
      NaOH: 0.139,
      iodine: 99,
      ins: 97,
      lauric: 0,
      myristic: 0,
      palmitic: 7,
      stearic: 0,
      ricinoleic: 0,
      oleic: 71,
      linoleic: 18,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 68,
      name: 'Aloe Butter',
      sap: 0.24,
      NaOH: 0.171,
      iodine: 9,
      ins: 241,
      lauric: 45,
      myristic: 18,
      palmitic: 8,
      stearic: 3,
      ricinoleic: 0,
      oleic: 7,
      linoleic: 2,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 96,
      name: 'Andiroba Oil,karaba,crabwood',
      sap: 0.188,
      NaOH: 0.134,
      iodine: 68,
      ins: 120,
      lauric: 0,
      myristic: 0,
      palmitic: 28,
      stearic: 8,
      ricinoleic: 0,
      oleic: 51,
      linoleic: 9,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 2,
      name: 'Apricot Kernal Oil',
      sap: 0.195,
      NaOH: 0.139,
      iodine: 100,
      ins: 91,
      lauric: 0,
      myristic: 0,
      palmitic: 6,
      stearic: 0,
      ricinoleic: 0,
      oleic: 66,
      linoleic: 27,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 58,
      name: 'Argan Oil',
      sap: 0.191,
      NaOH: 0.136,
      iodine: 95,
      ins: 95,
      lauric: 0,
      myristic: 1,
      palmitic: 14,
      stearic: 0,
      ricinoleic: 0,
      oleic: 46,
      linoleic: 34,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 53,
      name: 'Avocado butter',
      sap: 0.187,
      NaOH: 0.133,
      iodine: 67,
      ins: 120,
      lauric: 0,
      myristic: 0,
      palmitic: 21,
      stearic: 10,
      ricinoleic: 0,
      oleic: 53,
      linoleic: 6,
      linolenic: 2
      , weight: 0
    }
    , {
      id: 3,
      name: 'Avocado Oil',
      sap: 0.186,
      NaOH: 0.133,
      iodine: 86,
      ins: 99,
      lauric: 0,
      myristic: 0,
      palmitic: 20,
      stearic: 2,
      ricinoleic: 0,
      oleic: 58,
      linoleic: 12,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 4,
      name: 'Babassu Oil',
      sap: 0.245,
      NaOH: 0.175,
      iodine: 15,
      ins: 230,
      lauric: 50,
      myristic: 20,
      palmitic: 11,
      stearic: 4,
      ricinoleic: 0,
      oleic: 10,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 59,
      name: 'Baobab Oil',
      sap: 0.2,
      NaOH: 0.143,
      iodine: 75,
      ins: 125,
      lauric: 0,
      myristic: 1,
      palmitic: 24,
      stearic: 4,
      ricinoleic: 0,
      oleic: 37,
      linoleic: 28,
      linolenic: 2
      , weight: 0
    }
    , {
      id: 5,
      name: 'Beeswax',
      sap: 0.094,
      NaOH: 0.067,
      iodine: 10,
      ins: 84,
      lauric: 0,
      myristic: 0,
      palmitic: 0,
      stearic: 0,
      ricinoleic: 0,
      oleic: 0,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 6,
      name: 'Black Cumin Seed Oil, nigella sativa',
      sap: 0.195,
      NaOH: 0.139,
      iodine: 133,
      ins: 62,
      lauric: 0,
      myristic: 0,
      palmitic: 13,
      stearic: 3,
      ricinoleic: 0,
      oleic: 22,
      linoleic: 60,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 136,
      name: 'Black Current Seed Oil',
      sap: 0.19,
      NaOH: 0.135,
      iodine: 178,
      ins: 12,
      lauric: 0,
      myristic: 0,
      palmitic: 6,
      stearic: 2,
      ricinoleic: 0,
      oleic: 13,
      linoleic: 46,
      linolenic: 29
      , weight: 0
    }
    , {
      id: 66,
      name: 'Borage Oil',
      sap: 0.19,
      NaOH: 0.135,
      iodine: 135,
      ins: 55,
      lauric: 0,
      myristic: 0,
      palmitic: 10,
      stearic: 4,
      ricinoleic: 0,
      oleic: 20,
      linoleic: 43,
      linolenic: 5
      , weight: 0
    }
    , {
      id: 146,
      name: 'Brazil Nut Oil',
      sap: 0.19,
      NaOH: 0.135,
      iodine: 100,
      ins: 90,
      lauric: 0,
      myristic: 0,
      palmitic: 13,
      stearic: 11,
      ricinoleic: 0,
      oleic: 39,
      linoleic: 36,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 138,
      name: 'Broccoli Seed Oil, Brassica Oleracea',
      sap: 0.172,
      NaOH: 0.123,
      iodine: 105,
      ins: 67,
      lauric: 0,
      myristic: 0,
      palmitic: 3,
      stearic: 1,
      ricinoleic: 0,
      oleic: 14,
      linoleic: 11,
      linolenic: 9
      , weight: 0
    }
    , {
      id: 147,
      name: 'Buriti Oil',
      sap: 0.223,
      NaOH: 0.159,
      iodine: 70,
      ins: 153,
      lauric: 0,
      myristic: 0,
      palmitic: 17,
      stearic: 2,
      ricinoleic: 0,
      oleic: 71,
      linoleic: 7,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 60,
      name: 'Camelina Seed Oil',
      sap: 0.188,
      NaOH: 0.134,
      iodine: 144,
      ins: 44,
      lauric: 0,
      myristic: 0,
      palmitic: 6,
      stearic: 2,
      ricinoleic: 0,
      oleic: 24,
      linoleic: 19,
      linolenic: 45
      , weight: 0
    }
    , {
      id: 80,
      name: 'Camellia Oil, Tea Seed',
      sap: 0.193,
      NaOH: 0.138,
      iodine: 78,
      ins: 115,
      lauric: 0,
      myristic: 0,
      palmitic: 9,
      stearic: 2,
      ricinoleic: 0,
      oleic: 77,
      linoleic: 8,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 142,
      name: 'Candelilla Wax',
      sap: 0.044,
      NaOH: 0.031,
      iodine: 32,
      ins: 12,
      lauric: 0,
      myristic: 0,
      palmitic: 0,
      stearic: 0,
      ricinoleic: 0,
      oleic: 0,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 7,
      name: 'Canola Oil',
      sap: 0.186,
      NaOH: 0.133,
      iodine: 110,
      ins: 56,
      lauric: 0,
      myristic: 0,
      palmitic: 4,
      stearic: 2,
      ricinoleic: 0,
      oleic: 61,
      linoleic: 21,
      linolenic: 9
      , weight: 0
    }
    , {
      id: 84,
      name: 'Canola Oil, high oleic',
      sap: 0.186,
      NaOH: 0.133,
      iodine: 96,
      ins: 90,
      lauric: 0,
      myristic: 0,
      palmitic: 4,
      stearic: 2,
      ricinoleic: 0,
      oleic: 74,
      linoleic: 12,
      linolenic: 4
      , weight: 0
    }
    , {
      id: 144,
      name: 'Carrot Seed Oil, cold pressed',
      sap: 0.144,
      NaOH: 0.103,
      iodine: 56,
      ins: 0,
      lauric: 0,
      myristic: 0,
      palmitic: 4,
      stearic: 0,
      ricinoleic: 0,
      oleic: 80,
      linoleic: 13,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 8,
      name: 'Castor Oil',
      sap: 0.18,
      NaOH: 0.128,
      iodine: 86,
      ins: 95,
      lauric: 0,
      myristic: 0,
      palmitic: 0,
      stearic: 0,
      ricinoleic: 90,
      oleic: 4,
      linoleic: 4,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 79,
      name: 'Cherry Kern1 Oil, p. avium',
      sap: 0.19,
      NaOH: 0.135,
      iodine: 128,
      ins: 62,
      lauric: 0,
      myristic: 0,
      palmitic: 8,
      stearic: 3,
      ricinoleic: 0,
      oleic: 31,
      linoleic: 45,
      linolenic: 11
      , weight: 0
    }
    , {
      id: 90,
      name: 'Cherry Kern2 Oil, p. cerasus',
      sap: 0.192,
      NaOH: 0.137,
      iodine: 118,
      ins: 74,
      lauric: 0,
      myristic: 0,
      palmitic: 6,
      stearic: 3,
      ricinoleic: 0,
      oleic: 50,
      linoleic: 40,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 56,
      name: 'Chicken Fat',
      sap: 0.195,
      NaOH: 0.139,
      iodine: 69,
      ins: 130,
      lauric: 0,
      myristic: 1,
      palmitic: 25,
      stearic: 7,
      ricinoleic: 0,
      oleic: 38,
      linoleic: 21,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 9,
      name: 'Cocoa Butter',
      sap: 0.194,
      NaOH: 0.138,
      iodine: 37,
      ins: 157,
      lauric: 0,
      myristic: 0,
      palmitic: 28,
      stearic: 33,
      ricinoleic: 0,
      oleic: 35,
      linoleic: 3,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 10,
      name: 'Coconut Oil, 76 deg',
      sap: 0.257,
      NaOH: 0.183,
      iodine: 10,
      ins: 258,
      lauric: 48,
      myristic: 19,
      palmitic: 9,
      stearic: 3,
      ricinoleic: 0,
      oleic: 8,
      linoleic: 2,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 72,
      name: 'Coconut Oil, 92 deg',
      sap: 0.257,
      NaOH: 0.183,
      iodine: 3,
      ins: 258,
      lauric: 48,
      myristic: 19,
      palmitic: 9,
      stearic: 3,
      ricinoleic: 0,
      oleic: 8,
      linoleic: 2,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 65,
      name: 'Coconut Oil, fractionated',
      sap: 0.325,
      NaOH: 0.232,
      iodine: 1,
      ins: 324,
      lauric: 2,
      myristic: 1,
      palmitic: 0,
      stearic: 0,
      ricinoleic: 0,
      oleic: 0,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 93,
      name: 'Coffee Bean Oil, green',
      sap: 0.185,
      NaOH: 0.132,
      iodine: 85,
      ins: 100,
      lauric: 0,
      myristic: 0,
      palmitic: 38,
      stearic: 8,
      ricinoleic: 0,
      oleic: 9,
      linoleic: 39,
      linolenic: 2
      , weight: 0
    }
    , {
      id: 74,
      name: 'Coffee Bean Oil, roasted',
      sap: 0.18,
      NaOH: 0.128,
      iodine: 87,
      ins: 93,
      lauric: 0,
      myristic: 0,
      palmitic: 40,
      stearic: 0,
      ricinoleic: 0,
      oleic: 8,
      linoleic: 38,
      linolenic: 2
      , weight: 0
    }
    , {
      id: 102,
      name: 'Cohune Oil',
      sap: 0.205,
      NaOH: 0.146,
      iodine: 30,
      ins: 175,
      lauric: 51,
      myristic: 13,
      palmitic: 8,
      stearic: 3,
      ricinoleic: 0,
      oleic: 18,
      linoleic: 3,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 11,
      name: 'Corn Oil',
      sap: 0.192,
      NaOH: 0.137,
      iodine: 117,
      ins: 69,
      lauric: 0,
      myristic: 0,
      palmitic: 12,
      stearic: 2,
      ricinoleic: 0,
      oleic: 32,
      linoleic: 51,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 12,
      name: 'Cottonseed Oil',
      sap: 0.194,
      NaOH: 0.138,
      iodine: 108,
      ins: 89,
      lauric: 0,
      myristic: 0,
      palmitic: 13,
      stearic: 13,
      ricinoleic: 0,
      oleic: 18,
      linoleic: 52,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 92,
      name: 'Cranberry Seed Oil',
      sap: 0.19,
      NaOH: 0.135,
      iodine: 150,
      ins: 40,
      lauric: 0,
      myristic: 0,
      palmitic: 6,
      stearic: 2,
      ricinoleic: 0,
      oleic: 23,
      linoleic: 37,
      linolenic: 32
      , weight: 0
    }
    , {
      id: 104,
      name: 'Crisco, new w/palm',
      sap: 0.193,
      NaOH: 0.138,
      iodine: 111,
      ins: 82,
      lauric: 0,
      myristic: 0,
      palmitic: 20,
      stearic: 5,
      ricinoleic: 0,
      oleic: 28,
      linoleic: 40,
      linolenic: 6
      , weight: 0
    }
    , {
      id: 13,
      name: 'Crisco, old',
      sap: 0.192,
      NaOH: 0.137,
      iodine: 93,
      ins: 115,
      lauric: 0,
      myristic: 0,
      palmitic: 13,
      stearic: 13,
      ricinoleic: 0,
      oleic: 18,
      linoleic: 52,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 101,
      name: 'Cupuacu Butter',
      sap: 0.192,
      NaOH: 0.137,
      iodine: 39,
      ins: 153,
      lauric: 0,
      myristic: 0,
      palmitic: 8,
      stearic: 35,
      ricinoleic: 0,
      oleic: 42,
      linoleic: 2,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 87,
      name: 'Duck Fat, flesh and skin',
      sap: 0.194,
      NaOH: 0.138,
      iodine: 72,
      ins: 122,
      lauric: 0,
      myristic: 1,
      palmitic: 26,
      stearic: 9,
      ricinoleic: 0,
      oleic: 44,
      linoleic: 13,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 14,
      name: 'Emu Oil',
      sap: 0.19,
      NaOH: 0.135,
      iodine: 60,
      ins: 128,
      lauric: 0,
      myristic: 0,
      palmitic: 23,
      stearic: 9,
      ricinoleic: 0,
      oleic: 47,
      linoleic: 8,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 15,
      name: 'Evening Primrose Oil',
      sap: 0.19,
      NaOH: 0.135,
      iodine: 160,
      ins: 30,
      lauric: 0,
      myristic: 0,
      palmitic: 0,
      stearic: 0,
      ricinoleic: 0,
      oleic: 0,
      linoleic: 80,
      linolenic: 9
      , weight: 0
    }
    , {
      id: 16,
      name: 'Flax Oil, linseed',
      sap: 0.19,
      NaOH: 0.135,
      iodine: 180,
      ins: -6,
      lauric: 0,
      myristic: 0,
      palmitic: 6,
      stearic: 3,
      ricinoleic: 0,
      oleic: 27,
      linoleic: 13,
      linolenic: 50
      , weight: 0
    }
    , {
      id: 95,
      name: 'Ghee, any bovine',
      sap: 0.227,
      NaOH: 0.162,
      iodine: 30,
      ins: 191,
      lauric: 4,
      myristic: 11,
      palmitic: 28,
      stearic: 12,
      ricinoleic: 0,
      oleic: 19,
      linoleic: 2,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 17,
      name: 'Goose Fat',
      sap: 0.192,
      NaOH: 0.137,
      iodine: 65,
      ins: 130,
      lauric: 0,
      myristic: 0,
      palmitic: 21,
      stearic: 6,
      ricinoleic: 0,
      oleic: 54,
      linoleic: 10,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 18,
      name: 'Grapeseed Oil',
      sap: 0.181,
      NaOH: 0.129,
      iodine: 131,
      ins: 66,
      lauric: 0,
      myristic: 0,
      palmitic: 8,
      stearic: 4,
      ricinoleic: 0,
      oleic: 20,
      linoleic: 68,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 19,
      name: 'Hazelnut Oil',
      sap: 0.195,
      NaOH: 0.139,
      iodine: 97,
      ins: 94,
      lauric: 0,
      myristic: 0,
      palmitic: 5,
      stearic: 3,
      ricinoleic: 0,
      oleic: 75,
      linoleic: 10,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 20,
      name: 'Hemp Oil',
      sap: 0.193,
      NaOH: 0.138,
      iodine: 165,
      ins: 39,
      lauric: 0,
      myristic: 0,
      palmitic: 6,
      stearic: 2,
      ricinoleic: 0,
      oleic: 12,
      linoleic: 57,
      linolenic: 21
      , weight: 0
    }
    , {
      id: 94,
      name: 'Horse Oil',
      sap: 0.196,
      NaOH: 0.14,
      iodine: 79,
      ins: 117,
      lauric: 0,
      myristic: 3,
      palmitic: 26,
      stearic: 5,
      ricinoleic: 0,
      oleic: 10,
      linoleic: 20,
      linolenic: 19
      , weight: 0
    }
    , {
      id: 62,
      name: 'Illipe Butter',
      sap: 0.185,
      NaOH: 0.132,
      iodine: 33,
      ins: 152,
      lauric: 0,
      myristic: 0,
      palmitic: 17,
      stearic: 45,
      ricinoleic: 0,
      oleic: 35,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 143,
      name: 'Japan Wax',
      sap: 0.215,
      NaOH: 0.153,
      iodine: 11,
      ins: 204,
      lauric: 0,
      myristic: 1,
      palmitic: 80,
      stearic: 7,
      ricinoleic: 0,
      oleic: 4,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 108,
      name: 'Jatropha Oil, soapnut seed oil',
      sap: 0.193,
      NaOH: 0.138,
      iodine: 102,
      ins: 91,
      lauric: 0,
      myristic: 0,
      palmitic: 9,
      stearic: 7,
      ricinoleic: 0,
      oleic: 44,
      linoleic: 34,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 21,
      name: 'Jojoba Oil (a Liquid Wax Ester)',
      sap: 0.092,
      NaOH: 0.066,
      iodine: 83,
      ins: 11,
      lauric: 0,
      myristic: 0,
      palmitic: 0,
      stearic: 0,
      ricinoleic: 0,
      oleic: 12,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 51,
      name: 'Karanja Oil',
      sap: 0.183,
      NaOH: 0.13,
      iodine: 85,
      ins: 98,
      lauric: 0,
      myristic: 0,
      palmitic: 6,
      stearic: 6,
      ricinoleic: 0,
      oleic: 58,
      linoleic: 15,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 23,
      name: 'Kokum Butter',
      sap: 0.19,
      NaOH: 0.135,
      iodine: 35,
      ins: 155,
      lauric: 0,
      myristic: 0,
      palmitic: 4,
      stearic: 56,
      ricinoleic: 0,
      oleic: 36,
      linoleic: 1,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 86,
      name: 'Kpangnan Butter',
      sap: 0.191,
      NaOH: 0.136,
      iodine: 42,
      ins: 149,
      lauric: 0,
      myristic: 0,
      palmitic: 6,
      stearic: 44,
      ricinoleic: 0,
      oleic: 49,
      linoleic: 1,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 24,
      name: 'Kukui nut Oil',
      sap: 0.189,
      NaOH: 0.135,
      iodine: 168,
      ins: 24,
      lauric: 0,
      myristic: 0,
      palmitic: 6,
      stearic: 2,
      ricinoleic: 0,
      oleic: 20,
      linoleic: 42,
      linolenic: 29
      , weight: 0
    }
    , {
      id: 25,
      name: 'Lanolin liquid Wax',
      sap: 0.106,
      NaOH: 0.076,
      iodine: 27,
      ins: 83,
      lauric: 0,
      myristic: 0,
      palmitic: 0,
      stearic: 0,
      ricinoleic: 0,
      oleic: 0,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 26,
      name: 'Lard, Pig Tallow (Manteca)',
      sap: 0.198,
      NaOH: 0.141,
      iodine: 57,
      ins: 139,
      lauric: 0,
      myristic: 1,
      palmitic: 28,
      stearic: 13,
      ricinoleic: 0,
      oleic: 46,
      linoleic: 6,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 127,
      name: 'Laurel Fruit Oil',
      sap: 0.198,
      NaOH: 0.141,
      iodine: 74,
      ins: 124,
      lauric: 25,
      myristic: 1,
      palmitic: 15,
      stearic: 1,
      ricinoleic: 0,
      oleic: 31,
      linoleic: 26,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 125,
      name: 'Lauric Acid',
      sap: 0.28,
      NaOH: 0.2,
      iodine: 0,
      ins: 280,
      lauric: 99,
      myristic: 1,
      palmitic: 0,
      stearic: 0,
      ricinoleic: 0,
      oleic: 0,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 27,
      name: 'Linseed Oil, flax',
      sap: 0.19,
      NaOH: 0.135,
      iodine: 180,
      ins: -6,
      lauric: 0,
      myristic: 0,
      palmitic: 6,
      stearic: 3,
      ricinoleic: 0,
      oleic: 27,
      linoleic: 13,
      linolenic: 50
      , weight: 0
    }
    , {
      id: 119,
      name: 'Loofa Seed Oil, Luffa cylinderica',
      sap: 0.187,
      NaOH: 0.133,
      iodine: 108,
      ins: 79,
      lauric: 0,
      myristic: 0,
      palmitic: 9,
      stearic: 18,
      ricinoleic: 0,
      oleic: 30,
      linoleic: 47,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 124,
      name: 'Macadamia Nut Butter',
      sap: 0.188,
      NaOH: 0.134,
      iodine: 70,
      ins: 118,
      lauric: 0,
      myristic: 1,
      palmitic: 6,
      stearic: 12,
      ricinoleic: 0,
      oleic: 56,
      linoleic: 3,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 28,
      name: 'Macadamia Nut Oil',
      sap: 0.195,
      NaOH: 0.139,
      iodine: 76,
      ins: 119,
      lauric: 0,
      myristic: 0,
      palmitic: 9,
      stearic: 5,
      ricinoleic: 0,
      oleic: 59,
      linoleic: 2,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 141,
      name: 'Mafura Butter, Trichilia emetica ',
      sap: 0.198,
      NaOH: 0.141,
      iodine: 66,
      ins: 132,
      lauric: 0,
      myristic: 1,
      palmitic: 37,
      stearic: 3,
      ricinoleic: 0,
      oleic: 49,
      linoleic: 11,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 29,
      name: 'Mango Seed Butter',
      sap: 0.191,
      NaOH: 0.136,
      iodine: 45,
      ins: 146,
      lauric: 0,
      myristic: 0,
      palmitic: 7,
      stearic: 42,
      ricinoleic: 0,
      oleic: 45,
      linoleic: 3,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 30,
      name: 'Mango Seed Oil',
      sap: 0.19,
      NaOH: 0.135,
      iodine: 60,
      ins: 130,
      lauric: 0,
      myristic: 0,
      palmitic: 8,
      stearic: 27,
      ricinoleic: 0,
      oleic: 52,
      linoleic: 8,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 99,
      name: 'Marula Oil',
      sap: 0.192,
      NaOH: 0.137,
      iodine: 73,
      ins: 119,
      lauric: 0,
      myristic: 0,
      palmitic: 11,
      stearic: 7,
      ricinoleic: 0,
      oleic: 75,
      linoleic: 4,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 31,
      name: 'Meadowfoam Oil',
      sap: 0.169,
      NaOH: 0.12,
      iodine: 92,
      ins: 77,
      lauric: 0,
      myristic: 0,
      palmitic: 0,
      stearic: 0,
      ricinoleic: 0,
      oleic: 0,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 32,
      name: 'Milk Fat, any bovine',
      sap: 0.227,
      NaOH: 0.162,
      iodine: 30,
      ins: 191,
      lauric: 4,
      myristic: 11,
      palmitic: 28,
      stearic: 12,
      ricinoleic: 0,
      oleic: 19,
      linoleic: 2,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 130,
      name: 'Milk Thistle Oil',
      sap: 0.196,
      NaOH: 0.14,
      iodine: 115,
      ins: 81,
      lauric: 0,
      myristic: 0,
      palmitic: 7,
      stearic: 2,
      ricinoleic: 0,
      oleic: 26,
      linoleic: 64,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 67,
      name: 'Mink Oil',
      sap: 0.196,
      NaOH: 0.14,
      iodine: 55,
      ins: 141,
      lauric: 0,
      myristic: 0,
      palmitic: 0,
      stearic: 0,
      ricinoleic: 0,
      oleic: 0,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 69,
      name: 'Monoi de Tahiti  Oil',
      sap: 0.255,
      NaOH: 0.182,
      iodine: 9,
      ins: 246,
      lauric: 44,
      myristic: 16,
      palmitic: 10,
      stearic: 3,
      ricinoleic: 0,
      oleic: 0,
      linoleic: 2,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 109,
      name: 'Moringa Oil',
      sap: 0.192,
      NaOH: 0.137,
      iodine: 68,
      ins: 124,
      lauric: 0,
      myristic: 0,
      palmitic: 7,
      stearic: 7,
      ricinoleic: 0,
      oleic: 71,
      linoleic: 2,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 63,
      name: 'Mowrah Butter',
      sap: 0.194,
      NaOH: 0.138,
      iodine: 62,
      ins: 132,
      lauric: 0,
      myristic: 0,
      palmitic: 24,
      stearic: 22,
      ricinoleic: 0,
      oleic: 36,
      linoleic: 15,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 106,
      name: 'Murumuru Butter',
      sap: 0.275,
      NaOH: 0.196,
      iodine: 25,
      ins: 250,
      lauric: 47,
      myristic: 26,
      palmitic: 6,
      stearic: 3,
      ricinoleic: 0,
      oleic: 15,
      linoleic: 3,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 103,
      name: 'Mustard Oil, kachi ghani',
      sap: 0.173,
      NaOH: 0.123,
      iodine: 101,
      ins: 72,
      lauric: 0,
      myristic: 0,
      palmitic: 2,
      stearic: 2,
      ricinoleic: 0,
      oleic: 18,
      linoleic: 14,
      linolenic: 9
      , weight: 0
    }
    , {
      id: 76,
      name: 'Myristic Acid',
      sap: 0.247,
      NaOH: 0.176,
      iodine: 1,
      ins: 246,
      lauric: 0,
      myristic: 99,
      palmitic: 0,
      stearic: 0,
      ricinoleic: 0,
      oleic: 0,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 121,
      name: 'Neatsfoot Oil',
      sap: 0.18,
      NaOH: 0.128,
      iodine: 90,
      ins: 90,
      lauric: 0,
      myristic: 0,
      palmitic: 0,
      stearic: 0,
      ricinoleic: 0,
      oleic: 0,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 33,
      name: 'Neem Seed Oil',
      sap: 0.193,
      NaOH: 0.138,
      iodine: 72,
      ins: 121,
      lauric: 0,
      myristic: 2,
      palmitic: 21,
      stearic: 16,
      ricinoleic: 0,
      oleic: 46,
      linoleic: 12,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 139,
      name: 'Nutmeg Butter',
      sap: 0.1624,
      NaOH: 0.116,
      iodine: 46,
      ins: 116,
      lauric: 3,
      myristic: 83,
      palmitic: 4,
      stearic: 0,
      ricinoleic: 0,
      oleic: 5,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 117,
      name: 'Oat Oil',
      sap: 0.19,
      NaOH: 0.135,
      iodine: 104,
      ins: 86,
      lauric: 0,
      myristic: 0,
      palmitic: 15,
      stearic: 2,
      ricinoleic: 0,
      oleic: 40,
      linoleic: 39,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 88,
      name: 'Oleic Acid',
      sap: 0.202,
      NaOH: 0.144,
      iodine: 92,
      ins: 110,
      lauric: 0,
      myristic: 0,
      palmitic: 0,
      stearic: 0,
      ricinoleic: 0,
      oleic: 99,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 34,
      name: 'Olive Oil',
      sap: 0.19,
      NaOH: 0.135,
      iodine: 85,
      ins: 105,
      lauric: 0,
      myristic: 0,
      palmitic: 14,
      stearic: 3,
      ricinoleic: 0,
      oleic: 69,
      linoleic: 12,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 52,
      name: 'Olive Oil  pomace',
      sap: 0.188,
      NaOH: 0.134,
      iodine: 84,
      ins: 104,
      lauric: 0,
      myristic: 0,
      palmitic: 14,
      stearic: 3,
      ricinoleic: 0,
      oleic: 69,
      linoleic: 12,
      linolenic: 2
      , weight: 0
    }
    , {
      id: 82,
      name: 'Ostrich Oil',
      sap: 0.1946,
      NaOH: 0.139,
      iodine: 97,
      ins: 128,
      lauric: 3,
      myristic: 1,
      palmitic: 26,
      stearic: 6,
      ricinoleic: 0,
      oleic: 37,
      linoleic: 17,
      linolenic: 3
      , weight: 0
    }
    , {
      id: 35,
      name: 'Palm Kernel Oil',
      sap: 0.247,
      NaOH: 0.176,
      iodine: 20,
      ins: 227,
      lauric: 49,
      myristic: 16,
      palmitic: 8,
      stearic: 2,
      ricinoleic: 0,
      oleic: 15,
      linoleic: 3,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 126,
      name: 'Palm Kernel Oil Flakes, hydrogenated',
      sap: 0.247,
      NaOH: 0.176,
      iodine: 20,
      ins: 227,
      lauric: 49,
      myristic: 17,
      palmitic: 8,
      stearic: 16,
      ricinoleic: 0,
      oleic: 4,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 36,
      name: 'Palm Oil',
      sap: 0.199,
      NaOH: 0.142,
      iodine: 53,
      ins: 145,
      lauric: 0,
      myristic: 1,
      palmitic: 44,
      stearic: 5,
      ricinoleic: 0,
      oleic: 39,
      linoleic: 10,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 113,
      name: 'Palm Stearin',
      sap: 0.199,
      NaOH: 0.142,
      iodine: 48,
      ins: 151,
      lauric: 0,
      myristic: 2,
      palmitic: 60,
      stearic: 5,
      ricinoleic: 0,
      oleic: 26,
      linoleic: 7,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 77,
      name: 'Palmitic Acid',
      sap: 0.215,
      NaOH: 0.153,
      iodine: 2,
      ins: 213,
      lauric: 0,
      myristic: 0,
      palmitic: 98,
      stearic: 0,
      ricinoleic: 0,
      oleic: 0,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 131,
      name: 'Palmolein',
      sap: 0.2,
      NaOH: 0.143,
      iodine: 58,
      ins: 142,
      lauric: 0,
      myristic: 1,
      palmitic: 40,
      stearic: 5,
      ricinoleic: 0,
      oleic: 43,
      linoleic: 11,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 120,
      name: 'Papaya seed oil, Carica papaya',
      sap: 0.158,
      NaOH: 0.113,
      iodine: 67,
      ins: 91,
      lauric: 0,
      myristic: 0,
      palmitic: 13,
      stearic: 5,
      ricinoleic: 0,
      oleic: 76,
      linoleic: 3,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 37,
      name: 'Passion Fruit Seed Oil',
      sap: 0.183,
      NaOH: 0.13,
      iodine: 136,
      ins: 47,
      lauric: 0,
      myristic: 0,
      palmitic: 10,
      stearic: 3,
      ricinoleic: 0,
      oleic: 15,
      linoleic: 70,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 148,
      name: 'Pataua (Patawa) Oil',
      sap: 0.2,
      NaOH: 0.143,
      iodine: 77,
      ins: 123,
      lauric: 0,
      myristic: 0,
      palmitic: 13,
      stearic: 4,
      ricinoleic: 0,
      oleic: 78,
      linoleic: 3,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 70,
      name: 'Peach Kernel Oil',
      sap: 0.191,
      NaOH: 0.136,
      iodine: 108,
      ins: 87,
      lauric: 0,
      myristic: 0,
      palmitic: 6,
      stearic: 2,
      ricinoleic: 0,
      oleic: 65,
      linoleic: 25,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 38,
      name: 'Peanut Oil',
      sap: 0.192,
      NaOH: 0.137,
      iodine: 92,
      ins: 99,
      lauric: 0,
      myristic: 0,
      palmitic: 8,
      stearic: 3,
      ricinoleic: 0,
      oleic: 56,
      linoleic: 26,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 137,
      name: 'Pecan Oil',
      sap: 0.19,
      NaOH: 0.135,
      iodine: 113,
      ins: 77,
      lauric: 0,
      myristic: 0,
      palmitic: 7,
      stearic: 2,
      ricinoleic: 0,
      oleic: 50,
      linoleic: 39,
      linolenic: 2
      , weight: 0
    }
    , {
      id: 75,
      name: 'Perilla Seed Oil',
      sap: 0.19,
      NaOH: 0.135,
      iodine: 196,
      ins: -6,
      lauric: 0,
      myristic: 0,
      palmitic: 6,
      stearic: 2,
      ricinoleic: 0,
      oleic: 15,
      linoleic: 16,
      linolenic: 56
      , weight: 0
    }
    , {
      id: 85,
      name: 'Pine Tar, lye calc only no FA',
      sap: 0.06,
      NaOH: 0.043,
      iodine: 0,
      ins: 0,
      lauric: 0,
      myristic: 0,
      palmitic: 0,
      stearic: 0,
      ricinoleic: 0,
      oleic: 0,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 39,
      name: 'Pistachio Oil',
      sap: 0.186,
      NaOH: 0.133,
      iodine: 95,
      ins: 92,
      lauric: 0,
      myristic: 0,
      palmitic: 11,
      stearic: 1,
      ricinoleic: 0,
      oleic: 63,
      linoleic: 25,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 107,
      name: 'Plum Kernel Oil',
      sap: 0.194,
      NaOH: 0.138,
      iodine: 98,
      ins: 96,
      lauric: 0,
      myristic: 0,
      palmitic: 3,
      stearic: 0,
      ricinoleic: 0,
      oleic: 68,
      linoleic: 23,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 128,
      name: 'Pomegranate Seed Oil',
      sap: 0.19,
      NaOH: 0.135,
      iodine: 22,
      ins: 168,
      lauric: 0,
      myristic: 0,
      palmitic: 3,
      stearic: 3,
      ricinoleic: 0,
      oleic: 7,
      linoleic: 7,
      linolenic: 78
      , weight: 0
    }
    , {
      id: 73,
      name: 'Poppy Seed Oil',
      sap: 0.194,
      NaOH: 0.138,
      iodine: 140,
      ins: 54,
      lauric: 0,
      myristic: 0,
      palmitic: 10,
      stearic: 2,
      ricinoleic: 0,
      oleic: 17,
      linoleic: 69,
      linolenic: 2
      , weight: 0
    }
    , {
      id: 149,
      name: 'Pracaxi (Pracachy) Seed Oil - hair conditioner',
      sap: 0.175,
      NaOH: 0.125,
      iodine: 68,
      ins: 107,
      lauric: 1,
      myristic: 1,
      palmitic: 2,
      stearic: 2,
      ricinoleic: 0,
      oleic: 44,
      linoleic: 2,
      linolenic: 2
      , weight: 0
    }
    , {
      id: 83,
      name: 'Pumpkin Seed Oil virgin',
      sap: 0.195,
      NaOH: 0.139,
      iodine: 128,
      ins: 67,
      lauric: 0,
      myristic: 0,
      palmitic: 11,
      stearic: 8,
      ricinoleic: 0,
      oleic: 33,
      linoleic: 50,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 91,
      name: 'Rabbit Fat',
      sap: 0.201,
      NaOH: 0.143,
      iodine: 85,
      ins: 116,
      lauric: 0,
      myristic: 3,
      palmitic: 30,
      stearic: 6,
      ricinoleic: 0,
      oleic: 30,
      linoleic: 20,
      linolenic: 5
      , weight: 0
    }
    , {
      id: 40,
      name: 'Rapeseed Oil, unrefined canola',
      sap: 0.175,
      NaOH: 0.125,
      iodine: 106,
      ins: 69,
      lauric: 0,
      myristic: 0,
      palmitic: 4,
      stearic: 1,
      ricinoleic: 0,
      oleic: 17,
      linoleic: 13,
      linolenic: 9
      , weight: 0
    }
    , {
      id: 129,
      name: 'Raspberry Seed Oil',
      sap: 0.187,
      NaOH: 0.133,
      iodine: 163,
      ins: 24,
      lauric: 0,
      myristic: 0,
      palmitic: 3,
      stearic: 0,
      ricinoleic: 0,
      oleic: 13,
      linoleic: 55,
      linolenic: 26
      , weight: 0
    }
    , {
      id: 89,
      name: 'Red Palm Butter',
      sap: 0.199,
      NaOH: 0.142,
      iodine: 53,
      ins: 145,
      lauric: 0,
      myristic: 1,
      palmitic: 44,
      stearic: 5,
      ricinoleic: 0,
      oleic: 39,
      linoleic: 10,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 41,
      name: 'Rice Bran Oil, refined',
      sap: 0.187,
      NaOH: 0.133,
      iodine: 100,
      ins: 87,
      lauric: 0,
      myristic: 1,
      palmitic: 22,
      stearic: 3,
      ricinoleic: 0,
      oleic: 38,
      linoleic: 34,
      linolenic: 2
      , weight: 0
    }
    , {
      id: 61,
      name: 'Rosehip Oil',
      sap: 0.187,
      NaOH: 0.133,
      iodine: 188,
      ins: 10,
      lauric: 0,
      myristic: 0,
      palmitic: 4,
      stearic: 2,
      ricinoleic: 0,
      oleic: 12,
      linoleic: 46,
      linolenic: 31
      , weight: 0
    }
    , {
      id: 122,
      name: 'Sacha Inchi, Plukenetia volubilis',
      sap: 0.188,
      NaOH: 0.134,
      iodine: 141,
      ins: 47,
      lauric: 0,
      myristic: 0,
      palmitic: 4,
      stearic: 3,
      ricinoleic: 0,
      oleic: 10,
      linoleic: 35,
      linolenic: 48
      , weight: 0
    }
    , {
      id: 42,
      name: 'Safflower Oil',
      sap: 0.192,
      NaOH: 0.137,
      iodine: 145,
      ins: 47,
      lauric: 0,
      myristic: 0,
      palmitic: 7,
      stearic: 0,
      ricinoleic: 0,
      oleic: 15,
      linoleic: 75,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 78,
      name: 'Safflower Oil, high oleic',
      sap: 0.19,
      NaOH: 0.135,
      iodine: 93,
      ins: 97,
      lauric: 0,
      myristic: 0,
      palmitic: 5,
      stearic: 2,
      ricinoleic: 0,
      oleic: 77,
      linoleic: 15,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 64,
      name: 'Sal Butter',
      sap: 0.185,
      NaOH: 0.132,
      iodine: 39,
      ins: 146,
      lauric: 0,
      myristic: 0,
      palmitic: 6,
      stearic: 44,
      ricinoleic: 0,
      oleic: 40,
      linoleic: 2,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 140,
      name: 'Salmon Oil',
      sap: 0.185,
      NaOH: 0.132,
      iodine: 169,
      ins: 16,
      lauric: 0,
      myristic: 5,
      palmitic: 19,
      stearic: 2,
      ricinoleic: 0,
      oleic: 23,
      linoleic: 2,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 111,
      name: 'Saw Palmetto Extract',
      sap: 0.23,
      NaOH: 0.164,
      iodine: 45,
      ins: 185,
      lauric: 29,
      myristic: 11,
      palmitic: 8,
      stearic: 2,
      ricinoleic: 0,
      oleic: 35,
      linoleic: 4,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 110,
      name: 'Saw Palmetto Oil',
      sap: 0.22,
      NaOH: 0.157,
      iodine: 44,
      ins: 176,
      lauric: 29,
      myristic: 13,
      palmitic: 9,
      stearic: 2,
      ricinoleic: 0,
      oleic: 31,
      linoleic: 4,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 116,
      name: 'Sea Buckthorn Oil, seed',
      sap: 0.195,
      NaOH: 0.139,
      iodine: 165,
      ins: 30,
      lauric: 0,
      myristic: 0,
      palmitic: 7,
      stearic: 3,
      ricinoleic: 0,
      oleic: 14,
      linoleic: 36,
      linolenic: 38
      , weight: 0
    }
    , {
      id: 115,
      name: 'Sea Buckthorn Oil, seed and berry',
      sap: 0.183,
      NaOH: 0.13,
      iodine: 86,
      ins: 97,
      lauric: 0,
      myristic: 0,
      palmitic: 30,
      stearic: 1,
      ricinoleic: 0,
      oleic: 28,
      linoleic: 10,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 43,
      name: 'Sesame Oil',
      sap: 0.188,
      NaOH: 0.134,
      iodine: 110,
      ins: 81,
      lauric: 0,
      myristic: 0,
      palmitic: 10,
      stearic: 5,
      ricinoleic: 0,
      oleic: 40,
      linoleic: 43,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 44,
      name: 'Shea Butter',
      sap: 0.179,
      NaOH: 0.128,
      iodine: 59,
      ins: 116,
      lauric: 0,
      myristic: 0,
      palmitic: 5,
      stearic: 40,
      ricinoleic: 0,
      oleic: 48,
      linoleic: 6,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 22,
      name: 'Shea Oil, fractionated',
      sap: 0.185,
      NaOH: 0.132,
      iodine: 83,
      ins: 102,
      lauric: 0,
      myristic: 0,
      palmitic: 6,
      stearic: 10,
      ricinoleic: 0,
      oleic: 73,
      linoleic: 11,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 133,
      name: 'SoapQuick, conventional',
      sap: 0.212,
      NaOH: 0.151,
      iodine: 59,
      ins: 153,
      lauric: 13,
      myristic: 6,
      palmitic: 17,
      stearic: 3,
      ricinoleic: 5,
      oleic: 42,
      linoleic: 8,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 134,
      name: 'SoapQuick, organic',
      sap: 0.213,
      NaOH: 0.152,
      iodine: 56,
      ins: 156,
      lauric: 13,
      myristic: 5,
      palmitic: 20,
      stearic: 3,
      ricinoleic: 0,
      oleic: 45,
      linoleic: 10,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 45,
      name: 'Soybean Oil',
      sap: 0.191,
      NaOH: 0.136,
      iodine: 131,
      ins: 61,
      lauric: 0,
      myristic: 0,
      palmitic: 11,
      stearic: 5,
      ricinoleic: 0,
      oleic: 24,
      linoleic: 50,
      linolenic: 8
      , weight: 0
    }
    , {
      id: 81,
      name: 'Soybean, 27.5% hydrogenated',
      sap: 0.191,
      NaOH: 0.136,
      iodine: 78,
      ins: 113,
      lauric: 0,
      myristic: 0,
      palmitic: 9,
      stearic: 15,
      ricinoleic: 0,
      oleic: 41,
      linoleic: 7,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 132,
      name: 'Soybean, fully hydrogenated (soy wax)',
      sap: 0.192,
      NaOH: 0.137,
      iodine: 1,
      ins: 191,
      lauric: 0,
      myristic: 0,
      palmitic: 11,
      stearic: 87,
      ricinoleic: 0,
      oleic: 0,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 46,
      name: 'Stearic Acid',
      sap: 0.198,
      NaOH: 0.141,
      iodine: 2,
      ins: 196,
      lauric: 0,
      myristic: 0,
      palmitic: 0,
      stearic: 99,
      ricinoleic: 0,
      oleic: 0,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 47,
      name: 'Sunflower Oil',
      sap: 0.189,
      NaOH: 0.135,
      iodine: 133,
      ins: 63,
      lauric: 0,
      myristic: 0,
      palmitic: 7,
      stearic: 4,
      ricinoleic: 0,
      oleic: 16,
      linoleic: 70,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 71,
      name: 'Sunflower Oil, high oleic',
      sap: 0.189,
      NaOH: 0.135,
      iodine: 83,
      ins: 106,
      lauric: 0,
      myristic: 0,
      palmitic: 3,
      stearic: 4,
      ricinoleic: 0,
      oleic: 83,
      linoleic: 4,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 112,
      name: 'Tallow Bear',
      sap: 0.1946,
      NaOH: 0.139,
      iodine: 92,
      ins: 100,
      lauric: 0,
      myristic: 2,
      palmitic: 7,
      stearic: 3,
      ricinoleic: 0,
      oleic: 70,
      linoleic: 9,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 48,
      name: 'Tallow Beef',
      sap: 0.2,
      NaOH: 0.143,
      iodine: 45,
      ins: 147,
      lauric: 2,
      myristic: 6,
      palmitic: 28,
      stearic: 22,
      ricinoleic: 0,
      oleic: 36,
      linoleic: 3,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 54,
      name: 'Tallow Deer',
      sap: 0.193,
      NaOH: 0.138,
      iodine: 31,
      ins: 166,
      lauric: 0,
      myristic: 1,
      palmitic: 20,
      stearic: 24,
      ricinoleic: 0,
      oleic: 30,
      linoleic: 15,
      linolenic: 3
      , weight: 0
    }
    , {
      id: 123,
      name: 'Tallow Goat',
      sap: 0.192,
      NaOH: 0.137,
      iodine: 40,
      ins: 152,
      lauric: 5,
      myristic: 11,
      palmitic: 23,
      stearic: 30,
      ricinoleic: 0,
      oleic: 29,
      linoleic: 2,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 55,
      name: 'Tallow Sheep',
      sap: 0.194,
      NaOH: 0.138,
      iodine: 54,
      ins: 156,
      lauric: 4,
      myristic: 10,
      palmitic: 24,
      stearic: 13,
      ricinoleic: 0,
      oleic: 26,
      linoleic: 5,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 57,
      name: 'Tamanu Oil, kamani',
      sap: 0.208,
      NaOH: 0.148,
      iodine: 111,
      ins: 82,
      lauric: 0,
      myristic: 0,
      palmitic: 12,
      stearic: 13,
      ricinoleic: 0,
      oleic: 34,
      linoleic: 38,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 97,
      name: 'Tucuma Seed Butter',
      sap: 0.238,
      NaOH: 0.17,
      iodine: 13,
      ins: 175,
      lauric: 48,
      myristic: 23,
      palmitic: 6,
      stearic: 0,
      ricinoleic: 0,
      oleic: 13,
      linoleic: 0,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 100,
      name: 'Ucuuba Butter',
      sap: 0.205,
      NaOH: 0.146,
      iodine: 38,
      ins: 167,
      lauric: 0,
      myristic: 0,
      palmitic: 0,
      stearic: 31,
      ricinoleic: 0,
      oleic: 44,
      linoleic: 5,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 105,
      name: 'Walmart GV Shortening, tallow, palm',
      sap: 0.198,
      NaOH: 0.141,
      iodine: 49,
      ins: 151,
      lauric: 1,
      myristic: 4,
      palmitic: 35,
      stearic: 14,
      ricinoleic: 0,
      oleic: 37,
      linoleic: 6,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 49,
      name: 'Walnut Oil',
      sap: 0.189,
      NaOH: 0.135,
      iodine: 145,
      ins: 45,
      lauric: 0,
      myristic: 0,
      palmitic: 7,
      stearic: 2,
      ricinoleic: 0,
      oleic: 18,
      linoleic: 60,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 135,
      name: 'Watermelon Seed Oil',
      sap: 0.19,
      NaOH: 0.135,
      iodine: 119,
      ins: 71,
      lauric: 0,
      myristic: 0,
      palmitic: 11,
      stearic: 10,
      ricinoleic: 0,
      oleic: 18,
      linoleic: 60,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 50,
      name: 'Wheat Germ Oil',
      sap: 0.183,
      NaOH: 0.13,
      iodine: 128,
      ins: 58,
      lauric: 0,
      myristic: 0,
      palmitic: 17,
      stearic: 2,
      ricinoleic: 0,
      oleic: 17,
      linoleic: 58,
      linolenic: 0
      , weight: 0
    }
    , {
      id: 98,
      name: 'Yangu, cape chestnut',
      sap: 0.192,
      NaOH: 0.137,
      iodine: 95,
      ins: 97,
      lauric: 0,
      myristic: 0,
      palmitic: 18,
      stearic: 5,
      ricinoleic: 0,
      oleic: 45,
      linoleic: 30,
      linolenic: 1
      , weight: 0
    }
    , {
      id: 118,
      name: 'Zapote seed oil, (Aceite de Sapuyul or Mamey)',
      sap: 0.188,
      NaOH: 0.134,
      iodine: 72,
      ins: 116,
      lauric: 0,
      myristic: 0,
      palmitic: 9,
      stearic: 21,
      ricinoleic: 0,
      oleic: 52,
      linoleic: 13,
      linolenic: 0
      , weight: 0
    }
  ]
export default oilsAPI;

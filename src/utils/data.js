const auctionsTypes = ["All", "Sale", "NotForSale"];
const types = [
  "sword",
  "hands armor",
  "head armor",
  "feet armor",
  "legs armor",
  "chest armor",
];
const qualities = ["basic", "ultimate", "enhanced", "advanced", "super"];
const requiresLevels = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const properties = {
  combat: {
    sword: [
      {
        name: "sword",
        stats: ["combatatt"],
      },
      {
        name: "bow",
        stats: ["combatatt"],
      },
      {
        name: "hammer",
        stats: ["combatatt"],
      },
    ],
    armor: [
      {
        name: "hands armor",
        stats: ["combatdef"],
      },
      {
        name: "head armor",
        stats: ["combatdef"],
      },
      {
        name: "feet armor",
        stats: ["combatdef"],
      },
      {
        name: "legs armor",
        stats: ["combatdef"],
      },
      {
        name: "chest armor",
        stats: ["combatdef"],
      },
    ],
  },
  farming: {
    sword: [
      { name: "hoe", stats: ["fertilitycapacity"] },
      { name: "kettle", stats: ["wateringeffect"] },
      { name: "brush", stats: ["pethappinesscapacity"] },
    ],
    armor: [
      { name: "hands armor", stats: ["breedingproficiency"] },
      { name: "head armor", stats: ["breedingproficiency"] },
      { name: "feet armor", stats: ["breedingproficiency"] },
      { name: "legs armor", stats: ["breedingproficiency"] },
      { name: "chest armor", stats: ["breedingproficiency"] },
    ],
  },
  gathering: {
    sword: [
      { name: "sickle", stats: ["grassatt"] },
      { name: "axe", stats: ["treeatt"] },
      { name: "pickaxe", stats: ["oreatt"] },
    ],
    armor: [
      {
        name: "hands armor",
        stats: ["grassproficiency", "oreproficiency", "treeproficiency"],
      },
      {
        name: "head armor",
        stats: ["grassproficiency", "oreproficiency", "treeproficiency"],
      },
      {
        name: "feet armor",
        stats: ["grassproficiency", "oreproficiency", "treeproficiency"],
      },
      {
        name: "legs armor",
        stats: ["grassproficiency", "oreproficiency", "treeproficiency"],
      },
      {
        name: "chest armor",
        stats: ["grassproficiency", "oreproficiency", "treeproficiency"],
      },
    ],
  },
};

export { auctionsTypes, types, qualities, requiresLevels, properties };

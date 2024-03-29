/**
 * These tasks are more complicated! Using combinations of arrays and objects is very common, here you will need to combine what you know about both to complete the tasks.
 */

unitedKingdom = [
  {
    name: "Scotland",
    capital: "Edinburgh",
    population: 5454000,
    touristAttractions: ["Stirling Castle", "Loch Ness"],
  },
  {
    name: "England",
    capital: "London",
    population: 55980000,
  },
  {
    name: "Wales",
    capital: "Swansea",
    population: 3163000,
    touristAttractions: ["Snowdonia"],
  },
  {
    name: "Northern Ireland",
    capital: "Belfast",
    population: 1885000,
    touristAttractions: ["Titanic Museum", "Giant's Causeway"],
  },
];

/**
 * Q1. Add some tourist attractions to England
 */
england = unitedKingdom.find((place) => place.name === "England");
england.touristAttractions = ["Tower Bridge", "The british Museum"];

// console.log(england);

/**
 * Q2. Change the capital of Wales to "Cardiff"
 */

wales = unitedKingdom.find((place) => place.name === "Wales");
wales.capital = "Cardiff";

// console.log(wales);

/**
 * Q3. Find a method in the documentation which will give you all of the available keys for Northern Ireland
 */

northernIrelandKeys = Object.keys(unitedKingdom.find((place) => place.name === "Northern Ireland"));

console.log(northernIrelandKeys);

/**
 * Q4. Use an if statement to compare the population of Scotland to the population of Wales, and say which is bigger.
 */
populationScotland = unitedKingdom.find((place) => place.name === "Scotland").population;

if(populationScotland > wales.population){
  console.log("Population of Scotland (" + populationScotland + ") is bigger than population of Wales (" + wales.population + ")");
}else{
  console.log("Population of Wales (" + wales.population + ") is bigger than population of Scotland (" + populationScotland + ")");
}
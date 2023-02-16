import {
  pixelBodyAccFlamingo,
  pixelBodyAccFloatieBlue,
  pixelBodyAccFloatieGreen,
  pixelBodyAccFloatiePink,
  pixelBodyAccPoolychain,
  pixelBodyAccSuitBlack,
  pixelBodyAccSuitBrown,
  pixelBodyAccSuitTan
} from './output/bodyAcc';

export const pixelPoolyBodyAcc = [
  { tier: 0, layer: 8, frame: 0, expiry: 0, traitName: "None", traitDescription: "Some Pooly's don't need threads to be reppin'.", stats: [], SVG:"" },
  { tier: 1, layer: 8, frame: 1, expiry: 0, traitName: "Flamingo", traitDescription: "Floating in pool with a feathered friend.", stats: [{ categoryType: "agility", value: 1,}, {categoryType: "luck", value: 1,}], SVG: pixelBodyAccFlamingo.data, },
  { tier: 2, layer: 8, frame: 2, expiry: 0, traitName: "Pooly Chain", traitDescription: "Even a birb can be a little gangsta, sometimes.", stats: [{ categoryType: "charisma", value: 2,}, {categoryType: "luck", value: 2,}], SVG: pixelBodyAccPoolychain.data, },
  { tier: 1, layer: 8, frame: 3, expiry: 0, traitName: "Black Suit", traitDescription: "Pooly has a dapper side in this black suit.", stats: [{ categoryType: "charisma", value: 2,}], SVG: pixelBodyAccSuitBlack.data, },
  { tier: 1, layer: 8, frame: 4, expiry: 0, traitName: "Brown Suit", traitDescription: "Pooly has a dapper side in this brown suit.", stats: [{ categoryType: "charisma", value: 2,}], SVG: pixelBodyAccSuitBrown.data, },
  { tier: 1, layer: 8, frame: 5, expiry: 0, traitName: "Tan Suit", traitDescription: "Pooly has a dapper side in this tan suit.", stats: [{ categoryType: "charisma", value: 2,}], SVG: pixelBodyAccSuitTan.data, },
  { tier: 0, layer: 8, frame: 6, expiry: 0, traitName: "Blue Floatie", traitDescription: "Pooly struts some blue floaties for speed in the water.", stats: [], SVG: pixelBodyAccFloatieBlue.data, },
  { tier: 0, layer: 8, frame: 7, expiry: 0, traitName: "Green Floatie", traitDescription: "Pooly struts some green floaties for speed in the water.", stats: [], SVG: pixelBodyAccFloatieGreen.data, },
  { tier: 0, layer: 8, frame: 8, expiry: 0, traitName: "Pink Floatie", traitDescription: "Pooly struts some pink floaties for speed in the water.", stats: [], SVG: pixelBodyAccFloatiePink.data, }
];

export default pixelPoolyBodyAcc;

import {
  pixelLeftWingAccCane,
  pixelLeftWingAccCocktail,
  pixelLeftWingAccDefendershield,
  pixelLeftWingAccGavel,
  pixelLeftWingAccNoodleBlue,
  pixelLeftWingAccNoodleGreen,
  pixelLeftWingAccNoodlePink,
  pixelLeftWingAccTornadoshield,
  pixelLeftWingAccTrophy,
  pixelLeftWingAccUmbrellaBlue,
  pixelLeftWingAccUmbrellaGreen,
  pixelLeftWingAccUmbrellaPink
} from './output/leftAcc';

export const pixelPoolyLeftAcc = [
  { tier: 0, layer: 10, frame: 0, expiry: 0, traitName: "None", traitDescription: "Keep that right wing open for what's coming next.", stats: [], SVG:"" },
  { tier: 0, layer: 10, frame: 1, expiry: 0, traitName: "Blue Umbrella", traitDescription: "Protect Pooly, rain or shine, with this handy, little blue umbrella.", stats: [], SVG: pixelLeftWingAccUmbrellaBlue.data, },
  { tier: 0, layer: 10, frame: 2, expiry: 0, traitName: "Green Umbrella", traitDescription: "Protect Pooly, rain or shine, with this handy, little green umbrella.", stats: [], SVG: pixelLeftWingAccUmbrellaGreen.data, },
  { tier: 0, layer: 10, frame: 3, expiry: 0, traitName: "Pink Umbrella", traitDescription: "Protect Pooly, rain or shine, with this handy, little pink umbrella.", stats: [], SVG: pixelLeftWingAccUmbrellaPink.data, },
  { tier: 1, layer: 10, frame: 4, expiry: 0, traitName: "Glitzy Cane", traitDescription: "Walk tall, stroll fancy, and pop some heads when Pooly marches.", stats: [{ categoryType: "charisma", value: 1,}, {categoryType: "luck", value: 1,}], SVG: pixelLeftWingAccCane.data, },
  { tier: 3, layer: 10, frame: 5, expiry: 0, traitName: "Defender Shield", traitDescription: "Start the shield wall with this Defender Shield.", stats: [{ categoryType: "defense", value: 3,}, {categoryType: "constitution", value: 2,}], SVG: pixelLeftWingAccDefendershield.data, },
  { tier: 2, layer: 10, frame: 6, expiry: 0, traitName: "Judges Gavel", traitDescription: "Pooly's voice will echo like the smack of the gavel.", stats: [{ categoryType: "wisdom", value: 3,}, {categoryType: "defense", value: 1,}], SVG: pixelLeftWingAccGavel.data, },
  { tier: 0, layer: 10, frame: 7, expiry: 0, traitName: "Blue Pool Noodle", traitDescription: "Why fly when you can float, with style.", stats: [], SVG: pixelLeftWingAccNoodleBlue.data, },
  { tier: 0, layer: 10, frame: 8, expiry: 0, traitName: "Green Pool Noodle", traitDescription: "Why fly when you can float, with style.", stats: [], SVG: pixelLeftWingAccNoodleGreen.data, },
  { tier: 0, layer: 10, frame: 9, expiry: 0, traitName: "Pink Pool Noodle", traitDescription: "Why fly when you can float, with style.", stats: [], SVG: pixelLeftWingAccNoodlePink.data, },
  { tier: 1, layer: 10, frame: 10, expiry: 0, traitName: "Tornado Shield", traitDescription: "Defending DeFi with the power of a tornado.", stats: [{ categoryType: "defense", value: 1,}, {categoryType: "strength", value: 1,}], SVG: pixelLeftWingAccTornadoshield.data, },
  { tier: 0, layer: 10, frame: 11, expiry: 0, traitName: "Trophy", traitDescription: "Pooly has won, everything!", stats: [], SVG: pixelLeftWingAccTrophy.data, },
  { tier: 1, layer: 10, frame: 12, expiry: 0, traitName: "Cocktail", traitDescription: "A tropical drink to break the ice.", stats: [{ categoryType: "charisma", value: 2,}, {categoryType: "wisdom", value: 1,}], SVG: pixelLeftWingAccCocktail.data, }
];

export default pixelPoolyLeftAcc;

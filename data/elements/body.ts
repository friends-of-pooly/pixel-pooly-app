import {   
  pixelBodyDefishirtBlue,
  pixelBodyDefishirtGreen,
  pixelBodyDefishirtNavy,
  pixelBodyDefishirtPink,
  pixelBodyFoPshirtBlack,
  pixelBodyFoPshirtLightblue,
  pixelBodyFoPshirtOrange,
  pixelBodyOPshirt,
  pixelBodyPoolyBot,
  pixelBodyPooly,
  pixelBodyTornadoshirt } from './output/body';

export const pixelPoolyBody = [
  { tier: 0, layer: 1, frame: 0, expiry: 0, traitName: "Pooly", traitDescription: "Excellence is found as a simple Pooly.", stats: [], SVG: pixelBodyPooly.data,},
  { tier: 1, layer: 1, frame: 1, expiry: 0, traitName: "Green DeFi Shirt", traitDescription: "Some say DeFi is Decentralized Finance, for Pooly it's Definitely Fierce.", stats: [{ categoryType: "constitution", value: 1,}, {categoryType: "wisdom", value: 1,}], SVG: pixelBodyDefishirtGreen.data, },
  { tier: 1, layer: 1, frame: 2, expiry: 0, traitName: "Navy DeFi Shirt", traitDescription: "Some say DeFi is Decentralized Finance, for Pooly it's Definitely Fierce.", stats: [{ categoryType: "constitution", value: 1,}, {categoryType: "wisdom", value: 1,}], SVG: pixelBodyDefishirtNavy.data, },
  { tier: 1, layer: 1, frame: 3, expiry: 0, traitName: "Blue DeFi Shirt", traitDescription: "Some say DeFi is Decentralized Finance, for Pooly it's Definitely Fierce.", stats: [{ categoryType: "constitution", value: 1,}, {categoryType: "wisdom", value: 1,}], SVG: pixelBodyDefishirtBlue.data, },
  { tier: 1, layer: 1, frame: 4, expiry: 0, traitName: "Pink DeFi Shirt", traitDescription: "Some say DeFi is Decentralized Finance, for Pooly it's Definitely Fierce.", stats: [{ categoryType: "constitution", value: 1,}, {categoryType: "wisdom", value: 1,}], SVG: pixelBodyDefishirtPink.data, },
  { tier: 0, layer: 1, frame: 5, expiry: 0, traitName: "Black FoP Shirt", traitDescription: "Welcome to the inner circle of Friends of Pooly.", stats: [{ categoryType: "defense", value: 1,}], SVG: pixelBodyFoPshirtBlack.data, },
  { tier: 0, layer: 1, frame: 6, expiry: 0, traitName: "Light Blue FoP Shirt", traitDescription: "Welcome to the inner circle of Friends of Pooly.", stats: [{ categoryType: "defense", value: 1,}], SVG: pixelBodyFoPshirtLightblue.data, },
  { tier: 0, layer: 1, frame: 7, expiry: 0, traitName: "Orange FoP Shirt", traitDescription: "Welcome to the inner circle of Friends of Pooly.", stats: [{ categoryType: "defense", value: 1,}], SVG: pixelBodyFoPshirtOrange.data, },
  { tier: 1, layer: 1, frame: 8, expiry: 0, traitName: "OP Shirt", traitDescription: "Why yes, this shirt is overpowered.", stats: [{ categoryType: "constitution", value: 2,}, {categoryType: "charisma", value: 1,}], SVG: pixelBodyOPshirt.data, },
  { tier: 2, layer: 1, frame: 9, expiry: 0, traitName: "Robo-Pooly", traitDescription: "Not quite armor, but a future suit.", stats: [{ categoryType: "defense", value: 2,}, {categoryType: "constitution", value: 2,}], SVG: pixelBodyPoolyBot.data, },
  { tier: 1, layer: 1, frame: 10, expiry: 0, traitName: "Tornado Shirt", traitDescription: "Reppin' the swirl.", stats: [{ categoryType: "defense", value: 2,}], SVG: pixelBodyTornadoshirt.data, }
];

export default pixelPoolyBody;

import { 
  pixelRightWing,
  pixelRightWingrobo,
  pixelRightWingtucked
 } from './output/right';

export const pixelPoolyRight = [
  { tier: 0, layer: 5, frame: 0, expiry: 0, traitName: "None", traitDescription: "No wings, no worries.", stats: [], SVG:"" },
  { tier: 0, layer: 5, frame: 1, expiry: 0, traitName: "Wing", traitDescription: "For when Pooly is ready to fight, take flight, or flaunt.", stats: [], SVG: pixelRightWing.data, },
  { tier: 1, layer: 5, frame: 2, expiry: 0, traitName: "Tucked Wing", traitDescription: "A confident Pooly knows when to nest in for the day.", stats: [{ categoryType: "strength", value: 1,}], SVG: pixelRightWingtucked.data, },
  { tier: 1, layer: 5, frame: 3, expiry: 1, traitName: "Robo-Wing", traitDescription: "Pooly is back from the future with enhancements.", stats: [{ categoryType: "strength", value: 2,}, {categoryType: "defense", value: 1,}], SVG: pixelRightWingrobo.data, }
];

export default pixelPoolyRight;

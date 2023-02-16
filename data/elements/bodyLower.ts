import {
  pixelFeetPoolyLegsleft,
  pixelFeetPoolyLegsright,
  pixelFeetSitting
} from './output/bodyLower';

export const pixelPoolyBodyLower = [
  { tier: 0, layer: 3, frame: 0, expiry: 0, traitName: "None", traitDescription: "Sometimes a birb sitting is just hiding that the birb is standing at the ready.", stats: [], SVG:"" },
  { tier: 0, layer: 3, frame: 1, expiry: 0, traitName: "Sitting", traitDescription: "Pooly has walked in many others shoes, take a load off.", stats: [], SVG: pixelFeetSitting.data, },
  { tier: 0, layer: 3, frame: 2, expiry: 0, traitName: "Feet to the Left", traitDescription: "Don't forget to take a load off and relax.", stats: [], SVG: pixelFeetPoolyLegsleft.data, },
  { tier: 0, layer: 3, frame: 3, expiry: 0, traitName: "Feet to the Right", traitDescription: "Don't forget to take a load off and relax.", stats: [], SVG: pixelFeetPoolyLegsright.data, }
];

export default pixelPoolyBodyLower;

import {
  pixelBgBeach,
  pixelBgCourtroom,
  pixelBgNight,
  pixelBgSand,
  pixelBgSky,
  pixelBgStarrySky,
  pixelBgWater,
} from './output/background';

export const pixelPoolyBackground = [{
      tier: 1,
      layer: 0,
      frame: 0,
      expiry: 1688180400,
      traitName: "Beach",
      traitDescription: "Pooly relaxes on the beach when they can.",
      stats: [
      {
        categoryType: "luck",
        value: 1,
      }],
      svg: pixelBgBeach.data,
      croppedSVG: "/pooly/cropped/0-bg/bg_beach.svg"
      },
      {
      tier: 2,
      layer: 0,
      frame: 1,
      expiry: 1688180400,
      traitName: "Courtroom",
      traitDescription: "The OG Pooly knows where defending starts and ends, the courtroom.",
      stats: [
      {
        categoryType: "defense",
        value: 3,
      },
      {
        categoryType: "constitution",
        value: 3,
      }],
      svg: pixelBgCourtroom.data,
      croppedSVG: "/pooly/cropped/0-bg/bg_courtroom.svg"
      },
      {
      tier: 0,
      layer: 0,
      frame: 2,
      expiry: 0,
      traitName: "Night",
      traitDescription: "Soar through the night sky, shoot for the moon.",
      stats: [],
      svg: pixelBgNight.data,
      croppedSVG: "/pooly/cropped/0-bg/bg_night.svg"
      },
      {
      tier: 0,
      layer: 0,
      frame: 3,
      expiry: 0,
      traitName: "Sand",
      traitDescription: "Pooly likes to chill by feeling the sand between their toes.",
      stats: [],
      svg: pixelBgSand.data,
      croppedSVG: "/pooly/cropped/0-bg/bg_sand.svg"
      },
      {
      tier: 0,
      layer: 0,
      frame: 4,
      expiry: 0,
      traitName: "Sky",
      traitDescription: "Pooly soars through blue skies, practicing for their moonshot.",
      stats: [],
      svg: pixelBgSky.data,
      croppedSVG: "/pooly/cropped/0-bg/bg_sky.svg"
      },
      {
      tier: 1,
      layer: 0,
      frame: 5,
      expiry: 1688180400,
      traitName: "Starry Sky",
      traitDescription: "Go beyond the moon, and shoot for the stars.",
      stats: [
      {
        categoryType: "luck",
        value: 1,
      }],
      svg: pixelBgStarrySky.data,
      croppedSVG: "/pooly/cropped/0-bg/bg_starry_sky.svg"
      },
      {
      tier: 0,
      layer: 0,
      frame: 6,
      expiry: 0,
      traitName: "Water",
      traitDescription: "Pooly relaxing in the middle of the pool.",
      stats: [],
      svg: pixelBgWater.data,
      croppedSVG: "/pooly/cropped/0-bg/bg_water.svg"
}
];


export default pixelPoolyBackground;

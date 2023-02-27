import {
  pixelWingLeftRobot,
  pixelWingLeftTucked,
  pixelWingLeftPooly
} from './output/left';

export const pixelPoolyLeft = [{
      tier: 0,
      layer: 2,
      frame: 0,
      expiry: 0,
      traitName: "None",
      traitDescription: "No wings, no worries.",
      stats: [],
      svg: "",
      croppedSVG: ""
    },
    {
      tier: 0,
      layer: 2,
      frame: 1,
      expiry: 0,
      traitName: "Left Wing",
      traitDescription: "For when Pooly is ready to fight, take flight, or flaunt.",
      stats: [],
      svg: pixelWingLeftPooly.data,
      croppedSVG: "/pooly/cropped/2-wing_left/wing_left_pooly.svg"
    },
    {
      tier: 1,
      layer: 2,
      frame: 2,
      expiry: 1688180400,
      traitName: "Left Robo-Wing",
      traitDescription: "Pooly is back from the future with enhancements.",
      stats: [
      {
        categoryType: "strength",
        value: 2,
      },
      {
        categoryType: "agility",
        value: 1,
      }],
      svg: pixelWingLeftRobot.data,
      croppedSVG: "/pooly/cropped/2-wing_left/wing_left_robot.svg"
    },
    {
      tier: 1,
      layer: 2,
      frame: 3,
      expiry: 1688180400,
      traitName: "Left Tucked Wing",
      traitDescription: "A confident Pooly knows when to nest in for the day.",
      stats: [
      {
        categoryType: "strength",
        value: 1,
      }],
      svg: pixelWingLeftTucked.data,
      croppedSVG: "/pooly/cropped/2-wing_left/wing_left_tucked.svg"
  }
];

export default pixelPoolyLeft;

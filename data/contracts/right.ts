import {
  pixelWingRightPooly,
  pixelWingRightRobot,
  pixelWingRightTucked
} from './output/right';

export const pixelPoolyRight = [
    {
      tier: 0,
      layer: 1,
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
      layer: 1,
      frame: 1,
      expiry: 0,
      traitName: "Right Wing",
      traitDescription: "For when Pooly is ready to fight, take flight, or flaunt.",
      stats: [],
      svg: pixelWingRightPooly.data,
      croppedSVG: "/pooly/cropped/1-wing_right/wing_right_pooly.svg"
    },
    {
      tier: 1,
      layer: 1,
      frame: 2,
      expiry: 1688180400,
      traitName: "Right Robo-Wing",
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
      svg: pixelWingRightRobot.data,
      croppedSVG: "/pooly/cropped/1-wing_right/wing_right_robot.svg"
    },
    {
      tier: 1,
      layer: 1,
      frame: 3,
      expiry: 1688180400,
      traitName: "Right Tucked Wing",
      traitDescription: "A confident Pooly knows when to nest in for the day.",
      stats: [
      {
        categoryType: "strength",
        value: 1,
      }],
      svg: pixelWingRightTucked.data,
      croppedSVG: "/pooly/cropped/1-wing_right/wing_right_tucked.svg"
  }
];

export default pixelPoolyRight;

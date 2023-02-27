import { pixelAccessoryFaceBubblePipe, pixelAccessoryFaceLoveLetter, pixelAccessoryFaceMonocle, pixelAccessoryFaceSmokes } from './output/faceAcc';

export const pixelPoolyFaceAcc = [{
      tier: 0,
      layer: 9,
      frame: 0,
      expiry: 0,
      traitName: "None",
      traitDescription: "Keep that right wing open for what's coming next.",
      stats: [],
      svg: "",
      croppedSVG: ""
    },
    {
      tier: 0,
      layer: 9,
      frame: 1,
      expiry: 1688180400,
      traitName: "Bubble Pipe",
      traitDescription: "Hide Pooly in a cloud of bubbles to escape from prying eyes.",
      stats: [
      {
        categoryType: "agility",
        value: 1,
      },
      {
        categoryType: "luck",
        value: 1,
      }],
      svg: pixelAccessoryFaceBubblePipe.data,
      croppedSVG: "/pooly/cropped/9-accessory_face/accessory_face_bubble_pipe.svg"
    },
    {
      tier: 0,
      layer: 9,
      frame: 2,
      expiry: 1688180400,
      traitName: "Love Letter",
      traitDescription: "Pooly, has a part time delivery service, not just for Kiki.",
      stats: [
      {
        categoryType: "defense",
        value: 2,
      },
      {
        categoryType: "wisdom",
        value: 1,
      }],
      svg: pixelAccessoryFaceLoveLetter.data,
      croppedSVG: "/pooly/cropped/9-accessory_face/accessory_face_love_letter.svg"
    },
    {
      tier: 0,
      layer: 9,
      frame: 3,
      expiry: 1688180400,
      traitName: "Monocle",
      traitDescription: "Posh Pooly requires a monocle for gestures and emphasis.",
      stats: [
      {
        categoryType: "charisma",
        value: 2,
      },
      {
        categoryType: "wisdom",
        value: 1,
      }],
      svg: pixelAccessoryFaceMonocle.data,
      croppedSVG: "/pooly/cropped/9-accessory_face/accessory_face_monocle.svg"
    },
    {
      tier: 0,
      layer: 9,
      frame: 4,
      expiry: 0,
      traitName: "Smokes",
      traitDescription: "Sit back, relax, and shroud Pooly in cloud.",
      stats: [],
      svg: pixelAccessoryFaceSmokes.data,
      croppedSVG: "/pooly/cropped/9-accessory_face/accessory_face_smokes.svg"
    }
];

export default pixelPoolyFaceAcc;

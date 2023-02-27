
import { pixelHeadCooly, pixelHeadCrazyCraw, pixelHeadKawaii, pixelHeadLooking, pixelHeadOpCooly, pixelHeadOpEyes, pixelHeadOpGlasses, pixelHeadOpPirate, pixelHeadPidgeon, pixelHeadPirate, pixelHeadPooly, pixelHeadRelaxed, pixelHeadRoboPooly, pixelHeadScowl, pixelHeadShocked, pixelHeadSmile, pixelHeadTornadoCooly, pixelHeadTornadoEyes, pixelHeadWince, pixelHeadWink } from './output/head';

// export const pixelPoolyHead = [{
//       tier: 0,
//       layer: 2,
//       frame: 0,
//       expiry: 0,
//       traitName: "Pooly",
//       traitDescription: "Sometimes a birb sitting is just hiding that the birb is standing at the ready.",
//       stats: [],
//       SVG: pixelHeadPooly.data,
//   },
//   {
//       tier: 0,
//       layer: 2,
//       frame: 1,
//       expiry: 1675105200,
//       traitName: "Looking",
//       traitDescription: "Keep them eyes peeled, looking all around for threats to quash.",
//       stats: [],
//       SVG: pixelHeadLooking.data,
//   },
//   {
//       tier: 0,
//       layer: 2,
//       frame: 2,
//       expiry: 1673542800,
//       traitName: "Shocked",
//       traitDescription: "Shocked? As if, hyper focused, pupils pin-pointed, target locked.",
//       stats: [],
//       SVG: pixelHeadShocked.data,
//   },
//   {
//       tier: 1,
//       layer: 2,
//       frame: 3,
//       expiry: 1673629200,
//       traitName: "OP Eyes",
//       traitDescription: "Even Pooly needs to catch a red eye every now and then.",
//       stats: [{
//           categoryType: "charisma",
//           value: 1,
//       }],
//       SVG: pixelHeadOpEyes.data,
//   },
//   {
//       tier: 1,
//       layer: 2,
//       frame: 4,
//       expiry: 0,
//       traitName: "OP Pirate",
//       traitDescription: "Them pirates were onto something, switch patch sides, activate night-vision mode.",
//       stats: [{
//           categoryType: "defense",
//           value: 2,
//       }],
//       SVG: pixelHeadOpPirate.data,
//   },
//   {
//       tier: 1,
//       layer: 2,
//       frame: 5,
//       expiry: 0,
//       traitName: "OP Cooly",
//       traitDescription: "Rose colored glasses? How about Optimistic colored glasses.",
//       stats: [{
//           categoryType: "charisma",
//           value: 2,
//       }],
//       SVG: pixelHeadOpCooly.data,
//   },
//   {
//       tier: 2,
//       layer: 2,
//       frame: 6,
//       expiry: 0,
//       traitName: "Robo-Pooly",
//       traitDescription: "Pooly, now enhanced with bionic laser vision",
//       stats: [{
//           categoryType: "defense",
//           value: 2,
//       }, {
//           categoryType: "constitution",
//           value: 2,
//       }],
//       SVG: pixelHeadRoboPooly.data,
//   },
//   {
//       tier: 1,
//       layer: 2,
//       frame: 7,
//       expiry: 1673636400,
//       traitName: "Cooly",
//       traitDescription: "Ain't no bird cooler than the cooly Pooly.",
//       stats: [{
//           categoryType: "charisma",
//           value: 1,
//       }],
//       SVG: pixelHeadCooly.data,
//   },
//   {
//       tier: 2,
//       layer: 2,
//       frame: 8,
//       expiry: 0,
//       traitName: "Crazy Craw",
//       traitDescription: "Bed head is a thing for birbs too, especially when Pooly isn't always a morning birb.",
//       stats: [{
//           categoryType: "luck",
//           value: 3,
//       }, {
//           categoryType: "agility",
//           value: 1,
//       }],
//       SVG: pixelHeadCrazyCraw.data,
//   },
//   {
//       tier: 1,
//       layer: 2,
//       frame: 9,
//       expiry: 0,
//       traitName: "Nounsly",
//       traitDescription: "Homage to the finer things in life.",
//       stats: [{
//           categoryType: "charisma",
//           value: 2,
//       }, {
//           categoryType: "luck",
//           value: 1,
//       }],
//       SVG: pixelHeadWink.data,
//   },
//   {
//       tier: 1,
//       layer: 2,
//       frame: 10,
//       expiry: 0,
//       traitName: "Pigeon",
//       traitDescription: "Pooly has a really strange cousin.",
//       stats: [{
//           categoryType: "luck",
//           value: 1,
//       }],
//       SVG: pixelHeadPidgeon.data,
//   },
//   {
//       tier: 1,
//       layer: 2,
//       frame: 11,
//       expiry: 0,
//       traitName: "Pirate",
//       traitDescription: "Yar beeter keep ya aye our for pirate Pooly.",
//       stats: [{
//           categoryType: "defense",
//           value: 2,
//       }],
//       SVG: pixelHeadPirate.data,
//   },
//   {
//       tier: 1,
//       layer: 2,
//       frame: 12,
//       expiry: 0,
//       traitName: "Tornado Cooly",
//       traitDescription: "Too cool for most with a hint of Tornado style.",
//       stats: [{
//           categoryType: "charisma",
//           value: 1,
//       }, {
//           categoryType: "defense",
//           value: 1,
//       }],
//       SVG: pixelHeadTornadoCooly.data,
//   },
//   {
//       tier: 1,
//       layer: 2,
//       frame: 13,
//       expiry: 0,
//       traitName: "Tornado Eyes",
//       traitDescription: "Pooly didn't see red, Pooly only saw a Torndao needing saving.",
//       stats: [{
//           categoryType: "wisdom",
//           value: 1,
//       }, {
//           categoryType: "charisma",
//           value: 1,
//       }],
//       SVG: pixelHeadTornadoEyes.data,
//   }
// ];


export const pixelPoolyHead = [{
      tier: 1,
      layer: 5,
      frame: 0,
      expiry: 1688180400,
      traitName: "Cooly",
      traitDescription: "Ain't no bird cooler than the cooly Pooly.",
      stats: [
      {
        categoryType: "charisma",
        value: 1,
      }],
      svg: pixelHeadCooly.data,
      croppedSVG: "/pooly/cropped/5-head/head_cooly.svg"
    },
    {
      tier: 2,
      layer: 5,
      frame: 1,
      expiry: 1688180400,
      traitName: "Crazy Craw",
      traitDescription: "Bed head is a thing for birbs too, especially when Pooly isn't always a morning birb.",
      stats: [
      {
        categoryType: "luck",
        value: 3,
      },
      {
        categoryType: "agility",
        value: 1,
      }],
      svg: pixelHeadCrazyCraw.data,
      croppedSVG: "/pooly/cropped/5-head/head_crazy_craw.svg"
    },
    {
      tier: 2,
      layer: 5,
      frame: 2,
      expiry: 1688180400,
      traitName: "Kawaii",
      traitDescription: "Pooly so cute, Pooly so Kawaii (づ｡◕‿‿◕｡)づ",
      stats: [
      {
        categoryType: "luck",
        value: 3,
      }],
      svg: pixelHeadKawaii.data,
      croppedSVG: "/pooly/cropped/5-head/head_kawaii.svg"
    },
    {
      tier: 0,
      layer: 5,
      frame: 3,
      expiry: 0,
      traitName: "Looking",
      traitDescription: "Keep them eyes peeled, looking all around for threats to quash.",
      stats: [],
      svg: pixelHeadLooking.data,
      croppedSVG: "/pooly/cropped/5-head/head_looking.svg"
    },
    {
      tier: 1,
      layer: 5,
      frame: 4,
      expiry: 1688180400,
      traitName: "OP Cooly",
      traitDescription: "Rose colored glasses? How about Optimistic colored glasses.",
      stats: [
      {
        categoryType: "charisma",
        value: 2,
      }],
      svg: pixelHeadOpCooly.data,
      croppedSVG: "/pooly/cropped/5-head/head_op_cooly.svg"
    },
    {
      tier: 1,
      layer: 5,
      frame: 5,
      expiry: 1688180400,
      traitName: "OP Eyes",
      traitDescription: "Even Pooly needs to catch a red eye every now and then.",
      stats: [
      {
        categoryType: "charisma",
        value: 1,
      }],
      svg: pixelHeadOpEyes.data,
      croppedSVG: "/pooly/cropped/5-head/head_op_eyes.svg"
    },
    {
      tier: 1,
      layer: 5,
      frame: 6,
      expiry: 1688180400,
      traitName: "OP Glasses",
      traitDescription: "Rose colored glasses? How about Optimistic colored glasses.",
      stats: [
      {
        categoryType: "charisma",
        value: 2,
      }],
      svg: pixelHeadOpGlasses.data,
      croppedSVG: "/pooly/cropped/5-head/head_op_glasses.svg"
    },
    {
      tier: 1,
      layer: 5,
      frame: 7,
      expiry: 1688180400,
      traitName: "OP Pirate",
      traitDescription: "Them pirates were onto something, switch patch sides, activate night-vision mode.",
      stats: [
      {
        categoryType: "defense",
        value: 2,
      }],
      svg: pixelHeadOpPirate.data,
      croppedSVG: "/pooly/cropped/5-head/head_op_pirate.svg"
    },
    {
      tier: 1,
      layer: 5,
      frame: 8,
      expiry: 1688180400,
      traitName: "Pidgeon",
      traitDescription: "Pooly has a really strange cousin.",
      stats: [
      {
        categoryType: "luck",
        value: 1,
      }],
      svg: pixelHeadPidgeon.data,
      croppedSVG: "/pooly/cropped/5-head/head_pidgeon.svg"
    },
    {
      tier: 1,
      layer: 5,
      frame: 9,
      expiry: 1688180400,
      traitName: "Pirate",
      traitDescription: "Yar beeter keep ya aye our for pirate Pooly.",
      stats: [
      {
        categoryType: "defense",
        value: 2,
      }],
      svg: pixelHeadPirate.data,
      croppedSVG: "/pooly/cropped/5-head/head_pirate.svg"
    },
    {
      tier: 0,
      layer: 5,
      frame: 10,
      expiry: 0,
      traitName: "Pooly",
      traitDescription: "Sometimes a birb sitting is just hiding that the birb is standing at the ready.",
      stats: [],
      svg: pixelHeadPooly.data,
      croppedSVG: "/pooly/cropped/5-head/head_pooly.svg"
    },
    {
      tier: 0,
      layer: 5,
      frame: 11,
      expiry: 0,
      traitName: "Relaxed",
      traitDescription: "Pooly just chillaxed",
      stats: [],
      svg: pixelHeadRelaxed.data,
      croppedSVG: "/pooly/cropped/5-head/head_relaxed.svg"
    },
    {
      tier: 2,
      layer: 5,
      frame: 12,
      expiry: 1688180400,
      traitName: "Robo-Pooly",
      traitDescription: "Pooly, now enhanced with bionic laser vision",
      stats: [
      {
        categoryType: "defense",
        value: 2,
      },
      {
        categoryType: "constitution",
        value: 2,
      }],
      svg: pixelHeadRobo - Pooly.data,
      croppedSVG: "/pooly/cropped/5-head/head_robo-pooly.svg"
    },
    {
      tier: 2,
      layer: 5,
      frame: 13,
      expiry: 1688180400,
      traitName: "Scowl",
      traitDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eget massa a leo commodo venenatis vel non lacus. Maecenas vel quam consequat, faucibus est ac, iaculis massa.",
      stats: [
      {
        categoryType: "strength",
        value: 2,
      },
      {
        categoryType: "agility",
        value: 1,
      }],
      svg: pixelHeadScowl.data,
      croppedSVG: "/pooly/cropped/5-head/head_scowl.svg"
    },
    {
      tier: 1,
      layer: 5,
      frame: 14,
      expiry: 1688180400,
      traitName: "Shocked",
      traitDescription: "Shocked? As if, hyper focused, pupils pin-pointed, target locked.",
      stats: [
      {
        categoryType: "agility",
        value: 1,
      }],
      svg: pixelHeadShocked.data,
      croppedSVG: "/pooly/cropped/5-head/head_shocked.svg"
    },
    {
      tier: 0,
      layer: 5,
      frame: 15,
      expiry: 0,
      traitName: "Smile",
      traitDescription: "A happy Pooly is after a day of successfully defending.",
      stats: [],
      svg: pixelHeadSmile.data,
      croppedSVG: "/pooly/cropped/5-head/head_smile.svg"
    },
    {
      tier: 1,
      layer: 5,
      frame: 16,
      expiry: 1688180400,
      traitName: "Tornado Cooly",
      traitDescription: "Too cool for most with a hint of Tornado style.",
      stats: [
      {
        categoryType: "charisma",
        value: 1,
      },
      {
        categoryType: "defense",
        value: 1,
      }],
      svg: pixelHeadTornadoCooly.data,
      croppedSVG: "/pooly/cropped/5-head/head_tornado_cooly.svg"
    },
    {
      tier: 1,
      layer: 5,
      frame: 17,
      expiry: 1688180400,
      traitName: "Tornado Eyes",
      traitDescription: "Pooly didn't see red, Pooly only saw a Torndao needing saving.",
      stats: [
      {
        categoryType: "wisdom",
        value: 1,
      },
      {
        categoryType: "charisma",
        value: 1,
      }],
      svg: pixelHeadTornadoEyes.data,
      croppedSVG: "/pooly/cropped/5-head/head_tornado_eyes.svg"
    },
    {
      tier: 1,
      layer: 5,
      frame: 18,
      expiry: 1688180400,
      traitName: "Wince",
      traitDescription: "It was a rough day in court but Pooly will make it.",
      stats: [
      {
        categoryType: "defense",
        value: 1,
      }],
      svg: pixelHeadWince.data,
      croppedSVG: "/pooly/cropped/5-head/head_wince.svg"
    },
    {
      tier: 1,
      layer: 5,
      frame: 19,
      expiry: 1688180400,
      traitName: "Wink",
      traitDescription: "A job well done, another day defended.",
      stats: [
      {
        categoryType: "charisma",
        value: 2,
      }],
      svg: pixelHeadWink.data,
      croppedSVG: "/pooly/cropped/5-head/head_wink.svg"
    }
];

export default pixelPoolyHead;

/* 🤖 this file was generated by svg-to-ts */
export const pixelFaceAccBubblepipe: {
  name: 'face_acc_bubblepipe';
  data: string;
} = {
  name: 'face_acc_bubblepipe',
  data: `<path style="fill:#7f3300;fill-opacity:1;fill-rule:evenodd;stroke-width:1.00157" d="M260 140v20h-20v10h-10v-10h-20v-10h-20v10h10v10h20v10h40v-10h20v-10h10v-20z" transform="scale(.26458)"/><path style="opacity:1;fill:#fff;fill-opacity:.67;fill-rule:evenodd;stroke-width:1.00157" d="M250 70v30h30V70h-10zm30 30v20h20v-20Zm-20-20h10v10h-10zm0 40v10h10v-10z" transform="scale(.26458)"/>`
};
export const pixelFaceAccLoveletter: {
  name: 'face_acc_loveletter';
  data: string;
} = {
  name: 'face_acc_loveletter',
  data: `<path style="opacity:1;fill:#ffffb0;fill-rule:evenodd;stroke-width:.264999" d="M50.27 39.688h29.105v21.166H50.271Z"/><path style="opacity:1;fill:red;fill-opacity:1;fill-rule:evenodd;stroke-width:1.00157" d="M220 160v10h-10v20h10v10h10v10h10v10h10v-10h10v-10h10v-10h10v-20h-10v-10h-20v10h-10v-10z" transform="scale(.26458)"/>`
};
export const pixelFaceAccMonocle: {
  name: 'face_acc_monocle';
  data: string;
} = {
  name: 'face_acc_monocle',
  data: `<path style="opacity:1;fill:#ffd800;fill-opacity:1;fill-rule:evenodd;stroke-width:1.00157" d="M160 80v50h50V80Zm50 50v10h10v-10zm10 10v70h10v-70zm0 70h-10v10h10zm-10 10h-10v10h10zM170 90h30v30h-30z" transform="scale(.26458)"/><path style="opacity:1;fill:#00ebff;fill-opacity:.5;fill-rule:evenodd;stroke-width:.264999" d="M44.98 23.813h7.937v7.937h-7.938z"/>`
};
export const pixelFaceAccSmokes: {
  name: 'face_acc_smokes';
  data: string;
} = {
  name: 'face_acc_smokes',
  data: `<path style="opacity:1;fill:#60634f;fill-opacity:1;fill-rule:evenodd;stroke-width:1.00157" d="M260 140v10h-70v10h10v10h40v10h40v-40z" transform="scale(.26458)"/><path style="opacity:1;fill:red;fill-opacity:.9;fill-rule:evenodd;stroke-width:.264999" d="M74.083 44.98h2.646v2.645h-2.646z"/><path style="opacity:1;fill:#ff6a00;fill-opacity:.898039;fill-rule:evenodd;stroke-width:.264999" d="M74.083 42.333h2.646v2.646h-2.646z"/><path style="opacity:1;fill:#f2a52b;fill-opacity:.898039;fill-rule:evenodd;stroke-width:.264999" d="M74.083 39.688h2.646v2.645h-2.646z"/><path style="opacity:1;fill:#f1e816;fill-opacity:.9;fill-rule:evenodd;stroke-width:.264999" d="M74.083 37.042h2.646v2.646h-2.646z"/><path style="opacity:1;mix-blend-mode:darken;fill:#ccc;fill-opacity:.67;fill-rule:evenodd;stroke-width:1.00157" d="M300 10v20h10V10Zm0 20h-10v10h10zm-20 20v10h10V50Zm10 10v40h10V90h10V70h-10V60Zm0 40h-10v20h10zm0 20v20h10v-20z" transform="scale(.26458)"/>`
};
export type faceAcc =
  | 'face_acc_bubblepipe'
  | 'face_acc_loveletter'
  | 'face_acc_monocle'
  | 'face_acc_smokes';
export interface MyIcon {
  name: faceAcc;
  data: string;
}
export type MyIconNameSubset<T extends Readonly<MyIcon[]>> = T[number]['name'];
export const completeIconSet = [
  pixelFaceAccBubblepipe,
  pixelFaceAccLoveletter,
  pixelFaceAccMonocle,
  pixelFaceAccSmokes
];

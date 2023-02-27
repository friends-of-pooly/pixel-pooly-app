# Instructions

### Step 1

Run the following Node commands to convert from SVG to Typescript.

```
npx svg-to-ts --config ./elementsV2/scripts/background.json
npx svg-to-ts --config ./elementsV2/scripts/body.json
npx svg-to-ts --config ./elementsV2/scripts/bodyAcc.json
npx svg-to-ts --config ./elementsV2/scripts/bodyLower.json
npx svg-to-ts --config ./elementsV2/scripts/faceAcc.json
npx svg-to-ts --config ./elementsV2/scripts/head.json
npx svg-to-ts --config ./elementsV2/scripts/headAcc.json
npx svg-to-ts --config ./elementsV2/scripts/left.json
npx svg-to-ts --config ./elementsV2/scripts/leftAcc.json
npx svg-to-ts --config ./elementsV2/scripts/right.json
npx svg-to-ts --config ./elementsV2/scripts/rightAcc.json
```

### Step 2

- Update the layer/frame files (`elementsV2/background.ts`) to reference all of the new images.
- Add that `stats` parameters from the spreadsheet to the stats in the elementsV2 config files.

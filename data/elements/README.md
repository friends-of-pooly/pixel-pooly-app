# Instructions

### Step 1

Run the following Node commands to convert from SVG to Typescript.

```
npx svg-to-ts --config ./elements/scripts/background.json
npx svg-to-ts --config ./elements/scripts/body.json
npx svg-to-ts --config ./elements/scripts/bodyAcc.json
npx svg-to-ts --config ./elements/scripts/bodyLower.json
npx svg-to-ts --config ./elements/scripts/faceAcc.json
npx svg-to-ts --config ./elements/scripts/head.json
npx svg-to-ts --config ./elements/scripts/headAcc.json
npx svg-to-ts --config ./elements/scripts/left.json
npx svg-to-ts --config ./elements/scripts/leftAcc.json
npx svg-to-ts --config ./elements/scripts/right.json
npx svg-to-ts --config ./elements/scripts/rightAcc.json
```

### Step 2

- Update the layer/frame files (`elements/background.ts`) to reference all of the new images.
- Add that `stats` parameters from the spreadsheet to the stats in the elements config files.

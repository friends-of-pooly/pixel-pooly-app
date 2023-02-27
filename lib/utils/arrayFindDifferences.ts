export function arrayFindDifferences(arr1, arr2) {
  let updatedIndexes = []
  let updatedValues = []

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      updatedIndexes.push(i)
      updatedValues.push(arr2[i])
    }
  }

  return [updatedIndexes, updatedValues]
}

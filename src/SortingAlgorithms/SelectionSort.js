const animations = [];

export function getSelectionSortAnimations(array) {
    if (array.length <= 1) return array;
    return doSelection(array);
  }
  
  function doSelection(mainArray) {
      console.log(mainArray.length)
      var minElem = 0;
      var minIdx = 0;
    for (let step = 0; step < mainArray.length; step++) {
        minElem = mainArray[step];
        minIdx = step;
        for (let i = step+1; i < mainArray.length; i++) {
            if (mainArray[i] < minElem) {
                minElem = mainArray[i];
                minIdx = i;
            }
        }
        animations.push([[minIdx, mainArray[step]], [step, minElem]]);
        mainArray[minIdx] = mainArray[step];
        mainArray[step] = minElem;
    }
    return animations;
  }
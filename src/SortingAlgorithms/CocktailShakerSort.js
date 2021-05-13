export function getShakerSortAnimations(array) {
    if (array.length <= 1) return array;
    return doShaker(array);
  }
  
  function doShaker(mainArray) {
    const l = mainArray.length;
    const animations = [];
    for (let step = 0; step < l / 2; step ++) {
        for (let i = step; i < l - step - 1; i++) {
            if (mainArray[i] > mainArray[i + 1]) {
                animations.push([i, i + 1]);
                animations.push([i, i + 1]);
                animations.push([mainArray[i + 1], mainArray[i]])
                let temp = mainArray[i];
                mainArray[i] = mainArray[i + 1];
                mainArray[i + 1] = temp
            }
        }
        for (let j = l - step - 1; j > step; j--) {
            if (mainArray[j] < mainArray[j - 1]) {
                animations.push([j, j - 1]);
                animations.push([j, j - 1]);
                animations.push([mainArray[j - 1], mainArray[j]])
                let temp = mainArray[j];
                mainArray[j] = mainArray[j - 1];
                mainArray[j - 1] = temp
            }
        }
    }
    return animations;
  }
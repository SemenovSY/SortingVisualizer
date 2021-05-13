  export function getBubbleSortAnimations(array) {
    if (array.length <= 1) return array;
    return doBubble(array);
  }
  
  function doBubble(mainArray) {
    const animations = [];
    for (let j = mainArray.length - 1; j > 0; j--) {
      for (let i = 0; i < j; i++) {
        if (mainArray[i] > mainArray[i + 1]) {
          animations.push([i, i + 1]);
          animations.push([i, i + 1]);
          animations.push([mainArray[i + 1], mainArray[i]]);
          let temp = mainArray[i];
          mainArray[i] = mainArray[i + 1];
          mainArray[i + 1] = temp;
        }
      }
    }
    return animations;
  }
const animations = [];
var animationsHelperLeft = [];
var animationsHelperRight = [];

export function getQuickSortAnimations(array) {
    doQuick(array);
    return animations;
  }
  
  function doQuick(mainArray) {
    animationsHelperLeft = [];
    animationsHelperRight = [];
    if (mainArray.length < 2) return (mainArray);
    let min = 1;
    let max = mainArray.length - 1;
    let rand = Math.floor(min + Math.random() * (max + 1 - min));
    let pivot = mainArray[rand];
    animations.push(rand);
    const left = [];
    const right = [];
    mainArray.splice(rand, 1);
    mainArray = [pivot].concat(mainArray)
    for (let i = 1; i < mainArray.length; i++) {
        if (pivot > mainArray[i]) {
            left.push(mainArray[i]);
            
        } else {
            right.push(mainArray[i]);
        }
    }

    animations.push([left.concat(pivot, right)]);
    return doQuick(left).concat(pivot, doQuick(right));
  }
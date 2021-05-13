import React from 'react';
import {getMergeSortAnimations} from '../SortingAlgorithms/MergeSort.js';
import {getBubbleSortAnimations} from '../SortingAlgorithms/BubbleSort.js';
import {getShakerSortAnimations} from '../SortingAlgorithms/CocktailShakerSort.js';
import {getSelectionSortAnimations} from '../SortingAlgorithms/SelectionSort.js';

import '../Styles/SortingVisualizer.css';
import '../Styles/SortMethodButtons.scss';
import '../Styles/Select.scss';


var ARRAY_LENGTH = 100;
var BAR_WIDTH = 3;
var SORTING_SPEED = 50;
const styleOne = 'linear-gradient(0deg, #555452, #ececec)';
const styleTwo = 'linear-gradient(0deg, #ececec, #555452)';

export default class SortingVisualizer extends React.Component{

    constructor(props){
        super(props);

        this.state = {
            array: [],
        };
    }
    componentDidMount() {
        this.resetArray();
    }

    resetArray() {
      var rng = document.getElementById('array-size');
      ARRAY_LENGTH = rng.value;
      if (ARRAY_LENGTH < 150) {
        BAR_WIDTH = 1100 / ARRAY_LENGTH;
      } else {
        BAR_WIDTH = 900 / ARRAY_LENGTH;
      }
      const array = []
      for (let i = 0; i < ARRAY_LENGTH; i++) {
        array.push(randomIntFromInterval(60, 670));
      }
      this.setState({array});
    }

    mergeSort() {
    const currentArray = this.state.array;
    const javaScriptSortedArray = currentArray.slice().sort((a,b) => a - b);
    var ans = arraysAreEqual(javaScriptSortedArray, currentArray);
    if (ans === false) {
      const animations = getMergeSortAnimations(this.state.array);
      for (let i = 0; i < animations.length; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const isColorChange = i % 3 !== 2;
        if (isColorChange) {
          const [barOneIdx, barTwoIdx] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          const color = i % 3 === 0 ? styleTwo : styleOne;
          setTimeout(() => {
            barOneStyle.background = color;
            barTwoStyle.background = color;
          }, i * SORTING_SPEED);
        } else {
          setTimeout(() => {
            const [barOneIdx, newHeight] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            barOneStyle.height = `${newHeight}px`;
          }, i * SORTING_SPEED);
        }
      }
    } else {
      for (let i = 0; i < ARRAY_LENGTH; i++) {
        const arrayBars = document.getElementsByClassName('array-bar');
        const barStyle = arrayBars[i].style;
        setTimeout(() => {
          barStyle.background = 'linear-gradient(45deg, #EECFBA, #C5DDE8)';
        }, i * 10);
        setTimeout(() => {
          barStyle.background = styleOne;
        }, i * 20);
      }
    }
  }
    quickSort() {
    
    }

    heapSort() {

    }

    selectionSort() {
      const currentArray = this.state.array;
      const javaScriptSortedArray = currentArray.slice().sort((a,b) => a - b);
      var ans = arraysAreEqual(javaScriptSortedArray, currentArray);
      if (ans === false) {
        const animations = getSelectionSortAnimations(this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let i = 0; i < animations.length; i++) {
          const [barOneIdx, barOneNewHeight] = animations[i][0];
          const [barTwoIdx, barTwoNewHeight] = animations[i][1];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
            barOneStyle.background = 'linear-gradient(0deg, #886621, #ececec)';
            barTwoStyle.background = 'linear-gradient(0deg, #b092be, #ececec)';
          }, i * SORTING_SPEED * 20);
        }
        sleep(100);
        for (let i = 0; i < animations.length; i++) {
          const [barOneIdx, barOneNewHeight] = animations[i][0];
          const [barTwoIdx, barTwoNewHeight] = animations[i][1];
          const barOneStyle = arrayBars[barOneIdx].style;
          const barTwoStyle = arrayBars[barTwoIdx].style;
          setTimeout(() => {
            barOneStyle.background = 'linear-gradient(0deg, #555452, #ececec)';
            barTwoStyle.background = 'linear-gradient(0deg, #3f5788, #ececec)';
          }, i * SORTING_SPEED * 20);
          setTimeout(() => {
            barOneStyle.height = `${barOneNewHeight}px`;
            barTwoStyle.height = `${barTwoNewHeight}px`;
          }, i * SORTING_SPEED * 20);
        }
      } else {
        for (let i = 0; i < ARRAY_LENGTH; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const barStyle = arrayBars[i].style;
          setTimeout(() => {
            barStyle.background = 'linear-gradient(45deg, #EECFBA, #C5DDE8)';
          }, i * 10);
          setTimeout(() => {
            barStyle.background = styleOne;
          }, i * 20);
        }
      }
    }

    cocktailShakerSort() {
      const currentArray = this.state.array;
      const javaScriptSortedArray = currentArray.slice().sort((a,b) => a - b);
      var ans = arraysAreEqual(javaScriptSortedArray, currentArray);
      if (ans === false) {
        const animations = getShakerSortAnimations(this.state.array);
        const arrayBars = document.getElementsByClassName('array-bar');
        for (let j = 0; j < animations.length; j ++) {
          const isColorChange = j % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[j];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = j % 3 === 0 ? styleTwo :styleOne;
            setTimeout(() => {
              barOneStyle.background = color;
              barTwoStyle.background = color;
            }, j * SORTING_SPEED / 2);
          } else {
            setTimeout(() => {
              const [barOneIdx, barTwoIdx] = animations[j - 1]
              const [newHeightLeft, newHeightRight] = animations[j];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              barOneStyle.height = `${newHeightLeft}px`;
              barTwoStyle.height = `${newHeightRight}px`;
            }, j * SORTING_SPEED / 2);
          }
        }
      } else {
        for (let i = 0; i < ARRAY_LENGTH; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const barStyle = arrayBars[i].style;
          setTimeout(() => {
            barStyle.background = 'linear-gradient(45deg, #EECFBA, #C5DDE8)';
          }, i * 10);
          setTimeout(() => {
            barStyle.background = styleOne;
          }, i * 20);
        }
      }
    }

    bubbleSort() {
      const currentArray = this.state.array;
      const javaScriptSortedArray = currentArray.slice().sort((a,b) => a - b);
      var ans = arraysAreEqual(javaScriptSortedArray, currentArray);
      if (ans === false) {
        const animations = getBubbleSortAnimations(this.state.array);
        for (let i = 0; i < animations.length; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const isColorChange = i % 3 !== 2;
          if (isColorChange) {
            const [barOneIdx, barTwoIdx] = animations[i];
            const barOneStyle = arrayBars[barOneIdx].style;
            const barTwoStyle = arrayBars[barTwoIdx].style;
            const color = i % 3 === 0 ? styleTwo : styleOne;
            setTimeout(() => {
              barOneStyle.background = color;
              barTwoStyle.background = color;
            }, i * SORTING_SPEED / 2);
          } else {
            setTimeout(() => {
              const [barOneIdx, barTwoIdx] = animations[i - 1]
              const [newHeightLeft, newHeightRight] = animations[i];
              const barOneStyle = arrayBars[barOneIdx].style;
              const barTwoStyle = arrayBars[barTwoIdx].style;
              barOneStyle.height = `${newHeightLeft}px`;
              barTwoStyle.height = `${newHeightRight}px`;
            }, i * SORTING_SPEED / 2);
          }
        }
      } else {
        for (let i = 0; i < ARRAY_LENGTH; i++) {
          const arrayBars = document.getElementsByClassName('array-bar');
          const barStyle = arrayBars[i].style;
          setTimeout(() => {
            barStyle.background = 'linear-gradient(45deg, #EECFBA, #C5DDE8)';
          }, i * 10);
          setTimeout(() => {
            barStyle.background = styleOne;
          }, i * 20);
        }
      }
    }

    setSpeed(multiplier) {
      SORTING_SPEED = 50 / multiplier;
    }

    /*testSortingAlgorithms() {
        for (let i=0; i < 150; i++){
            const array = [];
            const length = randomIntFromInterval(10, 1000);
            for (let i=0; i < length; i++){
                array.push(randomIntFromInterval(-1000, 1000));
            }
            const javaScriptSortedArray = array.slice().sort((a,b) => a - b);
            const mySortedArray = getBubbleSortAnimations(array.slice());
            
            const ans = arraysAreEqual(javaScriptSortedArray, mySortedArray)
            console.log(ans);
        }
    }*/

    render() {
    const {array} = this.state;

    return (
      <div>
        <div className="array-container">
        {array.map((value, idx) => (
          <div
            className="array-bar"
            key={idx}
            style={{
              height: `${value}px`,
              width: `${BAR_WIDTH}px`
            }}></div>
        ))}
        </div>
        <container className='menu-bar'>
          <container className='params'>
            <div className="array-length">
              <text>Array Length: </text>
              <input 
                type = 'range' 
                min='50' 
                max='300' 
                step='5' 
                id='array-size'
                onInput={() => {this.resetArray()}} 
                className='range-style'
                >
              </input>
              <text id="length"></text>
            </div>
            <div className="select-buttons">
              <div className="select-container">
                  <a className="btn effect01" target="_blank"><span onClick={() => this.setSpeed(1)}>1X</span></a>
                  <a className="btn effect01" target="_blank"><span onClick={() => this.setSpeed(2)}>2X</span></a>
                  <a className="btn effect01" target="_blank"><span onClick={() => this.setSpeed(5)}>5X</span></a>
                  <a className="btn effect01" target="_blank"><span onClick={() => this.setSpeed(10)}>10X</span></a>
              </div>
            </div>
          </container>
          <div className='sort-buttons'>
            <div className="container">
              <button className="button type1" onClick={() => this.mergeSort()}>Merge Sort</button>
              <button className="button type2" onClick={() => this.selectionSort()}>Seleciton Sort</button>
              <button className="button type3" onClick={() => this.bubbleSort()}>Bubble Sort</button>
              <button className="button type4" onClick={() => this.cocktailShakerSort()}>Cocktail Shaker Sort</button>
            </div>
          </div>
        </container>
      </div>
    );
  }
}

function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(one, two) {
    if (one.length !== two.length) return false;
    for (let i=0; i < one.length; i++){
        if (one[i] !== two[i]) return false;
    }
    return true;
}

function sleep(milliseconds) {
  const date = Date.now();
  let currentDate = null;
  do {
    currentDate = Date.now();
  } while (currentDate - date < milliseconds);
}


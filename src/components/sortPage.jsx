import React, {useState} from 'react';
import ArrayDisplay from './ArrayDisplay.jsx';
import AlgoSelector from './AlgoSelector.jsx';
import CSS_COLOR_NAMES from '../colors.js'

const SortPage = (props) => {

  const containerStyle = {
    padding: '10px',
    height: '90vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
  }

  let dummyArray = generateRandomArray(17);

  const [currentArray, setCurrentArray] = useState(dummyArray);
  const [currentSort, changeSort] = useState('bubble')
  const sorts = ['bubble', 'merge', 'insertion', 'selection', 'quick'];

  ////Sorts////

  const bubbleSort = (arr) => {
    const newArray = arr || JSON.parse(JSON.stringify(currentArray));
    let counter = 0;
    for(let i = 0; i < newArray.length - 1; i++){
      let currentNode = newArray[i];
      let nextNode = newArray[i + 1];
      if(currentNode.val > nextNode.val) {
        counter++;
        currentNode.color = 'green';
        nextNode.color = 'green';
        load(newArray);
        let movingVal = currentNode.val;
        currentNode.val = nextNode.val;
        nextNode.val = movingVal;
        load(newArray);
        currentNode.color = 'cadetBlue';
        nextNode.color = 'cadetBlue'
        load(newArray);
        i--;
      }
    }
    if(counter > 0) bubbleSort(newArray);
  }

  const mergeSort = () => {
    let newArray = copy(currentArray);

    const combine = (left, right) => {
      let merged = [];
      let i = 0;
      let j = 0;

      while(i < left.length || j < right.length) {
        if(j === right.length){
          merged.push(left[i]);
          i++;
        } else if (i === left.length) {
          merged.push(right[j]);
          j++;
        } else if (right[j].val <= left[i].val) {
          merged.push(right[j]);
          j++;
        } else if (left[i].val < right[j].val) {
          merged.push(left[i]);
          i++;
        }
      }

      newArray = swap(newArray, merged);
      return merged;
    }

    const splitAndReturn = (arr) => {
      if(arr.length <= 1) return arr;
      let midIndex = Math.floor(arr.length / 2);
      let left = arr.slice(0, midIndex);
      let right = arr.slice(midIndex, arr.length);

      return combine(splitAndReturn(left), splitAndReturn(right));
    }

    splitAndReturn(newArray);
    play();
  }

  const insertionSort = () => {
    
  }

  const selectionSort = () => {

  }

  const quickSort = () => {

  }

  const minToMax = (a, b) => a.val - b.val;

  const sortSelector = {
    'bubble': bubbleSort, 
    'merge': mergeSort, 
    'insertion': insertionSort, 
    'selection': selectionSort, 
    'quick': quickSort
  }

  const startSort = () =>{
    sortSelector[currentSort]();
  }

  ////End Sorts////

  ////Visual Methods////
  const animationQueue = [];

  const load = (arr) => {
    let copy = JSON.parse(JSON.stringify(arr))
    animationQueue.push(copy);
    if(JSON.stringify(copy) === JSON.stringify(copy.slice().sort(minToMax))) play();
  }

  const play = () => {
    for(let i = 0; i < animationQueue.length; i++) {
      setTimeout(function() {
        setCurrentArray(animationQueue[i])
      }, (i * 1000));
    }
  }

  const changeColors = (arr, color) => {
    arr.forEach(node => {
      node.color = color;
    });
  }

  const copy = (arr) => {
    return JSON.parse(JSON.stringify(arr))
  }

  const randomColorArrayGenerator = () => {
    let colorArray = CSS_COLOR_NAMES.slice();
    shuffleArray(colorArray);
    return colorArray;
  }

  const shuffleArray = (arr) => {
    for(let i = arr.length - 1; i > 0; i--){
      let j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  }

  const swap = (arr, edits) => {
    let newColors = randomColorArrayGenerator();
    let indices = edits.map(editNode => {
      return arr.findIndex(barNode => {
        return barNode.val === editNode.val
      })
    })

    let editVals = edits.map(node => node.val)
    let min = Math.min(...indices);
    let end = indices.length + min
    let newColor = newColors.pop();
    let loadArray = arr.map((node, index) => {
      if(index < min || index >= end) {
        return node;
      } else {
        return {val: editVals[index - min], color: newColor}
      }
    });
    load(loadArray);
    return loadArray;
  }

  ////End Visual Methods////

  return (
    <div id='container' style={containerStyle}>
      <h1>{props.sortTitle}</h1>
      <div id='barContainer'>
        <ArrayDisplay currentArray={currentArray}/>
      </div>
      <AlgoSelector algos={sorts} 
                    changeSort={changeSort.bind(this)}
                    currentSort={currentSort}
                    startSort={startSort.bind(this)}/>
    </div>
  )
}

const generateRandomArray = (n) => {
  let cssColors = CSS_COLOR_NAMES.slice();
  let color = 'cadetblue'
  let dummySet = new Set();
  while (dummySet.size !== n) dummySet.add(Math.floor(Math.random() * n) + 1)
  return [...dummySet].map(num => {return {val: num, color: color}});
}

export default SortPage;
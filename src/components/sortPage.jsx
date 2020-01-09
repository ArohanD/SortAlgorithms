import React, {useState} from 'react';
import ArrayDisplay from './ArrayDisplay.jsx';
import AlgoSelector from './AlgoSelector.jsx';

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

  }

  const insertionSort = () => {
    
  }

  const selectionSort = () => {

  }

  const quickSort = () => {

  }

  const minToMax = (a, b) => a.val - b.val;

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
      }, (i * 200));
    }
  }

  ////End Visual Methods////

  return (
    <div id='container' style={containerStyle}>
      <h1 onClick={() => bubbleSort.bind(this)()}>{props.sortTitle}</h1>
      <div id='barContainer'>
        <ArrayDisplay currentArray={currentArray}/>
      </div>
      <AlgoSelector algos={sorts} changeSort={changeSort.bind(this)}/>
    </div>
  )
}

const generateRandomArray = (n) => {
  let dummySet = new Set();
  while (dummySet.size !== n) dummySet.add(Math.floor(Math.random() * n) + 1)
  return [...dummySet].map(num => {return {val: num, color: 'cadetblue'}});
}

export default SortPage;
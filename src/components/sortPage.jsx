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
  let dummyArray = new Array(17).fill('x').map((spot, index) => {
    return {val: index + 1, color: 'cadetblue'}
  })
  const [currentArray, setCurrentArray] = useState(dummyArray);
  const [currentSort, changeSort] = useState('bubble')
  const sorts = ['bubble', 'merge', 'insertion', 'selection', 'quick'];

  ////Sorts////

  const bubbleSort = () => {
    const newArray = currentArray.slice();
    newArray[6] = {val: 20, color: 'red'};
    setCurrentArray(newArray);
  }

  const mergeSort = () => {

  }

  const insertionSort = () => {
    
  }

  const selectionSort = () => {

  }

  const quickSort = () => {

  }

  ////End Sorts////

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

export default SortPage;
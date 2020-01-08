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
  return (
    <div id='container' style={containerStyle}>
      <h1>{props.sortTitle}</h1>
      <div id='barContainer'>
        <ArrayDisplay currentArray={currentArray}/>
      </div>
      <AlgoSelector algos={sorts} />
    </div>
  )
}

export default SortPage;
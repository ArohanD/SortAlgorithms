import React from 'react';

const ArrayDisplay = (props) => {

  const style = {
    width: '100%',
    height: '50vh',
    border: '1px solid cadetblue',
    borderRadius: '10px',
  
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  }

  return(
    <div>
      <div id='array_container' style={style}>
        {
          props.currentArray.map(barVal => <Bar value={barVal} 
                                                key={barVal.val}
                                                arrayLength={props.currentArray.length}/>)
        }
      </div>
    </div>
  )
}

const Bar = (props) => {

  const lengthMultiplier = 400 / props.arrayLength;

  const barStyle = {
    backgroundColor: props.value.color,
    height: `${props.value.val * lengthMultiplier}px`,
    width: `40px`,
    borderRadius: '2px'
  }

  return (
    <div style={barStyle}></div>
  )
}


export default ArrayDisplay;
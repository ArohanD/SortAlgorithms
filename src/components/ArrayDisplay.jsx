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
          props.currentArray.map(barVal => <Bar value={barVal} key={barVal.val}/>)
        }
      </div>
    </div>
  )
}

const Bar = (props) => {

  const barStyle = {
    backgroundColor: props.value.color,
    height: `${props.value.val * 20}px`,
    width: '40px'
  }

  return (
    <div style={barStyle}></div>
  )
}


export default ArrayDisplay;
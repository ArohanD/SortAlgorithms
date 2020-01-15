import React, {useState} from 'react'

const AlgoSelector = (props) => {


  const containerStyle ={
    height: '150px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
  }

  const selectorStyle = {
    display: 'flex',
    width: '100%',
    justifyContent: 'space-between'
  }

  const inputPanel = {
    display: 'flex',
    width: '40%',
    justifyContent: 'space-between',
  }

  const buttonStyle = {
    width: '80px',
    height: '50px',
    textAlign: 'center',
    fontSize: '1.2em'
  }

  const itemCountStyle = {
    width: '250px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  }

  const changeNumItems = (e) => {
    let num = +e.target.value;
    console.log(typeof num)
    if(typeof num === 'number' && num < 1000) {
      props.setNumItems(num)
    }
  }

  return (
    <div style={containerStyle}>
      <div style={selectorStyle}>
        {
          props.algos.map(algo => {
            return <SelectorButton algo={algo} 
                                   key={algo} 
                                   changeSort={props.changeSort}
                                   selected={props.currentSort === algo}/>
          })
        }
      </div>
      <div style={inputPanel}>
        <div style={itemCountStyle}>
          <label>Number of items:</label>
          <input style={buttonStyle} 
                defaultValue={props.numItems}
                onChange={(e) => changeNumItems(e)}></input>
        </div>
        <button style={buttonStyle}
                onClick={props.startSort}>Go!</button>
      </div>
    </div>
  )
}

const SelectorButton = (props) => {
  
  const [shadeState, changeShadeState] = useState(false)
  const selectorStyle = {
    border: '1px solid cadetblue',
    padding: '10px',
    color: props.selected ? 'whitesmoke' : shadeState ? 'whitesmoke' : 'black',
    backgroundColor: props.selected ? 'cadetblue' : shadeState ? 'cadetBlue' : 'white',
    borderRadius: '10px',
  }

  const handleClick = (e) => {
    let sort = e.target.id;
    props.changeSort(sort)
  }

  const title = props.algo.charAt(0).toUpperCase() + props.algo.slice(1) + ' Sort'
  return (
    <div id={props.algo}
         style={selectorStyle}
         onMouseEnter={() => changeShadeState(!shadeState)}
         onMouseLeave={() => changeShadeState(!shadeState)}
         onClick={(e) => handleClick(e)}>
      {title}
    </div>
  )
}

export default AlgoSelector;
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

  const buttonStyle = {
    width: '50px',
    height: '50px',
  }

  return (
    <div style={containerStyle}>
      <div style={selectorStyle}>
        {
          props.algos.map(algo => {
            return <SelectorButton algo={algo} 
                                   key={algo} 
                                   changeSort={props.changeSort}/>
          })
        }
      </div>
      <button style={buttonStyle}>Go!</button>
    </div>
  )
}

const SelectorButton = (props) => {
  
  const [shadeState, changeShadeState] = useState(false)
  const selectorStyle = {
    border: '1px solid cadetblue',
    padding: '10px',
    color: shadeState ? 'whitesmoke' : 'black',
    backgroundColor: shadeState ? 'cadetBlue' : 'white',
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
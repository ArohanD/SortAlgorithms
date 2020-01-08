import React from 'react'

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
            return <RadioSelector algo={algo} key={algo}/>
          })
        }
      </div>
      <button style={buttonStyle}>Go!</button>
    </div>
  )
}

const RadioSelector = (props) => {
  const title = props.algo.charAt(0).toUpperCase() + props.algo.slice(1) + ' Sort'
  return (
    <div>
      <div>{title}</div>
    </div>
  )
}

export default AlgoSelector;
import React from 'react'

import './ButtonGroup.css'

const ButtonGroup = props => {
  return (
    <div className="ButtonGroup">
      <h3 className="ButtonGroup__title">{props.title}</h3>
      <div className="ButtonGroup__list">
        {props.children}
      </div>
    </div>
  )
}

export default ButtonGroup
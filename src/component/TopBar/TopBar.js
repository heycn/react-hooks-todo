import React from 'react'
import './style.scss'

const TopBar = props => {
  const { addTodoSwitch } = props

  return (
    <div className='top-bar-wrapper'>
      <h1>Todo List</h1>
      <span className='add' onClick={addTodoSwitch}>
        ＋
      </span>
    </div>
  )
}

export default TopBar

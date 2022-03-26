import React from 'react'
import './style.scss'

const TopBar = props => {
  const { showAddTodo } = props

  return (
    <div className='wrapper'>
      <h1>Todo List</h1>
      <span className='add' onClick={showAddTodo}>
        ＋
      </span>
    </div>
  )
}

export default TopBar

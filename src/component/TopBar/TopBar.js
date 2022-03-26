import React from 'react'
import './style.scss'

const TopBar = props => {
  const { showInput } = props

  return (
    <div className='wrapper'>
      <h1>Todo List</h1>
      <span className='add-icon' onClick={showInput}>
        ＋
      </span>
    </div>
  )
}

export default TopBar

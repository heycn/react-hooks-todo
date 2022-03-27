import React from 'react'
import './style.scss'

const TodoItem = props => {
  const { data } = props
  return (
    <li className='todo-item'>
      <div className='check-box'>
        <input type='checkbox' checked={data.completed} />
      </div>
      <span className='content' style={{ textDecoration: data.completed ? 'line-through' : 'none' }}>
        {data.content}
      </span>
      <div className='button-group'>
        <button className='button button-primary'>查看</button>
        <button className='button button-warning'>编辑</button>
        <button className='button button-danger'>删除</button>
      </div>
    </li>
  )
}

export default TodoItem

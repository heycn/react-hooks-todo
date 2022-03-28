import React from 'react'
import './style.scss'

const TodoItem = props => {
  const { data, showCheckDialog, showEditDialog, completeState } = props

  return (
    <li className='todo-item'>
      <div className='check-box'>
        <input
          type='checkbox'
          checked={data.completed}
          onChange={() => completeState(data.id)}
        />
      </div>
      <span className='content' style={{ textDecoration: data.completed ? 'line-through' : 'none' }}>
        {data.content}
      </span>
      <div className='button-group'>
        <button className='button button-danger'>删除</button>
        <button className='button button-warning' onClick={() => showEditDialog(data.id)}>
          编辑
        </button>
        <button className='button button-primary' onClick={() => showCheckDialog(data.id)}>
          查看
        </button>
      </div>
    </li>
  )
}

export default TodoItem

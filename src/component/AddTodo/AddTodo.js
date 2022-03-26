import React from 'react'
import './style.scss'

const AddTodo = props => {
  const { addTodoVisible } = props
  return (
    <>
      {addTodoVisible && (
        <div className='add-todo-wrapper'>
          <input type='text' placeholder='点击添加待办事件...' />
          <button className='button button-primary'>添加</button>
        </div>
      )}
    </>
  )
}

export default AddTodo

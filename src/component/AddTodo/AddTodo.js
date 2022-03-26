import React, { useRef } from 'react'
import './style.scss'

const AddTodo = props => {
  const { addTodoVisible, addListItem } = props
  const inputRef = useRef()

  const onSubmitValue = () => {
    const inputValue = inputRef.current.value.trim()
    if (inputValue.length === 0) {
      return
    }

    addListItem(inputValue)

    inputRef.current.value = ''
  }

  return (
    <>
      {addTodoVisible && (
        <div className='add-todo-wrapper'>
          <input type='text' ref={inputRef} placeholder='点击添加待办事项...' />
          <button className='button button-primary' onClick={onSubmitValue}>
            添加
          </button>
        </div>
      )}
    </>
  )
}

export default AddTodo

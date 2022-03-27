import React, { useRef } from 'react'
import './style.scss'
import Dialog from '../Dialog'

const EditDialog = props => {
  const { editDialogVisible, data, submitEdit } = props,
        inputRef = useRef(),
        checkRef = useRef()

  const submitNewData = () => {
    const value = inputRef.current.value.trim(),
          valueLength = value.valueLength,
          newData = {
            id: new Date().getTime(),
            content: value,
            completed: checkRef.current.checked
          }
    
    if (valueLength === 0) {
      inputRef.current.value = data.content
      return
    }

    submitEdit(newData, data.id)
  }

  return (
    <Dialog dialogVisible={editDialogVisible} dialogTitle='编辑待办'>
      <p className='dialog-content'>时间：{data.id}</p>
      <p className='dialog-content'>
        <textarea
          className='text-area'
          ref={inputRef}
          defaultValue={data.content}
        ></textarea>
      </p>
      <p className='dialog-content'>
        状态：
        <input
          type='checkbox'
          defaultChecked={data.completed ? true : false}
          ref={checkRef} 
        />
      </p>
      <button
      className='button button-primary confirm-button'
      onClick={submitNewData}
      >
        完成
      </button>
    </Dialog>
  )
}

export default EditDialog

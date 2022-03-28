import React, { useRef } from 'react'
import './style.scss'
import Dialog from '../Dialog'

const EditDialog = props => {
  const { editDialogVisible, data, submitEdit } = props,
        inputRef = useRef(),
        checkRef = useRef()

  const submitNewData = () => {
    const newValue = inputRef.current.value.trim(),
          newValueLength = newValue.valueLength
    
    if (newValueLength === 0) {
      inputRef.current.value = data.content
      return
    }

    const newData = {
      id: new Date().getTime(),
      content: newValue,
      completed: checkRef.current.checked
    }

    submitEdit(newData, data.id)
  }

  return (
    <Dialog dialogVisible={editDialogVisible} dialogTitle='编辑待办' >
      <p className='dialog-content'>时间：{data.id}</p>
      <p className='dialog-content'>
        <textarea
          className='text-area'
          ref={inputRef}
          defaultValue={data.content}
        />
      </p>
      <p className='dialog-content'>
        状态：
        <input
          type='checkbox'
          defaultChecked={data.completed ? true : false}
          ref={checkRef} 
        />
      </p>
      <button className='button button-primary confirm-button' onClick={submitNewData}>
        完成
      </button>
    </Dialog>
  )
}

export default EditDialog

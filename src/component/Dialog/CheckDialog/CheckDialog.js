import React from 'react'
import './style.scss'
import Dialog from '../Dialog'

const CheckDialog = props => {
  const { checkDialogVisible, data, closeDialog } = props

  return (
    <Dialog dialogVisible={checkDialogVisible} dialogTitle='查看待办'>
      <p className='dialog-content'>时间：{data.id}</p>
      <p className='dialog-content'>内容：{data.content}</p>
      <p className='dialog-content'>状态：{data.completed ? '已完成' : '未完成'}</p>
      <button className='button button-primary confirm-button' onClick={closeDialog}>
        确定
      </button>
    </Dialog>
  )
}

export default CheckDialog

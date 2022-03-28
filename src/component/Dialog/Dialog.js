import React from 'react'
import './style.scss'

const Dialog = props => {
  const { dialogVisible, dialogTitle, children } = props

  return (
    <>
      {
        dialogVisible 
          ? (
              <div className='dialog-wrapper'>
                <div className='dialog'>
                  <div className='dialog-header'>{dialogTitle}</div>
                  <div className='content-wrapper'>{children}</div>
                </div>
              </div>
            )
          : ( '' )
      }
    </>
  )
}

export default Dialog

import React, { useState } from 'react'
import TopBar from './component/TopBar/TopBar'
import AddTodo from './component/AddTodo/AddTodo'

const App = () => {
  const [addTodoVisible, setAddTodoVisible] = useState(false)

  const addTodoSwitch = () => setAddTodoVisible(!addTodoVisible)
  return (
    <div className='App'>
      <TopBar addTodoSwitch={addTodoSwitch} />
      <AddTodo addTodoVisible={addTodoVisible} />
    </div>
  )
}

export default App

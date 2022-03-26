import React, { useCallback, useState } from 'react'
import TopBar from './component/TopBar/TopBar'
import AddTodo from './component/AddTodo/AddTodo'

const App = () => {
  const [addTodoVisible, setAddTodoVisible] = useState(false)
  const [todoList, setTodoList] = useState([])

  const addTodoSwitch = () => setAddTodoVisible(!addTodoVisible)
  const addListItem = useCallback(value => {
    const dataItem = {
      id: new Date().getTime(),
      content: value,
      completed: false
    }

    setTodoList(todoList => [...todoList, dataItem])
    setAddTodoVisible(false)
  }, [])

  return (
    <div className='App'>
      <TopBar addTodoSwitch={addTodoSwitch} />
      <AddTodo addTodoVisible={addTodoVisible} addListItem={addListItem} />
    </div>
  )
}

export default App

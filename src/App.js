import React, { useCallback, useState } from 'react'
import './App.css'
import TopBar from './component/TopBar/TopBar'
import AddTodo from './component/AddTodo/AddTodo'
import TodoItem from './component/TodoItem/TodoItem'

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
      <ul className='todo-list'>
        {todoList.map((item, index) => {
          return <TodoItem data={item} key={index} />
        })}
      </ul>
    </div>
  )
}

export default App

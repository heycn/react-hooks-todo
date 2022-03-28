import React, { useCallback, useEffect, useState } from 'react'
import './App.css'
import TopBar from './component/TopBar/TopBar'
import AddTodo from './component/AddTodo/AddTodo'
import TodoItem from './component/TodoItem/TodoItem'
import CheckDialog from './component/Dialog/CheckDialog/CheckDialog'
import EditDialog from './component/Dialog/EditDialog/EditDialog'

const App = () => {
  const [addTodoVisible, setAddTodoVisible] = useState(false),
        [checkDialogVisible, setCheckDialogVisible] = useState(false),
        [editDialogVisible, setEditDialogVisible] = useState(false),
        [todoList, setTodoList] = useState([]),
        [currentData, setCurrentData] = useState({})

  useEffect(() => {
    const todoData = JSON.parse(localStorage.getItem('todoData') || '[]')
    setTodoList(todoData)
  }, [])

  useEffect(() => {
    localStorage.setItem('todoData', JSON.stringify(todoList))
  }, [todoList])

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

  const _setCurrentData = (todoList, id) => {
    setCurrentData(() => todoList.filter(item => item.id === id)[0])
  }

  const showCheckDialog = useCallback(id => {
    _setCurrentData(todoList, id)
    setCheckDialogVisible(true)
  }, [todoList])

  const showEditDialog = useCallback(id => {
    _setCurrentData(todoList, id)
    setCheckDialogVisible(true)
  }, [todoList])

  return (
    <div className='App'>
      <CheckDialog
        checkDialogVisible={checkDialogVisible}
        data={currentData}
        closeDialog={() => setCheckDialogVisible(false)}
      />
      <EditDialog>
        editDialogVisible={editDialogVisible}
      </EditDialog>
      <TopBar addTodoSwitch={addTodoSwitch} />
      <AddTodo addTodoVisible={addTodoVisible} addListItem={addListItem} />
      <ul className='todo-list'>
        {
          todoList.map((item, index) => {
            return (
              <TodoItem
                data={item}
                key={index}
                showCheckDialog={showCheckDialog}
                showEditDialog={showEditDialog}
              />
            )
          })
        }
      </ul>
    </div>
  )
}

export default App

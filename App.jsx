
import { useState } from 'react'
import CreateTodo from '../Component/CreateTodo'    // for dafault don't use {}
import {Get} from '../Component/GetTodo'            // use {} to particularly mention it


function App() {
  
  const [todos,setTodo]= useState([])
  
  fetch("http://localhost:3000/todos")
      .then( async function (res){
        const json = await res.json()
        setTodo(json.Todo_List)
      })
      // console.log(todos)
  return (
    <>
      <CreateTodo ></CreateTodo>

      <Get todos={todos}></Get>
    </>
  )
}

export default App

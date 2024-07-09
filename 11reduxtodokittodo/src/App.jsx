import { useState } from 'react'

import AddTodo from './components/Addtodo'
import Todos from './components/Todos'

function App() {
  

  return (
    <>
      <h1>Redux Toolkit</h1>
      <AddTodo/>
      <Todos/>
    </>
  )
}

export default App

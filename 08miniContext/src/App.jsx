import { useState } from 'react'
//import UserContext from './Context/userContext'
import UserContextProvider from './Context/UserContextProvider'


function App() {
  //const [count, setCount] = useState(0)

  return (
    <UserContextProvider>
      <h1>React with Chai and share is important</h1>
    </UserContextProvider>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './componenets/Card'
function App() {
  //const [count, setCount] = useState(0)
  let username = "Ashutosh"
  return (
    <>
      <h1 className='text-3xl font-bold underline'>
        TAILWIND </h1>
        <Card channel = {username}/>
        <Card/>
    </>
  )
}

export default App

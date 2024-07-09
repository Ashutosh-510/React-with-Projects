import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// Remove and add value using HOOKS 


function App() {
  // HOOKS :- learn about useState
  // we can name the parameter as we like ,
  // useState does not on specific naming
  let [counter , setCounter] = useState(15)
  
  const addValue = () => {
    counter += 1
    if(counter > 20){
      counter = 20;
      setCounter(counter);
    }
    else{
      setCounter(counter);
    }
    
    
    console.log(counter);
  }

  const removeValue = () => {
    if(counter <= 0){
      counter = 0;
      setCounter(counter);
    }
    else{
      setCounter(counter - 1);
    }
    console.log(counter);
  }
  return (
    <>
      <h1> Chai aur react </h1>
      <h2> Counter value : {counter}</h2>

      <button onClick={addValue}
      > add value</button>
      <br/>
      <button onClick={removeValue}>
        remove value</button>
    </>
  )
}

export default App

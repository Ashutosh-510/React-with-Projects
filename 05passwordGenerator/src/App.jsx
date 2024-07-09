import { useState , useCallback ,useEffect, useRef} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [array , setlength] = useState(8)
  const [numberAllowed , setnumberallowed] = useState(false);

  const [charAllowed , setcharAllowed] = useState(false)

  const [password , setpassword] = useState("")

  //useRef hook
  const passwordRef = useRef(null);

  const [buttonColor, setButtonColor] = useState('blue');
  

  //useCallBack hook ,it used memorize the previous work and 
  // store it in cache memory for fast execution of code 

  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefgijklmnopqrstuvwxyz";
    if(numberAllowed){
      str += "0123456789";
    }
    if(charAllowed) str += "!@#$%^&*()_+=-{}[]~`"
    
    for(let i = 1;i<= array;i++){
      let char = Math.floor(Math.random() * str.length + 1)
      pass += str.charAt(char);
    }

    setpassword(pass);

  }, [array,charAllowed,numberAllowed,setpassword])


  //useEffect hook 
  useEffect(() => {
    passwordGenerator()
  },[array,charAllowed,numberAllowed,passwordGenerator])


  // Building Copytoclipboard logic 
  const copyPasswordToclipboard = useCallback(() => {
    // now we useRef to copy generated paswword , we use 
    //useRef to enahnce user expierence  when he/she try to copy something 
    // It also give optimize approach and use some dependencies to copy something 

    passwordRef.current?.select()

    //It use to give range for copying  text 
    passwordRef.current?.setSelectionRange(0,7)
    // we can copy direct by using window object 
    //window.navigator.clipboard.writeText(password)


  },[password])

  const changeColor = () => {
    // Change button color to red
    setButtonColor('red');

    // Revert back to original color after 3 seconds
    setTimeout(() => {
      setButtonColor('blue');
    }, 1000); // 3000 milliseconds = 3 seconds
  };



  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md 
      rounded-lg px-4 my-8 text-orange-500 bg-gray-800'>
        <h1 className='text-white text-center 
        my-3'>Password Generator</h1>
        <div className='flex shadow 
          rounded-lg overflow-hidden mb-4'
          ><input 
          type='text'
          value={password}
          className='outline-none w-full py-1 px-3'
          placeholder='Password'
          readOnly
          ref={passwordRef}
          />

          <button 
           onClick={() => {
            copyPasswordToclipboard()
            changeColor()
          }}
          style={{ backgroundColor: buttonColor }}
          className='outline-none bg-blue-700 text-white
          px-3 py-0.5 shrink-0'
          
          >copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
              <input 
              type="range"
              min={6}
              max={100}
              value={array}
              className='cursor-pointer'
              onChange={(e) => {setlength(e.target.value)}}
               />

              <label >Length : {array}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              defaultChecked = {numberAllowed}
              id='numberInput'
              onChange={() => {
                setnumberallowed((prev) => ! prev);
              }}
              
            
            />
            <label htmlFor='numberInput'>Numbers</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input 
              type='checkbox'
              defaultChecked = {charAllowed}
              id='charInput'
              onChange={() => {
                setcharAllowed((prev) => ! prev);
              }}
              
            
            />
            <label htmlFor='charInput'>Charcters</label>
              
          </div>
        </div>
      </div>

    </>
      
  )
}

export default App

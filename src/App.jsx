import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(15)
  var [remove, setRemove] = useState(15)
  // let counter = 15
  // console.log("value", Math.random())
 const addValue =()=>{
  // counter = counter + 1
  setCounter(counter + 1)
  // console.log("Clicked",counter);
 }
 const removeValue = ()=>{
  remove = remove - 1
  setRemove(remove)
 }
  
  

  return (
    <>
     <h1>chai aur react</h1>
     <h2>Counter value:{counter}</h2>
     <h2>Remove value:{remove}</h2>
     <h1 className='bg=green-500'>hellpo taiw</h1>

     <button onClick={addValue}>Add value {counter}</button><br />
     <button onClick={removeValue}>remove value {remove}</button>

    </>
  )
}

export default App

import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const handleCount = (value)=>{
    setCount(count+value);
  } 

  return (
    <div className="App">
     <h2>Hello React Counter: {count} </h2>
     <button onClick={()=>{handleCount(1)}}>Add 1</button>
    </div>
  )
}

export default App

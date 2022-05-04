
// import { useState } from 'react';
import './App.css'

import {Button} from "./compontnts/button"
function App() {
  
//  const [theme, setTheme] = useState("light"); 
 
 
  return (
    <div className="App">
         <h1>Hello</h1>
            <Button onClick={()=>{console.log("add 1")}}>Add 1 </Button>
            <Button onClick={()=>{console.log("Sub 1")}}>Sub 1 </Button>
 
        <br />
        {/* <button onClick={theme==="light" ""}>
          Change Theme
          </button> */}
    </div>
  )
  }
export default App
// 1. I want to store a value, and not loose it after re-render !
// 2 Change in this value, should not cause re-reader !
// >>>>>>>>>>> user       ref
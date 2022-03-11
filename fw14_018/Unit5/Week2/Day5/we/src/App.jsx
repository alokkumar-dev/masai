
import './App.css'
import {Button} from "./compontnts/button"
function App() {
  
 
  return (
    <div className="App">
         <h1>Hello</h1>
        <Button>Add 1 </Button>
        <Button>Sub 1 </Button>
    </div>
  )
  }
export default App
// 1. I want to store a value, and not loose it after re-render !
// 2 Change in this value, should not cause re-reader !
// >>>>>>>>>>> user       ref
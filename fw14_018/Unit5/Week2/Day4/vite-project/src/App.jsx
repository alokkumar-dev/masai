import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import { Forms } from './components/Forms'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <h1>Hello Vite React</h1>
        <Forms />
    </div>
  )
}

export default App

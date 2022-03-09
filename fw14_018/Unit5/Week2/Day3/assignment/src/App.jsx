
import { useState } from 'react';
import './App.css';
import { StopWatch } from './components/Timer';

function App() {

  const [show, setShow] = useState(true);

  return (
    <div className="App">
      {show ? <StopWatch />: ""}

      <button onClick={()=>{
        setShow(!show);
      }}>{show ? "Hide Timer" : "Show Timer"}
      </button>

    </div>
  );
}

export default App;

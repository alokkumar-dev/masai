import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Hello } from "./components/Hello";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar>
        <Routes>
          <Route path={"/"} element={<Hello />} />
          <Route path={"/about"} element={<About />} />
        </Routes>
      </Navbar>
    </div>
  );
}

export default App;

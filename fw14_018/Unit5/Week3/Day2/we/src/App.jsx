import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Hello } from "./components/Hello";
import { Navbar } from "./components/Navbar";
import { Productdetails } from "./components/ProductDetails";
import { Users } from "./components/Users";

function App() {
  return (
    <div className="App">
      <Navbar />
        <Routes>
          <Route path="/" element={<Hello />} />
          <Route path="/about" element={<About />} />
          <Route path="/product/:id" element={<Productdetails />} />
          <Route path="/users" element={<Users />} />
        </Routes>
    </div>
  );
}

export default App;

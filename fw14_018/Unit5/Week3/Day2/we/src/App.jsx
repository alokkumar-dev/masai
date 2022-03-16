import { Route, Routes } from "react-router-dom";
import "./App.css";
import { About } from "./components/About";
import { Hello } from "./components/Hello";
import { Login } from "./components/Login";
import { Navbar } from "./components/Navbar";
import { Productdetails } from "./components/ProductDetails";
import { UserDetails } from "./components/UserDetails";
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
          <Route path="/users/:id" element={<UserDetails />} />
          <Route path="/login" element={<Login />} />
        </Routes>
    </div>
  );
}

export default App;

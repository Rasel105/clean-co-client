import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Services from "./Pages/Services";
import { themeChange } from 'theme-change'
import { useEffect } from "react";
function App() {
  

useEffect(() => {
  themeChange(false)
  // 👆 false parameter is required for react project
}, [])
  return (

    <Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </Navbar>
  );
}

export default App;

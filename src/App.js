import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/Header/About";
import OurMenu from "./pages/Header/Ourmenu";
import Shop from "./pages/Header/Shop";
import Contact from "./pages/Header/Contact";
import CartPage from "./components/Layouts/CartPage";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About/>}/>
        <Route path="/OurMenu" element={<OurMenu/>}/>
        <Route path="/Shop" element={<Shop/>}/>
        <Route path="/Contact" element={<Contact/>}/>
        <Route path="/CartPage" element={<CartPage/>}/>
      </Routes>
    </Router>
  );
}

export default App;

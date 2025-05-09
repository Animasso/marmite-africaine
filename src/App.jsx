import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import NavBar from "./components/Navbar.jsx";
import Hero from "./components/hero.jsx";
import Horaire from "./components/Horaire.jsx";
import Contact from "./components/Contact.jsx";
import Services from "./pages/Services.jsx";
import Menus from "./pages/Menus.jsx";
import SwiperGallery from "./components/SwiperGallery.jsx";

const App = () => {
  return (
    <Router>
      <div className="bg-gradient-to-r from-yellow-300 to-yellow-600 bg-fixed bg-center bg-cover min-h-screen">
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Hero />
                <SwiperGallery />
                <Horaire />
                <Contact />
              </>
            }
          />
          <Route path="/menu" element={<Menus />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

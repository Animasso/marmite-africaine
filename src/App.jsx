import React from "react";
import "./index.css";
import NavBar from "./components/Navbar.jsx";
import Hero from "./components/hero.jsx";
import heroImage from "./assets/bg2.png";
import Horaire from "./components/Horaire.jsx";
const App = () => {
  return (
    <div
      className=" bg-gradient-to-r from-yellow-300 to-yellow-600   bg-fixed bg-center bg-cover"
      // style={{ backgroundImage: `url(${heroImage})` }}
    >
      <NavBar />
      <Hero />
      <Horaire />
    </div>
  );
};

export default App;

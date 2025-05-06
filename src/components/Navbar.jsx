import React from "react";
import logoBanner from "../assets/logoban1.jpeg";
const Header = () => {
  return (
    <header className="fixed top-0 w-full z-50 bg-[#8b0000]/80 backdrop-blur-sm shadow-md flex justify-between items-center">
      <div className="ml-5 space-x-3 flex justify-center items-center py-4">
        <img
          src={logoBanner}
          alt="La Marmite Africaine"
          className="w-24 h-24 rounded-full border border-white object-cover"
        />
        <h1 className="font-title text-6xl text-white">La Marmite Africaine</h1>
      </div>

      {/* Barre de navigation */}
      <nav className="text-yellow-50 py-4 px-6 self-center">
        <ul className="flex justify-center items-center space-x-10 font-semibold text-lg">
          <li>
            <a
              href="#home"
              className="hover:underline hover:text-yellow-300 transition"
            >
              Accueil
            </a>
          </li>
          <li>
            <a
              href="#menu"
              className="hover:underline hover:text-yellow-300 transition"
            >
              Menu
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:underline hover:text-yellow-300 transition"
            >
              Contact
            </a>
          </li>
          <li>
            <a
              href="#service"
              className="hover:underline hover:text-yellow-300 transition"
            >
              Services
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

import React from "react";
import logoBanner from "../assets/logoban1.jpeg";
import { AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import NavBarMobile from "./NavbarMobile";
const Header = ({ setModalOpen }) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <header className="fixed top-0 w-full z-50 bg-[#8b0000]/80 backdrop-blur-sm shadow-md flex justify-between items-center">
      <div className="ml-5 space-x-3 flex justify-center items-center py-4">
        <img
          src={logoBanner}
          alt="La Marmite Africaine"
          className="w-24 h-24 rounded-full border border-white object-cover"
        />
        <h1 className="font-title  text-3xl  md:text-5xl text-white">
          La Marmite Africaine
        </h1>
      </div>

      {/* Barre de navigation */}
      <nav className="text-yellow-50 py-4 px-6 self-center max-md:hidden ">
        <ul className="flex justify-center items-center space-x-10 font-semibold text-lg">
          <li>
            <HashLink
              to="/#home"
              className="hover:underline hover:text-yellow-300 transition"
            >
              Accueil
            </HashLink>
          </li>
          <li>
            <Link
              to={"/menu"}
              className="hover:underline hover:text-yellow-300 transition"
            >
              Menu
            </Link>
          </li>

          <li>
            <HashLink
              to="/#contact"
              className="hover:underline hover:text-yellow-300 transition"
            >
              Contact
            </HashLink>
          </li>
          <li>
            <Link
              to="/services"
              className="hover:underline hover:text-yellow-300 transition"
            >
              Services
            </Link>
          </li>
        </ul>
      </nav>
      <button className="md:hidden text-2xl" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? (
          <FaTimes className="text-secondary" />
        ) : (
          <FaBars className="text-secondary" />
        )}
      </button>
      {/* Menu mobile */}
      <AnimatePresence>
        {isOpen && (
          <NavBarMobile setModalOpen={setModalOpen} setIsOpen={setIsOpen} />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;

import React from "react";
import Cadre from "../assets/cadre.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className=" overflow-hidden mt-30 w-full  flex items-center justify-center px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Image */}
        <div className="flex justify-center overflow-hidden">
          <motion.img
            initial={{ rotate: 0, x: -300 }}
            animate={{ rotate: 360, x: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            src={Cadre}
            className="w-80 h-80 md:w-96 md:h-96 rounded-full shadow-lg object-cover border-4 border-yellow-500"
            alt="Cadre"
          />
        </div>

        {/* Texte */}
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="bg-white rounded-3xl py-10 px-8 shadow-2xl text-center md:text-left"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#8b0000] mb-6">
            Bienvenue à <br />
            <span className="text-yellow-600 font-title">
              La Marmite Africaine
            </span>
          </h1>
          <p className="text-lg text-gray-800 leading-relaxed">
            Notre restaurant familliale vous propose un voyage culinaire unique
            à travers les saveurs authentiques des différentes régions
            d’Afrique. Du mafé sénégalais au poulet yassa, en passant par le
            ndolé camerounais et le thieboudienne, nos plats sont préparés
            maison avec passion. Dans un cadre chaleureux et convivial, vous
            profitez d’une ambiance typiquement africaine, le tout à des prix
            abordables pour que chacun puisse savourer cette richesse culinaire.
          </p>
          <button className=" mt-3 font-title bg-amber-400 text-[#8b0000] font-bold py-2 px-4 rounded-lg hover:bg-yellow-500 transition duration-300">
            <Link to={"/menu"}>Voir le Menu</Link>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

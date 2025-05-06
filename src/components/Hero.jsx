import React from "react";
import Cadre from "../assets/cadre.png"; // Assurez-vous que le chemin est correct

const Hero = () => {
  return (
    <section className=" mt-30 w-full  flex items-center justify-center px-6 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
        {/* Image */}
        <div className="flex justify-center">
          <img
            src={Cadre}
            className="w-80 h-80 md:w-96 md:h-96 rounded-full shadow-lg object-cover border-4 border-yellow-500"
            alt="Cadre"
          />
        </div>

        {/* Texte */}
        <div className="bg-white rounded-3xl py-10 px-8 shadow-2xl text-center md:text-left">
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
        </div>
      </div>
    </section>
  );
};

export default Hero;

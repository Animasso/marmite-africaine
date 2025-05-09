import React from "react";

const Services = () => {
  return (
    <div className="mt-32 p-4 bg-white/35 rounded-lg shadow-2xl max-w-3xl mx-auto">
      <div className=" mt-14  mb-16">
        <h1 className="text-4xl text-white font-title font-bold text-center mt-10">
          Nos Services
        </h1>
        <p className="text-center font-bold font-title mt-4 text-lg">
          Découvrez nos services de qualité
        </p>
        <div className="mt-10">
          <h2 className="text-2xl underline text-white font-title font-semibold">
            Service de Traiteur
          </h2>
          <p className="mt-2 text-lg">
            Nous proposons un service de traiteur pour vos événements spéciaux,
            que ce soit un mariage, un anniversaire ou une fête d'entreprise.
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl underline text-white font-title font-semibold">
            Livraison à Domicile
          </h2>
          <p className="mt-2 text-lg">
            Profitez de notre service de livraison à domicile pour savourer nos
            plats africains sans quitter le confort de votre maison.
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl underline text-white font-title font-semibold">
            Ateliers de Cuisine
          </h2>
          <p className="mt-2 text-lg">
            Participez à nos ateliers de cuisine pour apprendre à préparer des
            plats africains authentiques. Que vous soyez débutant ou cuisinier
            expérimenté, nos ateliers sont adaptés à tous les niveaux.
          </p>
        </div>
        <div className="mt-10">
          <h2 className="text-2xl underline text-white font-title font-semibold">
            Événements Privés
          </h2>
          <p className="mt-2 text-lg">
            Réservez notre restaurant pour des événements privés. Nous
            personnalisons le menu selon vos préférences et vous offrons un
            service exceptionnel.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;

import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// Liste des services
const descriptionServices = [
  {
    title: "Service de Traiteur",
    description:
      "Nous proposons un service de traiteur pour vos événements spéciaux, que ce soit un mariage, un anniversaire ou une fête d'entreprise.",
  },
  {
    title: "Livraison à Domicile",
    description:
      "Profitez de notre service de livraison à domicile pour savourer nos plats africains sans quitter le confort de votre maison. Retrouvez-nous sur Uber Eats et Deliveroo.",
  },
  {
    title: "Ateliers de Cuisine",
    description:
      "Participez à nos ateliers pour apprendre à cuisiner des plats africains authentiques. Débutants et passionnés sont les bienvenus.",
  },
  {
    title: "Événements Privés",
    description: (
      <>
        Réservez notre restaurant pour vos événements ou la partie{" "}
        <Link to="/bar" className="underline text-[#8b0000] font-semibold">
          Bar
        </Link>
        . Menu personnalisé et service sur mesure.
      </>
    ),
  },
];

// Animations
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const Services = () => {
  return (
    <section className="mt-32 px-4">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
        className="max-w-3xl mx-auto bg-white/50 backdrop-blur-md rounded-xl shadow-lg p-8 border border-gray-200"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl text-[#8b0000] font-title font-bold text-center mb-2"
        >
          Nos Services
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-center font-medium text-gray-700 mb-10"
        >
          Découvrez nos prestations uniques pour tous vos événements.
        </motion.p>

        <div className="space-y-8">
          {descriptionServices.map((service, i) => (
            <motion.div key={i} variants={itemVariants}>
              <h2 className="text-xl font-semibold text-[#8b0000] underline underline-offset-4 mb-1">
                {service.title}
              </h2>
              <p className="text-gray-800 text-base leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Services;

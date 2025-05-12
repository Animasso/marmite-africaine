import React from "react";
import { motion } from "framer-motion";
import BarPic from "../assets/barAfricain.webp";

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3, delayChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Bar = () => {
  return (
    <section className="mt-32 p-6 bg-white/30 backdrop-blur-md rounded-xl shadow-2xl max-w-5xl mx-auto border border-white/50">
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={containerVariants}
        className="space-y-6"
      >
        <motion.h1
          variants={itemVariants}
          className="text-4xl text-[#8b0000] font-title font-bold text-center"
        >
          Notre Bar
        </motion.h1>
        <motion.p
          variants={itemVariants}
          className="text-center font-title font-medium text-lg"
        >
          Notre bar est ouvert de 18h à 23h tous les jours. Réservez pour vos
          anniversaires, mariages et autres événements. Découvrez notre
          sélection de boissons africaines et internationales.
        </motion.p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center mt-10">
          <motion.img
            variants={itemVariants}
            src={BarPic}
            alt="bar"
            className="w-full h-96 object-cover rounded-lg shadow-xl border border-white/70"
          />

          <motion.div variants={itemVariants} className="space-y-8">
            <div>
              <h2 className="text-2xl underline text-[#8b0000] font-title font-semibold">
                Boissons Africaines
              </h2>
              <p className="mt-2 text-lg">
                Profitez de notre sélection de boissons africaines, y compris le
                bissap, le ginger beer et le tamarin.
              </p>
            </div>

            <div>
              <h2 className="text-2xl underline text-[#8b0000] font-title font-semibold">
                Cocktails Exotiques
              </h2>
              <p className="mt-2 text-lg">
                Dégustez nos cocktails exotiques préparés avec des fruits frais
                et des épices africaines.
              </p>
              <ul className="list-disc list-inside mt-2 text-lg">
                <li>Mojito Africain</li>
                <li>Pina Colada Tropicale</li>
                <li>Caipirinha au Gingembre</li>
                <li>Daïquiri à la Mangue</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Bar;

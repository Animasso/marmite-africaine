import React from "react";
import MenuLine from "../components/MenuLine";
import { motion } from "framer-motion";
import {
  entrees,
  plats,
  Accompagnements,
  desserts,
  boissons,
} from "../data.js";
const Menus = () => {
  return (
    <section className=" pt-32 py-16 px-4 max-w-6xl mx-auto space-y-12">
      <div>
        <h2 className="text-3xl font-bold text-[#8b0000] mb-6">Entrées</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {entrees.map((entree, i) => (
            <motion.div
              key={entree.id}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.5 }}
            >
              <MenuLine
                key={entree.id}
                name={entree.name}
                description={entree.description}
                price={entree.price}
                image={entree.image}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-[#8b0000] mb-6">
          Plats principaux
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {plats.map((plat, i) => (
            <motion.div
              key={plat.id}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.5 }}
            >
              <MenuLine
                key={plat.id}
                name={plat.name}
                description={plat.description}
                price={plat.price}
                image={plat.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-[#8b0000] mb-6">
          Accompagnements
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {Accompagnements.map((accompagnement, i) => (
            <motion.div
              key={accompagnement.id}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.5 }}
            >
              <MenuLine
                key={accompagnement.id}
                name={accompagnement.name}
                description={accompagnement.description}
                price={accompagnement.price}
                image={accompagnement.image}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <div>
        <h2 className="text-3xl font-bold text-[#8b0000] mb-6">Desserts</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {desserts.map((dessert, i) => (
            <motion.div
              key={dessert.id}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.5 }}
            >
              <MenuLine
                key={dessert.id}
                name={dessert.name}
                description={dessert.description}
                price={dessert.price}
                image={dessert.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
      <div>
        <h2 className="text-3xl font-bold text-[#8b0000] mb-6">Boissons</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {boissons.map((boisson, i) => (
            <motion.div
              key={boisson.id}
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.5 }}
            >
              <MenuLine
                key={boisson.id}
                name={boisson.name}
                description={boisson.description}
                price={boisson.price}
                image={boisson.image}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Menus;

import React from "react";
import { motion } from "framer-motion";

const NavBarMobile = ({ setIsOpen }) => {
  const NavbarMenu = [
    { id: 1, title: "ACCUEIL", link: "/" },
    { id: 2, title: "MENUS", link: "#menus" },
    { id: 3, title: "CONTACT", link: "#contct" },
    { id: 4, title: "SERVICES", link: "#services" },
  ];
  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 12 }}
      exit={{ y: -100, opacity: 0 }}
      className="md:hidden  bg-[#8b0000]/80 absolute top-32 left-0 w-full font-title  text-white  shadow-lg"
    >
      <ul className="flex flex-col font-bold  items-center space-y-4 py-4">
        {NavbarMenu.map((item) => (
          <li key={item.id}>
            <a
              href={item.link}
              className=" uppercase hover:text-black transition duration-300"
              onClick={() => setIsOpen(false)}
            >
              {item.title}
            </a>
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default NavBarMobile;

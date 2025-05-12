import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const NavBarMobile = ({ setIsOpen }) => {
  const NavbarMenu = [
    { id: 1, title: "ACCUEIL", link: "/#home", type: "hash" },
    { id: 2, title: "MENUS", link: "/menu", type: "link" },
    { id: 3, title: "SERVICES", link: "/services", type: "link" },
    { id: 4, title: "BAR", link: "/bar", type: "link" },
    { id: 5, title: "CONTACT", link: "/#contact", type: "hash" },
  ];

  return (
    <motion.div
      initial={{ y: -100 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", damping: 12 }}
      exit={{ y: -100, opacity: 0 }}
      className="md:hidden bg-[#8b0000]/80 absolute top-32 left-0 w-full font-title text-white shadow-lg z-50"
    >
      <ul className="flex flex-col font-bold items-center space-y-4 py-4">
        {NavbarMenu.map((item) => (
          <li key={item.id}>
            {item.type === "link" ? (
              <Link
                to={item.link}
                className="uppercase hover:text-yellow-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </Link>
            ) : (
              <HashLink
                to={item.link}
                smooth
                className="uppercase hover:text-yellow-300 transition duration-300"
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </HashLink>
            )}
          </li>
        ))}
      </ul>
    </motion.div>
  );
};

export default NavBarMobile;

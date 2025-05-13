import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import { motion } from "framer-motion";
import Logo from "../assets/logoban1.jpeg";

const Footer = () => {
  return (
    <footer className=" mt-10 bg-gradient-to-r from-yellow-500 to-yellow-700 text-white py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="container flex flex-col md:flex-row  justify-between items-center"
      >
        {/* logo */}
        <div className="flex ml-3 items-center gap-2 text-2xl font-bold uppercase">
          <img
            src={Logo}
            className=" h-24 w-24 object-cover rounded-full mr-4"
            alt=" logo"
          />
          <p className=" font-title">La Marmite Africaine</p>
        </div>
        {/* social */}

        {/* copyright */}
        <div className="text-xs max-md:mt-2 text-center ">
          &copy; 2025 La Marmite Africaine. Tous droits réservés.AsidProd
        </div>
        <div className="mr-5 text-3xl flex items-center gap-4 mt-6 text-white">
          <FaInstagram className=" hover:text-[#8b0000]" />
          <FaFacebookF className=" hover:text-[#8b0000]" />
          <FaTwitter className=" hover:text-[#8b0000]" />
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;

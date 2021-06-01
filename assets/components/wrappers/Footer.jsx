import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="grid pt-2 sm:grid-cols-4 sm:gap-10 bg-gray-200 h-auto sm:h-32 w-full bottom-0 sm:pt-10">
      <div className="pl-2 sm:pl-6 pt-2 col-span-1">
        <img
          src="https://www.payqin.com/wp-content/uploads/2020/09/n3-1.png"
          alt=""
          className="h-8"
        />
      </div>
      <div className="col-span-2 mt-2 sm:mt-0">
        <ul className="md:flex text-gray-500 text-md">
          <motion.li
            className="mx-2 sm:mx-3"
            initial={{ x: 0 }}
            whileHover={{ x: 1 }}
          >
            <a href="#">A Propos</a>
          </motion.li>
          <motion.li
            className="mx-2 sm:mx-3"
            initial={{ x: 0 }}
            whileHover={{ x: 1 }}
          >
            <a href="#">Aide</a>
          </motion.li>
          <motion.li
            className="mx-2 sm:mx-3"
            initial={{ x: 0 }}
            whileHover={{ x: 1 }}
          >
            <a href="#">Assurance</a>
          </motion.li>
          <motion.li
            className="mx-2 sm:mx-3"
            initial={{ x: 0 }}
            whileHover={{ x: 1 }}
          >
            <a href="#">Ambassadeurs PayQin</a>
          </motion.li>
          <motion.li
            className="mx-2 sm:mx-3"
            initial={{ x: 0 }}
            whileHover={{ x: 1 }}
          >
            <a href="#">Mentions Légales</a>
          </motion.li>
        </ul>
      </div>
      <div className="mt-3 sm:mt-0 col-span-1 flex text-blue-400 text-md pb-2 sm:pb-0">
        <a href="#" className="mx-3">
          Facebook
        </a>
        <a href="#" className="mx-3">
          Instagram
        </a>
        <motion.div
          className="border-blue-400 border-2 rounded-lg h-8 w-auto"
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
        >
          <a href="#" className="mx-3">
            Contactez nous
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;

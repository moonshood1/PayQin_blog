import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const Overlay = ({ setShowOverlay }) => {
  const handleClick = () => {
    setShowOverlay(false);
  };

  const linkVariants = {
    hidden: {
      x: "-250vw",
    },
    visible: {
      x: 0,
      transition: {
        duration: 1.6,
        delay: 0.4,
      },
    },
  };
  const containeVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1.4,
      },
    },
  };
  return (
    <motion.div
      className="w-2/3 h-screen bg-black bg-opacity-80 sm:hidden fixed top-0 left-0 z-10 "
      variants={containeVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="bg-red-500 h-8 w-8 p-4 grid place-content-center rounded-full ml-64 mt-6 ">
        <button onClick={handleClick} className="text-white font-bold text-xl ">
          X
        </button>
      </div>
      <div>
        <ul className="pl-4">
          <motion.li
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            className="text-white font-bold my-4 text-lg"
          >
            <Link to="/">Accueil</Link>
          </motion.li>
          <motion.li
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            className="text-white font-bold my-4 text-lg"
          >
            <a href="https://payqin.com">Visiter PayQin</a>
          </motion.li>
          <motion.li
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            className="text-white font-bold my-4 text-lg"
          >
            <a href="https://payqin.com/#/developpers">Developpeurs </a>
          </motion.li>
          <motion.li
            variants={linkVariants}
            initial="hidden"
            animate="visible"
            className="text-white font-bold my-4 text-lg"
          >
            <a href="https://payqin.com/#/pricing">Tarification </a>
          </motion.li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Overlay;

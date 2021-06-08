import React from "react";
import { motion } from "framer-motion";

const loaderVariants = {
  animationOne: {
    x: [-20, 20],
    y: [0, -30],
    transition: {
      x: {
        duration: 0.5,
        repeat: Infinity,
        //repeatType: "reverse",
      },
      y: {
        duration: 0.25,
        repeat: Infinity,
        ease: "easeOut",
        //repeatType: "reverse",
      },
    },
  },
};
const Loader = () => {
  return (
    <>
      <div className="flex flex-wrap w-full">
        <div className="w-4 h-4 mx-1 rounded-full bg-gray-700"></div>
        <div className="w-4 h-4 mx-1 rounded-full bg-gray-700"></div>
        <div className="w-4 h-4 mx-1 rounded-full bg-gray-700"></div>
      </div>
    </>
  );
};

export default Loader;

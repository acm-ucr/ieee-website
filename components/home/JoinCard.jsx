import React, { useState } from "react";
import { motion } from "framer-motion";
import { icons } from "@/components/data/icons";

const JoinCard = ({ name, text, background, border, link, index }) => {
  const [states, setStates] = useState(0);
  console.log(text.toLowerCase());
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: "teew", delay: 0.3 * index }}
      className={`py-3 flex flex-col items-center w-11/12 duration-500 my-1
      ${states === 0 ? "bg-white" : background}
      `}
    >
      <div className={`${states === 0 ? text : "text-white"} text-6xl`}>
        {icons[name.toLowerCase()]}
      </div>
      <p
        className={`font-teko text-xl md:text-2xl mb-2 
        ${states === 0 ? text : "text-white"}`}
      >
        {name}
      </p>
      <div
        className={`w-9/12 h-0.5 ${states === 0 ? background : "bg-white"}`}
      />
      <motion.a
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500 }}
        href={link}
        target="_blank"
        noreferrer="noopener"
      >
        <button
          className={`pb-1 pt-1 font-teko my-3 border-2 text-xl md:text-3xl px-4
          ${states === 0 ? border : "border-white"} 
          ${states === 0 ? text : "text-white"} 
          ${states === 1 ? background : "bg-white"}
          `}
          onMouseEnter={() => setStates(1)}
          onMouseLeave={() => setStates(0)}
        >
          Join
        </button>
      </motion.a>
    </motion.div>
  );
};

export default JoinCard;

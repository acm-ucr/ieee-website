import React, { useState } from "react";
import { motion } from "framer-motion";

const JoinCard = ({ name, text, background, border, icon, link }) => {
  const [states, setStates] = useState(0);

  return (
    <div
      className={`  flex flex-col items-center w-11/12 duration-500
      ${states === 0 ? "bg-white" : background}
      `}
    >
      <div className={`w-full h-5 ${background}`} />
      <div className={`${states === 0 ? text : "text-white"}`}>{icon}</div>
      <p
        className={`font-teko text-xl md:text-2xl mb-2 
        ${states === 0 ? text : "text-white"}`}
      >
        {name}
      </p>
      <div
        className={`w-full h-0.5 ${states === 0 ? background : "bg-white"}`}
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
    </div>
  );
};

export default JoinCard;

import React, { useState } from "react";
import { motion } from "framer-motion";

const JoinCard = ({ name, text, background, border, icon, link }) => {
  const [states, setStates] = useState(0);

  return (
    <div
      className={` h-60 w-44 flex flex-col items-center 
      ${states === 0 ? "bg-white" : background}
      `}
    >
      <div className={`w-full h-5 ${background}`} />
      <div className={`${states === 0 ? text : "text-white"}`}>{icon}</div>
      <p
        className={`font-teko text-4xl mb-2 
        ${states === 0 ? text : "text-white"}`}
      >
        {name}
      </p>
      <div className={`w-36 h-0.5 ${states === 0 ? background : "bg-white"}`} />
      <motion.a
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500 }}
        href={link}
        target="_blank"
        noreferrer="noopener"
      >
        <button
          className={`pb-1 pt-1 w-28 font-teko mt-3 border-2 text-4xl
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

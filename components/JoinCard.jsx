import React, { useState } from "react";
import { BsDiscord, BsFillCalendarHeartFill } from "react-icons/bs";
import { FaEnvelope, FaLink } from "react-icons/fa";
import { motion } from "framer-motion";

const JoinCard = ({ name, color, icon, link }) => {
  const getIcon = () => {
    switch (icon) {
      case "discord":
        return (
          <BsDiscord
            className={`text-6xl mt-3 mb-2 
            text-${states === 0 ? color : "white"}
            `}
          />
        );
      case "email":
        return (
          <FaEnvelope
            className={`text-5xl mt-3 mb-3 
            text-${states === 0 ? color : "white"}
            `}
          />
        );
      case "link":
        return (
          <FaLink
            className={`text-5xl mt-3 mb-3 
            text-${states === 0 ? color : "white"}
            `}
          />
        );
      case "events":
        return (
          <BsFillCalendarHeartFill
            className={`text-5xl mt-3 mb-3 
            text-${states === 0 ? color : "white"}
            `}
          />
        );
    }
  };
  const [states, setStates] = useState(0);

  return (
    <div
      className={` h-64 w-48 flex flex-col items-center 
      bg-${states === 0 ? "white" : color}
      `}
    >
      <div className="w-full h-5 bg-ieee-purple" />
      {getIcon()}
      <p
        className={`font-teko text-4xl mb-2 
        text-${states === 0 ? color : "white"}`}
      >
        {name}
      </p>
      <div className={`w-36 h-0.5 bg-${states === 0 ? color : "white"}`} />
      <motion.a
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500 }}
        href={link}
        target="_blank"
        noreferrer="noopener"
      >
        <button
          className={`pb-1 pt-1 w-28 font-teko mt-3 mb-4 border-3 text-4xl 
          border-${states === 0 ? color : "white"} 
          text-${states === 0 ? color : "white"} 
          bg-${states === 1 ? color : "white"}
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

import React from "react";
import { motion } from "framer-motion";
import { FaEnvelope, FaLink } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

const ProjectCard = ({
  name,
  colour,
  textColour,
  logoIcon,
  linkOne,
  linkTwo,
  linkThree,
}) => {
  return (
    <div className={`w-11/12 flex flex-col items-center ${colour}`}>
      <div className="w-full aspect-square p-4 flex items-center justify-center">
        {logoIcon}
      </div>
      <div className={` w-full flex flex-col items-center bg-white`}>
        <p
          className={`item-center font-teko text-xl lg:text-3xl mb-0 mt-2 ${textColour}`}
        >
          {name}
        </p>

        <div className={`w-full h-0.5 mb-2 ${colour}`}></div>

        <div className={`justify-center w-full h-12 flex flex-wrap flex-row`}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 500 }}
            href={linkOne}
          >
            <BsDiscord className={` text-xl lg:text-3xl m-1 ${textColour}`} />
          </motion.a>

          <motion.a
            transition={{ type: "spring", stiffness: 500 }}
            whileHover={{ scale: 1.2 }}
            href={linkTwo}
          >
            <FaEnvelope className={` text-xl lg:text-3xl m-1 ${textColour}`} />
          </motion.a>

          <motion.a
            transition={{ type: "spring", stiffness: 500 }}
            whileHover={{ scale: 1.2 }}
            href={linkThree}
          >
            <FaLink className={` text-xl lg:text-3xl m-1 ${textColour}`} />
          </motion.a>
        </div>
      </div>
      <div className="h-3" />
    </div>
  );
};

export default ProjectCard;

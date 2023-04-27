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
    <div className={`h-80 w-44 flex flex-col items-center0 ${colour}`}>
      <div className="w-full aspect-square p-4 flex items-center justify-center">
        {logoIcon}
      </div>
      <div className={` w-full h-32 flex flex-col items-center bg-white`}>
        <p className={`item-center font-teko text-4xl mb-0 mt-2 ${textColour}`}>
          {name}
        </p>

        <div className={`w-36 h-0.5 mb-2 ${colour}`}></div>

        <div className={`justify-center w-full h-12 flex flex-wrap flex-row`}>
          <motion.a
            whileHover={{ scale: 1.2 }}
            transition={{ type: "spring", stiffness: 500 }}
            href={linkOne}
          >
            <BsDiscord className={`text-4xl m-1 ${textColour}`} />
          </motion.a>

          <motion.a
            transition={{ type: "spring", stiffness: 500 }}
            whileHover={{ scale: 1.2 }}
            href={linkTwo}
          >
            <FaEnvelope className={`text-4xl m-1 ${textColour}`} />
          </motion.a>

          <motion.a
            transition={{ type: "spring", stiffness: 500 }}
            whileHover={{ scale: 1.2 }}
            href={linkThree}
          >
            <FaLink className={`text-4xl m-1 ${textColour}`} />
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

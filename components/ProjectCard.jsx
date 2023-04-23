import React from "react";
import { motion } from "framer-motion";
import {FaEnvelope, FaLink } from "react-icons/fa";
import { BsDiscord } from "react-icons/bs";

const ProjectCard = ({
  name,
  colour,
  logoIcon,
  linkOne,
  linkTwo,
  linkThree,
}) => {
  return (
    <div
      className={` h-80 w-44 flex flex-col items-center ml-10 bg-${colour}`}
    >
      <p className={`font-teko text-9xl mb-18 mt-4`}>
        {logoIcon}
      </p>
      <div className={` w-full h-32 flex flex-col items-center bg-${`white`}`}>
        <p
          className={`item-center font-teko text-4xl mb-0 mt-2 text-${colour}`}
        >
          {name}
        </p>

        <div className={`w-36 h-0.5 mb-2 bg-${colour}`}></div>

        <div className={`justify-center w-full h-12 flex flex-wrap flex-row`}>
          <motion.a
            transition={{ type: "spring", stiffness: 500 }}
            href={linkOne}
          >
            <button
              className={`pb-1 pt-1 w-19 font-teko text-4xl ml-1 mr-2 text-${colour}`}
            >
              <BsDiscord />
            </button>
          </motion.a>

          <motion.a
            transition={{ type: "spring", stiffness: 500 }}
            href={linkTwo}
          >
            <button
              className={`pb-1 pt-1 w-19 font-teko text-4xl ml-1 mr-2 text-${colour}`}
            >
              <FaEnvelope />
            </button>
          </motion.a>

          <motion.a
            transition={{ type: "spring", stiffness: 500 }}
            href={linkThree}
          >
            <button
              className={`pb-1 pt-1 w-19 font-teko text-4xl ml-1 mr-2 text-${colour}`}
            >
              <FaLink />
            </button>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

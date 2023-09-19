import React from "react";
import { motion } from "framer-motion";
import { icons } from "../data/icons";

const ProjectCard = ({
  name,
  textColor,
  bgColor,
  borderColor,
  logoIcon,
  links,
  detail,
  index,
}) => {
  return (
    <motion.div
      initial={{ y: -30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, type: "teew", delay: 0.3 * index }}
      className="w-11/12 flex flex-col items-center bg-white my-1"
    >
      <div
        className={`w-full aspect-square p-4 flex items-center justify-center ${bgColor}`}
      >
        {logoIcon}
      </div>
      <p
        className={`w-10/12 text-center whitespace-nowrap font-teko text-xl lg:text-3xl pt-2 pb-1 m-0 border-b-[2px] ${textColor} ${borderColor}`}
      >
        {name}
      </p>
      <div className="justify-evenly w-full flex m-1">
        {Object.entries(links).map(([key, link], index) => (
          <motion.a
            key={index}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 400 }}
            href={link}
            className={`text-base lg:text-3xl m-1 hover:opacity-80 ${textColor}`}
          >
            {icons[key]}
          </motion.a>
        ))}
      </div>
      <motion.a
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 500 }}
        className={`px-4 border-2 font-teko no-underline m-3 text-3xl hover:opacity-80 ${textColor} ${borderColor}`}
        href={`/projects/${detail}`}
      >
        Details
      </motion.a>
      <div className={`h-3 w-full ${bgColor}`} />
    </motion.div>
  );
};

export default ProjectCard;

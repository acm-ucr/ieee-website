import React from "react";
import { motion } from "framer-motion";
import { colors } from "./data/colors";
import { icons } from "./data/icons";

const ProjectCard = ({ name, color, logoIcon, links }) => {
  return (
    <div className="w-11/12 flex flex-col items-center bg-white my-1">
      <div
        className={`w-full aspect-square p-4 flex items-center justify-center ${colors[color].bg}`}
      >
        {logoIcon}
      </div>
      <p
        className={`w-10/12 text-center whitespace-nowrap font-teko text-xl lg:text-3xl pt-2 pb-1 m-0 border-b-[2px] ${colors[color].text} ${colors[color].border}`}
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
            className={`text-base lg:text-3xl m-1 hover:opacity-80 ${colors[color].text}`}
          >
            {icons[key]}
          </motion.a>
        ))}
      </div>
      <div className={`h-3 w-full ${colors[color].bg}`} />
    </div>
  );
};

export default ProjectCard;

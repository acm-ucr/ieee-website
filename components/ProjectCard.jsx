import React from "react";
import { motion } from "framer-motion";
import { FaReact } from "react-icons/fa";

const ProjectCard = ({
  name,
  logoIcon,
  linkOne,
  linkOneIcon,
  linkTwo,
  linkTwoIcon,
  linkThree,
  linkThreeIcon,
}) => {
  return (
    <div
      className={` h-80 w-44 flex flex-col items-center ml-10 bg-ieee-bluePurple`}
    >
      <p className={`font-teko text-9xl mb-18 mt-4`}>
        {/* logoIcon */}
        <FaReact />
      </p>
      <div className={` w-full h-32 flex flex-col items-center bg-${`white`}`}>
        <p
          className={`item-center font-teko text-4xl mb-0 mt-2 text-ieee-bluePurple`}
        >
          {name}
        </p>

        <div className={`w-36 h-0.5 mb-2 bg-ieee-bluePurple`}></div>

        <div className={`justify-center w-full h-12 flex flex-wrap flex-row`}>
          <motion.a
            transition={{ type: "spring", stiffness: 500 }}
            href={linkOne}
          >
            <button
              className={`pb-1 pt-1 w-19 font-teko text-5xl mr-2 text-ieee-bluePurple`}
            >
              {/* linkOneIcon */}
              <FaReact />
            </button>
          </motion.a>

          <motion.a
            transition={{ type: "spring", stiffness: 500 }}
            href={linkTwo}
          >
            <button
              className={`pb-1 pt-1 w-19 font-teko text-5xl mr-2 text-ieee-bluePurple`}
            >
              {/* linkTwoIcon */}
              <FaReact />
            </button>
          </motion.a>

          <motion.a
            transition={{ type: "spring", stiffness: 500 }}
            href={linkThree}
          >
            <button
              className={`pb-1 pt-1 w-19 font-teko text-5xl mr-2 text-ieee-bluePurple`}
            >
              {/* linkThreeIcon */}
              <FaReact />
            </button>
          </motion.a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

import React from "react";
import ieeelogo from "../public/assets/ieee-logo.svg";
import { BsDiscord } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { motion } from "framer-motion";
import footer from "../public/assets/footer.svg";

const Footer = () => {
  return (
    <footer className="w-full relative">
      <img src={footer.src} className="w-full " alt="background" />
      <div className="w-full absolute bottom-0 left-0 flex flex-row justify-between items-end">
        <img
          src={ieeelogo.src}
          className="w-1/6 h-full mb-3 ml-3"
          alt="IEEE Logo"
        />

        <div className="flex flex-row md:mb-3 md:mr-6">
          <div className="flex flex-col justify-end border-r-4 border-white font-teko text-end pr-3 mr-3">
            <div className="text-sm md:text-3xl">Contact us</div>
            <div className="text-sm md:text-3xl">900 University Ave,</div>
            <div className="text-sm md:text-3xl">Riverside, CA 92521</div>
          </div>
          <div className="pt-1 space-y-2 flex flex-col justify-evenly mr-3">
            <motion.a
              className="no-underline text-white"
              transition={{ type: "spring", stiffness: 500 }}
              whileHover={{ scale: 1.2 }}
              target="_blank"
              href="https://discord.gg/Ugjp6Us"
            >
              <BsDiscord className=" text-2xl md:text-5xl" />
            </motion.a>
            <motion.a
              className="no-underline text-white"
              transition={{ type: "spring", stiffness: 500 }}
              whileHover={{ scale: 1.2 }}
              target="_blank"
              href="https://ieeeucr.github.io/subscribe.html"
            >
              <GrMail className=" text-2xl md:text-5xl" />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

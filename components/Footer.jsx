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
      <div className="w-full absolute bottom-0">
        <div className="flex p-7 space-x-4">
          <div className="relative flex-grow ml-4">
            <img
              src={ieeelogo.src}
              className="absolute h-12 inset-x-0 bottom-2"
              alt="IEEE Logo"
            />
          </div>

          <div className="border-r-4 pr-6  font-teko text-2xl ">
            <div className="mb-1">Contact us</div>
            <div className="mb-1">900 University Ave,</div>
            <div>Riverside, CA 92521</div>
          </div>

          <div className="h-24 pt-1 space-y-2 flex flex-col justify-between">
            <motion.a
              target="_blank"
              href="https://discord.gg/Ugjp6Us"
              className="text-white hover:opacity-70"
            >
              <BsDiscord size={37} />
            </motion.a>
            <motion.a
              target="_blank"
              className="text-white hover:opacity-70"
              href="https://ieeeucr.github.io/subscribe.html"
            >
              <GrMail size={37} />
            </motion.a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

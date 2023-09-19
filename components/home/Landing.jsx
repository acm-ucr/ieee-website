import React from "react";
import gearStroke from "../../public/assets/gear-stroke-pink-blue.svg";
import gearLightBlue from "../../public/assets/gear-lightblue.svg";
import gearBlue from "../../public/assets/gear-blue.svg";
import Gear from "@/components/Gear";
import gearStrokePurple from "../../public/assets/gear-stroke-purple.svg";
import ieeeLogo from "../../public/assets/ieee-only-logo.svg";
import wave from "../../public/assets/wave.svg";
import { motion } from "framer-motion";

const Landing = () => {
  return (
    <div className="font-teko relative w-full overflow-hidden flex justify-center flex-col items-center">
      <Gear
        className="absolute left-[8%] top-[5%] w-[22%] md:w-[12%]"
        src={gearStroke.src}
        speed={3}
      />
      <Gear
        className="absolute left-[3%] top-[15%] w-[12%] md:w-[7%]"
        src={gearLightBlue.src}
        isClockwise={1}
        speed={5}
      />
      <Gear
        className="absolute left-[10%] top-[21%] w-[8%] md:w-[5%]"
        src={gearBlue.src}
        isClockwise={0}
        speed={4}
      />
      <Gear
        className="absolute top-[10%] right-[5%] w-[18%] md:w-[10%]"
        src={gearBlue.src}
        isClockwise={0}
        speed={5}
      />
      <Gear
        className="absolute w-[10%] md:w-[5%] top-[20%] right-[1%]"
        src={gearLightBlue.src}
        isClockwise={0}
        speed={5}
      />
      <Gear
        className="absolute right-[4%] top-[28%] w-[12%] md:w-[7%]"
        src={gearStrokePurple.src}
        isClockwise={1}
        speed={5}
      />
      <motion.img
        src={ieeeLogo.src}
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "teew" }}
        className="w-16 md:w-24 mt-32 md:mt-40 mb-2"
      />
      <motion.p
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "teew", delay: 0.3 }}
        className="text-3xl md:text-5xl mb-1 md:mb-2"
      >
        IEEE @ UCR
      </motion.p>
      <motion.p
        initial={{ y: -30, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, type: "teew", delay: 0.6 }}
        className="text-center text-2xl md:text-4xl mb-16 md:mb-40"
      >
        Institute of Electrical and Electronics Engineers
      </motion.p>
      <img className="z-50 w-full justify-self-end" src={wave.src} />
    </div>
  );
};

export default Landing;

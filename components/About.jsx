import React from "react";
import Title from "./Title";
import coil from "../public/assets/coil.svg";
import wave from "../public/assets/wave.svg";
import index2 from "../public/pictures/index2.webp";
import { motion } from "framer-motion";
import Link from "next/link";

const About = () => {
  return (
    <div className="relative w-full flex flex-col items-center">
      <img
        className="z-0 rotate-90 absolute right-[-1rem] top-[1rem] w-1/3"
        src={coil.src}
      />
      <img
        className="z-0 rotate-180 absolute -translate-x-[1/4] left-0 bottom-[40%] w-1/3"
        src={coil.src}
      />
      <Title title="About IEEE" />
      <p className="relative text-center lg:text-xl text-base w-9/12 mt-3 mb-5 font-giden">
        IEEE &#40;pronounced &quot;I triple E&quot;&#41; is the Institute of
        Electrical and Electronics Engineers. We are a group dedicated to
        professionalism&#44; connections&#44; and our projects&#46;
      </p>
      <motion.div
        transition={{ type: "spring", stiffness: 300 }}
        whileHover={{ scale: 1.05 }}
        className="relative mb-10"
      >
        <Link
          className="rounded bg-ieee-purple text-xl lg:text-3xl font-teko shadow-[10px_-8px_0px_0px] shadow-ieee-blue py-2 px-4 no-underline text-white"
          href="/events"
        >
          Checkout Events
        </Link>
      </motion.div>
      <img
        src={index2.src}
        className="relative w-9/12 md:w-1/2 rounded-full h-[150px] md:h-[300px] object-cover"
      />

      <img src={wave.src} className="relative rotate-180 w-full" />
    </div>
  );
};

export default About;

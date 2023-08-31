import React from "react";
import Title from "./Title";
import Gear from "./Gear";
import coil from "../public/assets/coil.svg";
import gearStrokePink from "../public/assets/gear-stroke-pink.svg";
import gearpurple from "../public/assets/gear-purple.svg";
import gearLightblue from "../public/assets/gear-lightblue.svg";
import circles1 from "../public/assets/circles1.svg";
import circles2 from "../public/assets/circles2.svg";
import circles3 from "../public/assets/circles3.svg";
import wave from "../public/assets/wave.svg";
import index1 from "../public/pictures/index1.webp";
import index2 from "../public/pictures/index2.webp";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="relative w-full overflow-hidden flex flex-col">
      <img
        className="z-0 rotate-90 absolute right-[-1rem] top-[1rem] w-1/3"
        src={coil.src}
      />

      <img
        className="z-0 rotate-180 absolute -translate-x-[1/4] left-0 bottom-[40%] w-1/3"
        src={coil.src}
      />

      <img
        className="z-0 rotate-90 absolute right-0 translate-x-1/2 top-[20rem] w-1/5"
        src={circles3.src}
      />

      <img
        className="z-10 rotate-90 absolute left-0 -translate-x-[50%] bottom-[30%] w-1/3 "
        src={circles2.src}
      />

      <div className="z-10 relative flex flex-col items-center lg:mx-20 md:mx-20 mx-1">
        <Title title="About IEEE" />
        <p className="text-center lg:text-xl text-base w-9/12 my-5 mx-60 font-giden">
          IEEE &#40;pronounced &quot;I triple E&quot;&#41; is the Institute of
          Electrical and Electronics Engineers. We are a group dedicated to
          professionalism&#44; connections&#44; and our projects&#46;
        </p>
      </div>
      <div className="relative w-1/2">
        <img
          src={index2.src}
          className="z-10 relative rounded-tr-full rounded-br-full"
        />
        <img
          className="z-0 rotate-90 absolute right-0 bottom-0 w-1/2 translate-y-1/3 translate-x-1/3"
          src={circles1.src}
        />
        <div className="z-0 rotate-90 absolute -right-1/4 top-[20%] w-1/5">
          <Gear src={gearStrokePink.src} isClockwise={true} speed={7} />
        </div>

        <div className="z-0 rotate-90 absolute -right-[40%] top-[35%] w-[10%]">
          <Gear src={gearLightblue.src} isClockwise={true} speed={7} />
        </div>
      </div>

      <div className="flex flex-col items-center m-20">
        <motion.a
          className="z-10 bg-ieee-pink text-2xl lg:text-3xl font-teko shadow-[10px_-8px_0px_0px] shadow-ieee-blue py-2 px-4 no-underline text-white"
          transition={{ type: "spring", stiffness: 500 }}
          whileHover={{ scale: 1.2 }}
          href="/events"
        >
          Checkout Events
        </motion.a>
      </div>

      <div className="z-10 relative self-end w-7/12">
        <img
          src={index1.src}
          className="rounded-tl-full rounded-bl-full w-full relative z-10"
        />
        <img
          className="z-0 absolute left-0 bottom-0 translate-y-1/3 w-1/4"
          src={circles3.src}
        />
        <div className="z-0 rotate-180 absolute -left-[20%] bottom-[50%] w-[15%]">
          <Gear src={gearLightblue.src} isClockwise={true} speed={5} />
        </div>

        <div className="z-0 rotate-180 absolute -left-[10%] bottom-[30%] w-[10%]">
          <Gear src={gearpurple.src} isClockwise={true} speed={5} />
        </div>
      </div>

      <img src={wave.src} className="rotate-180 w-full" />
    </div>
  );
};

export default About;

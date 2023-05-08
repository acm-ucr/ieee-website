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

const About = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        className="z-0 rotate-90 absolute right-[-1rem] top-[1rem] w-[50%]"
        src={coil.src}
      />

      <div className="z-0 rotate-90 absolute right-[30%] top-[20%] w-[25%]">
        <Gear src={gearStrokePink.src} isClockwise={true} speed={7} />
      </div>

      <div className="z-0 rotate-90 absolute right-[10rem] top-[30rem] w-[10%]">
        <Gear src={gearLightblue.src} isClockwise={true} speed={7} />
      </div>

      <img
        className="z-0 rotate-180 absolute -translate-x-[1/4] left-0 bottom-[40%] w-1/2"
        src={coil.src}
      />

      <img
        className="z-0 rotate-90 absolute left-1/2 -translate-x-[50%] top-[30%] w-1/3"
        src={circles1.src}
      />

      <img
        className="z-0 rotate-90 absolute right-0 translate-x-1/2 top-[20rem] w-1/4"
        src={circles3.src}
      />

      <img
        className="z-10 rotate-90 absolute left-0 -translate-x-[50%] bottom-[30%] w-1/2 lg:w-1/3 "
        src={circles2.src}
      />

      <div className="z-0 rotate-180 absolute left-[10%] bottom-[30%] w-[20%] lg:w-[10%] ">
        <Gear src={gearLightblue.src} isClockwise={true} speed={5} />
      </div>

      <div className="z-0 rotate-180 absolute left-[20%] bottom-[25%] w-[10%] lg:w-[5%]">
        <Gear src={gearpurple.src} isClockwise={true} speed={5} />
      </div>

      <img
        className="z-0 rotate-180 absolute left-1/3 bottom-[20%] w-1/4"
        src={circles3.src}
      />

      <div className="z-10 relative flex flex-col items-center my-20 lg:mx-20 md:mx-20 mx-1">
        <Title title="About IEEE" />
        <p className="text-center lg:text-xl text-base w-9/12 my-3 mx-60 font-giden">
          IEEE &#40;pronounced &quot;I triple E&quot;&#41; is the Institute of
          Electrical and Electronics Engineers. We are a group dedicated to
          professionalism&#44; connections&#44; and our projects&#46;
        </p>
      </div>
      <img
        src={index2.src}
        className="z-10 relative rounded-tr-full rounded-br-full w-7/12"
      />

      <div className="flex flex-col items-center m-20">
        <button className="z-10 bg-ieee-pink text-2xl lg:text-3xl font-teko shadow-[10px_-8px_0px_0px] shadow-ieee-blue py-2 px-4">
          Checkout Events
        </button>
      </div>

      <div className="z-10 relative flex flex-row-reverse">
        <img
          src={index1.src}
          className="rounded-tl-full rounded-bl-full w-7/12"
        />
      </div>

      <img src={wave.src} className="rotate-180"></img>
    </div>
  );
};

export default About;

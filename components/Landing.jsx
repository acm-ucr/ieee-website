import React from "react";
import undulate from "../public/assets/undulate.svg";
import gearStroke from "../public/assets/gear-stroke-pink-blue.svg";
import gearLightBlue from "../public/assets/gear-lightblue.svg";
import gearBlue from "../public/assets/gear-blue.svg";
import Gear from "@/components/Gear";
import gearStrokePurple from "../public/assets/gear-stroke-purple.svg";
import ieeeLogo from "../public/assets/ieee-only-logo.svg";
import wave from "../public/assets/wave.svg";

const Landing = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="flex flex-row justify-between overflow-clip w-full">
        <img
          className=" z-10 rotate-12 absolute w-1/2 right-0 translate-x-1/2 top-0 -translate-y-1/2"
          src={undulate.src}
          alt="Responsive image"
        />
        <img
          className="-z-10 -rotate-90 absolute w-1/2 top-[50%] md:top-[17%] left-0 -translate-x-1/2"
          src={undulate.src}
        />
        <div className="z-10 rotate-270 absolute w-[26%] left-[12%] top-[9%] md:left-[5%] md:top-[3%] md:w-[11%]">
          <Gear src={gearStroke.src} isClockwise={0} speed={7}></Gear>
        </div>
        <div className=" z-10 rotate-5 absolute left-0 -top-[-21%] w-[17%] md:left-[1/2] md:top-[13%] md:w-[8%]">
          <Gear src={gearLightBlue.src} isClockwise={1} speed={5}></Gear>
        </div>
        <div className=" z-10 rotate-30 absolute left-[13%] w-[14%] top-[29%] md:top-[21%] md:w-[5%] md:left-[6%]">
          <Gear src={gearBlue.src} isClockwise={0} speed={4}></Gear>
        </div>

        <div className=" z-10 rotate-6 absolute right-[9%] top-[30%] w-[17%] md:w-[8%] md:top-[26%] md:right-[3%]">
          <Gear src={gearStrokePurple.src} isClockwise={1} speed={5}></Gear>
        </div>
        <div className=" z-10 rotate-4 absolute top-[10%] right-[5%] w-[26%] md:top-[9%] md:w-[11%] md:right-[0]">
          <Gear src={gearBlue.src} isClockwise={0} speed={5}></Gear>
        </div>
        <div className=" z-10 rotate-4 absolute w-[14%] top-[24%] right-0 md:top-[23%] md:w-[5%]">
          <Gear src={gearLightBlue.src} isClockwise={0} speed={5}></Gear>
        </div>
      </div>
      <div className="my-32 flex justify-center flex-col items-center">
        <img src={ieeeLogo.src} className="w-24"></img>
        <h1 className="font-teko text-center sm:font-size-20px">IEEE @ UCR</h1>
        <h1 className="font-teko text-center">
          Institute of Electrical and Electronics Engineers
        </h1>
      </div>
      <img className="z-50 w-full" src={wave.src}></img>
    </div>
  );
};

export default Landing;

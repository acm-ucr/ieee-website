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
          className="-z-10 -rotate-90 absolute w-1/2 top-[200px] left-0 -translate-x-1/2"
          src={undulate.src}
        />
        <div className="z-10 rotate-270 w-[100px] left-[55px] top-[4rem] md:w-[130px] lg:left-[66.5px] lg:top-[17.88px] absolute lg:w-[200px] lg:h-[200px]">
          <Gear src={gearStroke.src} isClockwise={0} speed={7}></Gear>
        </div>
        <div className=" z-10 rotate-5 absolute left-0 lg:left-[-2rem] -top-[-8rem] w-[80px] md:w-[80px] lg:w-[136.5px] h-[136.5px]">
          <Gear src={gearLightBlue.src} isClockwise={1} speed={3}></Gear>
        </div>
        <div className=" z-10 rotate-30 absolute left-[60px] lg:-top-[-14rem] lg:w-[77.29px] lg:left-[90px] lg:h-[77.29px] w-[60px] -top-[-11rem]">
          <Gear src={gearBlue.src} isClockwise={0} speed={3}></Gear>
        </div>

        <div className=" z-10 rotate-6 absolute right-[4rem] top-[170px] w-[80px] md:w-[90px] md:top-[190px] lg:top-[300px] lg:w-[140.68px] lg:h-[140.68px]">
          <Gear src={gearStrokePurple.src} isClockwise={1} speed={5}></Gear>
        </div>
        <div className=" z-10 rotate-4 absolute top-[90px] right-[0rem] w-[100px] md:top-[100px] md:w-[130px] lg:w-[190px] ">
          <Gear src={gearBlue.src} isClockwise={0} speed={5}></Gear>
        </div>
        <div className="  z-10 rotate-4 absolute w-[60px] top-[11rem] right-0 md:top-[240px] md:w-[77.29px] md:h-[77.29px]">
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
      <img className="z-50 bottom-0 w-full" src={wave.src}></img>
    </div>
  );
};

export default Landing;

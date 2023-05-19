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
      <div className="flex flex-row justify-between overflow-clip">
        <div
          className="z-10 rotate-270 w-[100px] left-[55px] top-[4rem] lg:left-[66.5px] lg:top-[17.88px] absolute lg:w-[200px] lg:h-[200px]"
          alt="Responsive image"
        >
          <Gear src={gearStroke.src} isClockwise={0} speed={7}></Gear>
        </div>
        <img
          className="z-10 rotate-12 absolute w-[300px] left-[17rem] top-[-7rem] md:-right-[23rem] md:-top-[25rem] md:w-[800px] md:h-[800px] md:left-[70rem]"
          src={undulate.src}
          alt="Responsive image"
        />
        <img
          className="-z-10 -rotate-90 absolute w-[300px] top-[250px] left-[-10rem] md:-left-[35rem] md:-top-[0rem] md:w-[1100px] md:h-[1000px]"
          src={undulate.src}
        />
        <div className=" z-10 rotate-5 absolute left-0 lg:left-[-2rem] -top-[-8rem] w-[80px] md:w-[80px] lg:w-[136.5px] h-[136.5px]">
          <Gear src={gearLightBlue.src} isClockwise={1} speed={3}></Gear>
        </div>
        <div className=" z-10 rotate-30 absolute left-[60px] lg:-top-[-14rem] lg:w-[77.29px] lg:left-[90px] lg:h-[77.29px] w-[60px] -top-[-11rem]">
          <Gear src={gearBlue.src} isClockwise={0} speed={3}></Gear>
        </div>
        <div className="z-10 rotate-6 absolute left-[21rem] top-[170px] w-[80px] md:w-[140.68px] md:h-[140.68px] lg:left-[1325px] lg:top-[300px] lg:w-[140.68px] lg:h-[140.68px]">
          <Gear src={gearStrokePurple.src} isClockwise={1} speed={5}></Gear>
        </div>
        <div className="z-10 rotate-4 absolute top-[90px] left-[18rem] w-[100px] md:left-[1390px] md:top-[160px] md:w-[191.48px] md:h-[191.49px] background:linear-gradient(180deg, #0075FF 0%, #5EB7FF 100%)">
          <Gear src={gearBlue.src} isClockwise={0} speed={5}></Gear>
        </div>
        <div className="z-10 rotate-4 absolute w-[60px] top-[11rem] left-[18rem] md:left-[1300px] md:top-[240px] md:w-[77.29px] md:h-[77.29px]">
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
      <img
        className="z-50 top-[270px] lg:top-[300px] lg:w-[3000px] lg:h-[500px]  mt-20"
        src={wave.src}
      ></img>
    </div>
  );
};

export default Landing;

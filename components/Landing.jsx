import React from "react";
import undulate from "../public/assets/undulate.svg";
import gearBlue from "../public/assets/gear-blue.svg";
import gearStrokepurple from "../public/assets/gear-stroke-purple.svg";
import gearlightblue from "../public/assets/gear-lightblue.svg";
import gearpinkBlue from "../public/assets/gear-stroke-pink-blue.svg";
import wave from "../public/assets/wave.svg";
import logo from "../public/assets/ieee-only-logo.svg";
import Gear from "./Gear";
const Landing = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        className="z-0 rotate-12 absolute -right-1/3 -top-[25rem] w-1/3"
        src={undulate.src}
      />
      <img
        className="z-0 -rotate-90 absolute -left-1/3 -top-[0rem] w-1/3 "
        src={undulate.src}
      />
      <div className="z-0 left-[10%] top-[8%] md:top-[2%] absolute w-[25%] md:w-[17%]">
        <Gear src={gearpinkBlue.src} isClockwise={true} speed={8} />
      </div>
      <div className=" z-0 rotate-12 absolute left-[-2rem] -top-[-9rem] w-[136.5px] h-[136.5px]">
        <Gear src={gearlightblue.src} isClockwise={false} speed={5} />
      </div>
      <div className=" z-0 rotate-30 absolute left-[80px] -top-[-15rem] w-[77.29px] h-[77.29px]">
        <Gear src={gearBlue.src} isClockwise={false} speed={6} />
      </div>
      <div className="z-0 rotate-6 absolute left-[1350px] top-[290px] w-[140.68px] h-[140.68px]">
        <Gear src={gearStrokepurple.src} isClockwise={false} speed={6} />
      </div>
      <div className="z-0 rotate-4 absolute left-[1390px] top-[160px] w-[191.48px] h-[191.49px] background:linear-gradient(180deg, #0075FF 0%, #5EB7FF 100%)">
        <Gear src={gearBlue.src} isClockwise={false} speed={6} />
      </div>
      <div className="z-0 rotate-4 absolute left-[1300px] top-[230px] w-[77.29px] h-[77.29px]">
        <Gear src={gearlightblue.src} isClockwise={false} speed={6} />
      </div>
      <div className="my-32 flex justify-center flex-col items-center z-10">
        <img src={logo.src} className="w-24"></img>
        <p className="font-teko text-center text-3xl md:text-5xl z-10">
          IEEE @ UCR
        </p>
        <p className="font-teko text-center text-3xl md:text-5xl z-10">
          Institute of Electrical and Electronics Engineers
        </p>
      </div>
      <img
        src={wave.src}
        className="z-50 relative w-full overflow-hidden mt-20 "
      ></img>
    </div>
  );
};

export default Landing;

import React from "react";
import undulate from "../public/assets/undulate.svg";
import gearStroke from "../public/assets/gear-stroke-pink-blue.svg";
import gearLightBlue from "../public/assets/gear-lightblue.svg";
import gearBlue from "../public/assets/gear-blue.svg";
import gearStrokePurple from "../public/assets/gear-stroke-purple.svg";
import ieeeLogo from "../public/assets/ieee-only-logo.svg";
import wave from "../public/assets/wave.svg";

const Landing = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <img
        className="z-10 rotate-12 absolute -right-[23rem] -top-[25rem] w-[800px] h-[800px]"
        src={undulate.src}
      />
      <img
        className="z-10 -rotate-90 absolute -left-[35rem] -top-[0rem] w-[1100px] h-[1000px] "
        src={undulate.src}
      />
      <img
        className="z-10 rotate-270 left-[66.5px] top-[17.88px] absolute w-[200px] h-[200px]"
        src={gearStroke.src}
      />
      <img
        className=" z-10 rotate-12 absolute left-[-2rem] -top-[-9rem] w-[136.5px] h-[136.5px]"
        src={gearLightBlue.src}
      />
      <img
        className=" z-10 rotate-30 absolute left-[80px] -top-[-15rem] w-[77.29px] h-[77.29px]"
        src={gearBlue.src}
      />
      <img
        className="z-10 rotate-6 absolute left-[1350px] top-[290px] w-[140.68px] h-[140.68px]"
        src={gearStrokePurple.src}
      />
      <img
        className="z-10 rotate-4 absolute left-[1390px] top-[160px] w-[191.48px] h-[191.49px] background:linear-gradient(180deg, #0075FF 0%, #5EB7FF 100%)"
        src={gearBlue.src}
      />
      <img
        className="z-10 rotate-4 absolute left-[1300px] top-[230px] w-[77.29px] h-[77.29px]"
        src={gearLightBlue.src}
      />
      <div className="my-32 flex justify-center flex-col items-center">
        <img src={ieeeLogo.src} className="w-24"></img>
        <h1 className="font-teko text-center">IEEE @ UCR</h1>
        <h1 className="font-teko text-center">
          Institute of Electrical and Electronics Engineers
        </h1>
      </div>
      <img
        src={wave.src}
        className="z-50 relative w-full overflow-hidden mt-20 "
      ></img>
    </div>
  );
};

export default Landing;

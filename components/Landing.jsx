import React from "react";
import undulate from "../public/assets/undulate.svg";
const Landing = () => {
  return (
    <div>
      <img
        className="z-0 -rotate-45 absolute -left-80 -top-20 w-[600px] h-[600px] "
        src={undulate.src}
      />
      <img
        className="z-0 rotate-12 absolute -right-20 top-24 w-[700px] h-[800px]"
        src={undulate.src}
      />
      <img
        className=" rotate-6 z-0 left-72 absolute bottom-56 w-[160px]"
        src="/assets/gear-stroke-pink-blue.svg"
      />
      <img
        className=" z-0 left-52 absolute bottom-48 w-[110px]"
        src="/assets/gear-lightblue.svg"
      />
      <div className="flex justify-center h-24 mt-20">
        <img src="/assets/ieee-only-logo.svg"></img>
      </div>
      <div>
        <h1 className="font-teko text-center mt-3">IEEE @ UCR</h1>
        <h1 className="font-teko text-center">
          Institute of Electrical and Electronics Engineers
        </h1>
      </div>
      <img src="/assets/wave.svg" className="w-100 mt-20 "></img>
    </div>
  );
};

export default Landing;

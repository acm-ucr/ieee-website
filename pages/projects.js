import React from "react";
import Project from "@/components/Project";
import Title from "@/components/Title";
import triangle1 from "../public/assets/triangle.svg";
import triangle2 from "../public/assets/triangle.svg";
import triangle3 from "../public/assets/triangle.svg";
import triangle4 from "../public/assets/triangle.svg";
import triangle5 from "../public/assets/triangle.svg";
import lightbluegear1 from "../public/assets/gear-lightblue.svg";
import lightbluegear2 from "../public/assets/gear-lightblue.svg";
import pinkbluegear1 from "../public/assets/gear-stroke-pink-blue.svg";
import pinkbluegear2 from "../public/assets/gear-stroke-pink-blue.svg";
import Gear from "@/components/Gear";

export default function projects() {
  return (
    <div className="relative overflow-hidden ">
      <img
        className="absolute z-0 scale-75 -left-1/3 -translate-y-1/3 rotate-45"
        src={triangle1.src}
      />
      <img
        className="absolute z-0 scale-75  right-0 translate-x-1/2 -translate-y-1/3 rotate-12"
        src={triangle2.src}
      />
      <img
        className="absolute z-0 w-2/3 left-0 -translate-x-[20%] top-[30%] -rotate-12"
        src={triangle3.src}
      />
      <img
        className="absolute z-0 scale-75 top-1/2 right-0 translate-x-[50%] rotate-45"
        src={triangle4.src}
      />
      <img
        className="absolute z-0 scale-75 top-1/2 -left-1/2 translate-x-24 translate-y-10 rotate-90"
        src={triangle5.src}
      />
      <div className="absolute z-0 scale-50 right-1/4 top-1/4 translate-x-32 -translate-y-32 rotate-12">
        <Gear src={lightbluegear1.src} isClockwise={true} speed={5} />
      </div>
      <div className="absolute w-1/3 z-0 bottom-1/4">
        <Gear src={lightbluegear2.src} isClockwise={false} speed={5} />
      </div>
      <div className="absolute z-0 right-0 top-1/4 translate-x-[50%]  w-1/2">
        <Gear src={pinkbluegear1.src} isClockwise={false} speed={5} />
      </div>
      <div className="absolute z-0 bottom-[30%] left-0 w-1/5">
        <Gear src={pinkbluegear2.src} isClockwise={false} speed={5} />
      </div>
      <div className="w-full h-4" />
      <Title title="Projects" />
      <div className="w-full z-10">
        <Project />
      </div>
    </div>
  );
}

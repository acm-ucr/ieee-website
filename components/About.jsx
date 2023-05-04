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
        className="z-0 rotate-90 absolute right-[-1rem] top-[1rem] w-[800px] h-[800px]"
        src={coil.src}
      />

      <div className="z-0 rotate-90 absolute right-[17rem] top-[25rem] w-[200px] h-[200px]">
        <Gear src={gearStrokePink.src} isClockwise={true} speed={7} />
      </div>

      <div className="z-0 rotate-90 absolute right-[10rem] top-[30rem] w-[65px] h-[65px]">
        <Gear src={gearLightblue.src} isClockwise={true} speed={7} />
      </div>

      <img
        className="z-0 rotate-90 absolute right-[10rem] top-[40rem] w-[400px] h-[400px]"
        src={circles1.src}
      />

      <img
        className="z-0 rotate-90 absolute right-[-10rem] top-[20rem] w-[300px] h-[300px]"
        src={circles3.src}
      />

      <img
        className="z-10 rotate-90 absolute left-[-10rem] top-[70rem] w-[400px] h-[400px]"
        src={circles2.src}
      />

      <img
        className="z-0 rotate-180 absolute left-[-10rem] top-[40rem] w-[800px] h-[800px]"
        src={coil.src}
      />

      <div className="z-0 rotate-180 absolute left-[8rem] top-[97rem] w-[100px] h-[100px]">
        <Gear src={gearLightblue.src} isClockwise={true} speed={5} />
      </div>

      <div className="z-0 rotate-180 absolute left-[12rem] top-[95rem] w-[80px] h-[80px]">
        <Gear src={gearpurple.src} isClockwise={true} speed={5} />
      </div>

      <img
        className="z-0 rotate-180 absolute left-[15rem] top-[100rem] w-[200px] h-[200px]"
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

      <div className="flex flex-col items-center lg:m-40 md:m-40 m-20">
        <button className="z-10 bg-ieee-pink md:text-5xl text-3xl font-teko shadow-[10px_-8px_0px_0px] shadow-ieee-blue py-2 px-4">
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

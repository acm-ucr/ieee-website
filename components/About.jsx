import React from "react";
import Title from "./Title";
import Gear from "./Gear";

const About = () => {
  return (
    <div className="relative w-full overflow-hidden">
      {/* background */}
      <img
        className="z-0 rotate-90 absolute right-[-1rem] top-[1rem] w-[800px] h-[800px]"
        src="/assets/coil.svg "
      />

      <div className="z-0 rotate-90 absolute right-[17rem] top-[25rem] w-[100px] h-[100px]">
        <Gear src="/assets/gear-stroke-pink.svg" isClockwise={true} speed={1} />
      </div>

      <div className="z-0 rotate-90 absolute right-[10rem] top-[30rem] w-[65px] h-[65px]">
        <Gear src="/assets/gear-lightblue.svg" isClockwise={true} speed={1} />
      </div>

      <img
        className="z-0 rotate-90 absolute right-[10rem] top-[40rem] w-[400px] h-[400px]"
        src="/assets/circles1.svg"
      />

      <img
        className="z-0 rotate-90 absolute right-[-10rem] top-[20rem] w-[300px] h-[300px]"
        src="/assets/circles3.svg"
      />

      <img
        className="z-10 rotate-90 absolute left-[-10rem] top-[70rem] w-[400px] h-[400px]"
        src="/assets/circles2.svg"
      />

      <img
        className="z-0 rotate-180 absolute left-[-10rem] top-[40rem] w-[800px] h-[800px]"
        src="/assets/coil.svg "
      />

      <div className="z-0 rotate-180 absolute left-[8rem] top-[97rem] w-[70px] h-[70px]">
        <Gear src="/assets/gear-lightblue.svg" isClockwise={true} speed={1} />
      </div>

      <div className="z-0 rotate-180 absolute left-[12rem] top-[95rem] w-[40px] h-[40px]">
        <Gear src="/assets/gear-purple.svg" isClockwise={true} speed={1} />
      </div>

      <img
        className="z-0 rotate-180 absolute left-[15rem] top-[100rem] w-[200px] h-[200px]"
        src="/assets/circles3.svg "
      />

      {/* non-background */}
      <div className="z-10 relative flex flex-col items-center my-20 lg:mx-20 md:mx-20 mx-1">
        <Title title="About IEEE" />
        <p className="text-center lg:text-3xl md:text-3xl text-2xl w-9/12 my-3 mx-60 font-giden">
          IEEE &#40;pronounced &quot;I triple E&quot;&#41; is the Institute of
          Electrical and Electronics Engineers. We are a group dedicated to
          professionalism&#44; connections&#44; and our projects&#46;
        </p>
      </div>

      <img
        src="/pictures/index2.jfif"
        className="z-10 relative rounded-tr-full rounded-br-full w-9/12"
      />

      <div className="flex flex-col items-center lg:m-40 md:m-40 m-20">
        <button className="z-10 bg-ieee-pink lg:text-6xl md:text-6xl text-5xl font-teko shadow-[10px_-8px_0px_0px] shadow-ieee-blue p-1">
          Checkout Events
        </button>
      </div>

      <div className="z-10 relative flex flex-row-reverse">
        <img
          src="/pictures/index1.jfif"
          className="rounded-tl-full rounded-bl-full w-9/12"
        />
      </div>

      <img src="/assets/wave.svg" className="rotate-180"></img>
    </div>
  );
};

export default About;

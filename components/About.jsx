import React from "react";
import Title from "./Title";
const About = () => {
  return (
    <div>
      <div className="flex flex-col items-center">
        <Title title="About IEEE" />
        <p className="text-center text-xl w-9/12 m-3 font-giden">
          IEEE &#40;pronounced &quot;I triple E&quot;&#41; is the Institute of
          Electrical and Electronics Engineers. We are a group dedicated to
          professionalism&#44; connections&#44; and our projects&#46;
        </p>
      </div>

      <img
        src="/pictures/index2.jfif"
        className="flex-auto w-2/3 rounded-tr-full rounded-br-full"
      ></img>

      <div className="flex flex-col items-center m-40">
        <button className="bg-ieee-pink text-6xl font-teko shadow-[10px_-8px_0px_0px] shadow-ieee-blue p-1">
          Checkout Events
        </button>
      </div>

      <div className="flex flex-row-reverse">
        <img
          src="/pictures/index1.jfif"
          className=" w-2/3 rounded-tl-full rounded-bl-full"
        ></img>
      </div>

      <img src="/assets/wave.svg" className="rotate-180"></img>
    </div>
  );
};

export default About;

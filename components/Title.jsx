import React from "react";
import TitleSVG from "../public/assets/TitleSVG.svg";

const Title = ({ title }) => {
  return (
    <div className="mt-3 mb-3 h-8 flex justify-center items-baseline w-full">
      <img className=" h-3/4" src={TitleSVG.src} />
      <p className=" text-white text-4xl font-teko ml-2">{title}</p>
    </div>
  );
};

export default Title;

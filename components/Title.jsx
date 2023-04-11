import React from "react";

const Title = ({ title }) => {
  return (
    <div className=" h-10 flex justify-start items-baseline">
      <img className=" h-3/4" src="/assets/title.svg" />
      <p className=" text-white text-5xl font-teko ml-2">{title}</p>
    </div>
  );
};

export default Title;

import React from "react";

const Title = ({ title }) => {
  return (
    <div className="mt-3 mb-3 h-8 flex justify-start items-baseline">
      <img className=" h-3/4" src="/assets/title.svg" />
      <p className=" text-white text-4xl font-teko ml-2">{title}</p>
    </div>
  );
};

export default Title;

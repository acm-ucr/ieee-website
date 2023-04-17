import React from "react";

const Landing = () => {
  return (
    <div>
      <div className="flex justify-center h-24">
        <img src="/assets/ieee-only-logo.svg"></img>
      </div>
      <div>
        <h1 className="font-teko text-center">IEEE @ UCR</h1>
        <h1 className="font-teko text-center">
          Institute of Electrical and Electronics Engineers
        </h1>
      </div>
      <img src="/assets/wave.svg" className="w-100"></img>
    </div>
  );
};

export default Landing;

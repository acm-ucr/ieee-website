import React from "react";
import Title from "@/components/Title";
import JoinCards from "./JoinCards";
const Join = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Title title="Join IEEE@UCR" />

      <div className="text-center">
        <p className="text-xl leading-12 font-medium font-giden">
          To become a student member, follow us online and show up to any
          meetings, events, or projects that interest you.
        </p>
      </div>

      <div className="relative w-full">
        <img
          className=" relative z-30 mx-auto w-full"
          src="pictures/index4.png"
        />
        <JoinCards />
        <img
          className="absolute bottom-1/2 -right-1/2 w-full h-full z-10"
          src="/assets/undulate.svg"
        />

        <img
          className="absolute top-10 -left-1/2 w-full h-full z-10"
          src="/assets/undulate.svg"
        />
      </div>
    </div>
  );
};

export default Join;

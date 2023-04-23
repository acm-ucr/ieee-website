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
      <div className="w-full">
        <img
          className="z-0 absolute -right-1/3 bottom-3/5 w-[1197px] h-[1197px] "
          src="/assets/undulate.svg "
        />
        <img
          className="z-0 absolute -left-1/3 -top-1/8 w-[1197x] h-[1197px] "
          src="/assets/undulate.svg "
        />
        <img src="pictures/index4.png" className="mx-auto w-full" />
        <JoinCards />
      </div>
    </div>
  );
};

export default Join;

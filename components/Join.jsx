import React from "react";
import Title from "@/components/Title";
import JoinCards from "./JoinCards";
const Join = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Title title="Join IEEE@UCR" />

      <div className="text-center">
        <p className="text-2xl leading-12 font-medium font-giden">
          To become a student member, follow us online and show up to any
          meetings, events, or projects that interest you.
        </p>
      </div>

      <div className="w-full">
        <img src="pictures/index4.png" className="mx-auto w-full" />
        <JoinCards />
      </div>
    </div>
  );
};

export default Join;

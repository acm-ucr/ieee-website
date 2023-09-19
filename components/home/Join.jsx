import React from "react";
import Title from "@/components/Title";
import JoinCards from "./JoinCards";
import index4 from "../../public/pictures/ieee/index4.webp";

const Join = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden w-full relative pt-3">
      <Title title="Join IEEE@UCR" />
      <p className="text-center lg:text-xl text-base w-9/12 mt-3 mb-5 font-giden">
        To become a student member, follow us online and show up to any
        meetings, events, or projects that interest you.
      </p>
      <img
        className="w-full h-[150px] md:h-[300px] object-cover"
        src={index4.src}
      />
      <JoinCards />
    </div>
  );
};

export default Join;

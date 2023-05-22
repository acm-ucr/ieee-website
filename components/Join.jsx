import React from "react";
import Title from "@/components/Title";
import JoinCards from "./JoinCards";
// import Row from "react-bootstrap";
// import Col from "react-bootstrap";
import undulate from "../public/assets/undulate.svg";
import index4 from "../public/pictures/index4.webp";

const Join = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden w-full relative">
      <Title title="Join IEEE@UCR" />

      <div className="text-center">
        <p className="font-medium font-giden text-sm md:text-md lg:text-lg xl:text-xl">
          To become a student member, follow us online and show up to any
          meetings, events, or projects that interest you.
        </p>
      </div>
      <img className="w-full z-10" src={index4.src} />
      <JoinCards xs={3} sm={6} md={9} />
      <img
        className="z-0 rotate-12 absolute w-1/2 -left-64 bottom-0"
        src={undulate.src}
      />
      <img
        className="z-0 rotate-12 absolute w-1/2 -left-64 bottom-0"
        src={undulate.src}
      />
    </div>
  );
};

export default Join;

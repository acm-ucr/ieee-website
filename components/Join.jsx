import React from "react";
import Title from "@/components/Title";
import JoinCards from "./JoinCards";
// import Row from "react-bootstrap";
// import Col from "react-bootstrap";
import undulate from "../public/assets/undulate.svg";
import index4 from "../public/pictures/index4.webp";

const Join = () => {
  return (
    <div className="flex flex-col items-center overflow-hidden w-full relative pt-3">
      <Title title="Join IEEE@UCR" />

      <div className="w-full flex justify-center mb-10">
        <p className="font-medium font-giden text-sm md:text-md lg:text-lg xl:text-xl text-center w-9/12">
          To become a student member, follow us online and show up to any
          meetings, events, or projects that interest you.
        </p>
      </div>
      <img className="w-full z-10" src={index4.src} />
      <JoinCards xs={3} sm={6} md={9} xl={12} />
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

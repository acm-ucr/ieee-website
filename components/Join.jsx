import React from "react";
import Title from "@/components/Title";
import JoinCards from "./JoinCards";
const Join = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <Title title="Join IEEE@UCR" />

      <div className="max-w-2xl text-center">
        <p
          className="text-2xl leading-12 font-medium font-serif"
          style={{ fontFamily: "var(--giden-font)" }}
        >
          To become a student member, follow us online and show up to any
          meetings, events, or projects that interest you.
        </p>
      </div>

      <div className="w-full max-w-2xl">
        <img src="pictures/index4.png" className="mx-auto w-full" />
        <JoinCards />
      </div>
    </div>
  );
};

export default Join;

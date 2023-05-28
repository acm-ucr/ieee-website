import React from "react";
import pic from "../public/pictures/index3.webp";
import Title from "@/components/Title";
import Gear from "@/components/Gear";
import pinkGear from "../public/assets/gear-stroke-pink-blue.svg";
import blueGear from "../public/assets/gear-lightblue.svg";
import triangle from "../public/assets/triangle.svg";

const about = () => {
  return (
    <div className="mb-20 relative w-full overflow-hidden">
      <img
        className="z-0 -rotate-12 absolute -left-[10%] w-1/2"
        src={triangle.src}
      />
      <img
        className="z-0 rotate-12 absolute -right-[15%] top-24 w-2/3"
        src={triangle.src}
      />
      <div className=" rotate-6 z-0 left-[20%] absolute bottom-[35%] w-[15%]">
        <Gear src={pinkGear.src} isClockwise={0} speed={7}></Gear>
      </div>
      <div className=" z-0 absolute bottom-[30%] w-[10%] left-[30%]">
        <Gear src={blueGear.src} isClockwise={1} speed={5}></Gear>
      </div>
      <div className="flex w-full justify-center ">
        <div className="mt-3 w-10/12 md:w-1/2 flex items-center flex-col z-10 ">
          <Title title="Who We Are" />

          <p className="w-full my-10 text-center font-giden text-xl">
            IEEE stands for the Institute of Electrical and Electronics
            Engineers. We&#39;re a group dedicated to professionalism,
            connections, and our projects. Our mission as the local chapter is
            to provide engineers with technical, social, and professional
            development in the engineering field. We aim to be the leading
            engineering organization on campus, providing more opportunities for
            student improvement outside the classroom. We are committed in
            providing engineers with career enhancement, engineering social
            events, and growth in their respective professions.
          </p>
          <img
            className="w-full mt-10 mb-20 z-50"
            src={pic.src}
            alt="picture of students holding prizes"
          />

          <Title title="Our Mission" />

          <p className="w-full my-12 text-center font-giden text-xl">
            We provide engineers with technical, social, and professional
            development in the engineering field. We aim to be the leading
            engineering organization on campus, providing more opprtunities for
            student improvement outside the classroom. We are commited in
            providing engineers with career enhancement, engineering social
            events, and growth in their respective professions.
          </p>
        </div>
      </div>
    </div>
  );
};
export default about;

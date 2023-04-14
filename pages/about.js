import React from "react";
import pic from "../public/pictures/index3.jpg";
import Title from "@/components/Title";

export default function about() {
  return (
    <>
      <img className=" rotate-45 absolute h-full" src="/assets/triangle.svg" />
      <div className="flex w-full justify-center">
        <div className="mt-3 w-1/2 flex items-center flex-col ">
          <Title title="Who We Are" />

          <p className="w-full my-10 text-center font-giden text-xl">
            Lorem ipsum is placeholder text commonly used in the graphic, print,
            and publishing industries for previewing layouts and visual mockups.
          </p>
          <img
            className="w-full mt-10 mb-20"
            src={pic.src}
            alt="picture of students holding prizes"
          ></img>

          <Title title="Our Mission" />

          <p className="w-full my-10 text-center font-giden text-xl">
            We provide engineers with technical, social, and professional
            development in the engineering field. We aim to be the leading
            engineering organization on campus, providing more opprtunities for
            student improvement outside the classroom. We are commited in
            providing engineers with career enhancement, engineering social
            events, and growth in their respective professions.
          </p>
        </div>
      </div>
    </>
  );
}

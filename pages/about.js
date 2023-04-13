import React from "react";
import pic from "../public/pictures/index3.jpg";

export default function about() {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center pt-4">
        <img className="h-7 pr-2" src="/assets/title.svg" />
        <h2 className="font-teko">Who We Are?</h2>
      </div>

      <p className="max-w-[40%] text-center py-3 font-giden">
        Lorem ipsum is placeholder text commonly used in the graphic, print, and
        publishing industries for previewing layouts and visual mockups.
      </p>

      <img
        className="max-w-[50%] py-9"
        src={pic.src}
        alt="picture of students holding prizes"
      ></img>

      <div className="flex justify-center pt-4">
        <img className="h-7 pr-2" src="/assets/title.svg" />
        <h2 className="font-teko">Our mission</h2>
      </div>

      <p className="max-w-[50%] text-center py-3 font-giden">
        We provide engineers with technical, social, and professional
        development in the engineering field. We aim to be the leading
        engineering organization on campus, providing more opprtunities for
        student improvement outside the classroom. We are commited in providing
        engineers with career enhancement, engineering social events, and growth
        in their respective professions.
      </p>
    </div>
  );
}

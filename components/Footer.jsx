import React from "react";
import ieeelogo from "../public/assets/ieee-logo.svg";
import { BsDiscord } from "react-icons/bs";
import { GrMail } from "react-icons/gr";

const Footer = () => {
  return (
    <footer className="w-full relative">
      <img src="/assets/footer.svg" className="w-full " alt="background" />
      <div className="w-full absolute bottom-0">
        <div className="flex p-8 space-x-4">
          <div className="relative flex-grow ml-4">
            <img
              src={ieeelogo.src}
              className="absolute h-12 inset-x-0 bottom-2"
              alt="IEEE Logo"
            />
          </div>

          <div className="border-r-4 m-auto pr-6  font-teko text-lg ">
            <div className="mb-1">Contact us</div>
            <div className="mb-1">900 University Ave,</div>
            <div>Riverside, CA 92501</div>
          </div>

          <div className="m-auto pl-5 space-y-2 ">
            <BsDiscord size={40} />
            <GrMail size={40} />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

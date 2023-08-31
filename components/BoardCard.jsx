import React from "react";
import { MdOutlineEmail } from "react-icons/md";

const BoardCard = ({
  name,
  position,
  bgColor,
  textColor,
  shadowColor,
  email,
}) => {
  return (
    <div className="flex flex-row m-10 w-full">
      <div className={`${bgColor} h-28 w-2 mr-5`}></div>
      <div className="w-full">
        <div className="flex w-full justify-start items-center">
          <p className={`font-teko ${textColor} lg:text-3xl text-lg m-0`}>
            {position}
          </p>
          <a href={`mailto:${email}`}>
            <MdOutlineEmail className="text-xl text-white hover:cursor-pointer ml-5" />
          </a>
        </div>
        <div
          className={`${bgColor} mt-3 shadow-[10px_-8px_0px_0px] ${shadowColor} w-10/12`}
        >
          <p className="text-center px-4 py-2 text-2xl font-teko">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;

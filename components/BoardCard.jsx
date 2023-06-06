import React from "react";

const BoardCard = ({ name, position, bgColor, textColor, shadowColor }) => {
  return (
    <div className="flex flex-row m-10 w-full">
      <div className={`${bgColor} h-28 w-2 mr-5`}></div>
      <div className="w-full">
        <p className={`font-teko ${textColor} lg:text-3xl text-xl m-0 w-full`}>
          {position}
        </p>
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

import React from "react";

const BoardCard = ({ name, position, bgColor, textColor, shadowColor }) => {
  return (
    <div className="flex flex-row m-10">
      <div className={`${bgColor} h-28 w-2 r-5 mr-5`}></div>
      <div>
        <h1 className={`font-teko ${textColor} lg:text-4xl md:text-3xl  m-0`}>
          {position}
        </h1>
        <div
          className={`${bgColor} mt-3 shadow-[10px_-8px_0px_0px] ${shadowColor} text-center px-4 pt-2 text-4xl font-teko max-w-full min-w-max h-[50%]`}
        >
          {name}
        </div>
      </div>
    </div>
  );
};

export default BoardCard;

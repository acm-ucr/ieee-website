import React from "react";

const BoardCard = ({ name, position, bgColor, textColor, shadowColor }) => {
  return (
    <div className="col-md-auto w-25 relative my-20">
      <div className="flex flex-row">
        <div className={`${bgColor} h-auto w-2 r-5 mr-5`}></div>
        <div>
          <h1 className={`font-teko ${textColor} lg:text-5xl md:text-3xl  m-0`}>
            {position}
          </h1>
          <div
            className={`${bgColor} mt-3 shadow-[10px_-8px_0px_0px] ${shadowColor} text-center px-[15%] pt-[5%] text-3xl font-teko w-2/3 min-w-max h-[60%]`}
          >
            {name}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BoardCard;

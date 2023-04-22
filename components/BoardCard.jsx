import React from "react";

const BoardCard = ({ name, position, bgColor, textColor, shadowColor }) => {
  return (
    <div className="col-md-auto w-25 relative my-20">
      <h1 className={`font-teko ${textColor} lg:text-5xl md:text-3xl  m-0`}>
        {position}
      </h1>
      <div className="flex flex-row">
        <div className={`${bgColor} h-auto w-2 r-5 mr-5`}></div>
        <img className="w-1/2" src="board/cat.png"></img>
      </div>
      <div
        className={`${bgColor} shadow-[10px_-8px_0px_0px] ${shadowColor} text-center px-[4%] pt-[3%] text-3xl font-teko w-1/3 min-w-max h-[15%] absolute left-1/4 -bottom-[5%]`}
      >
        {name}
      </div>
    </div>
  );
};

export default BoardCard;

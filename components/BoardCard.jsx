import React from "react";

const BoardCard = () => {
  return (
    <div className="relative m-10">
      <h1 className="font-teko text-ieee-pinkPurple text-5xl m-0">Chair</h1>
      <div className="flex flex-row">
        <div className="bg-ieee-pinkPurple h-72 w-2 r-5 mr-5"></div>
        <img className="h-72" src="board/cat.png"></img>
      </div>
      <div className="bg-ieee-pinkPurple pl-5 pt-3 text-3xl font-teko shadow-[10px_-8px_0px_0px] shadow-ieee-pink w-44 h-16 absolute top-72 left-24">
        Chloe Georgiou
      </div>
    </div>
  );
};

export default BoardCard;

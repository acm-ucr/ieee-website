import React from "react";

const Filter = ({ topic, color }) => {
  return (
    <div
      className={` ${color} pt-2 text-center text-2xl w-[90%] cursor-text h-full py-1 rounded-sm flex justify-center font-teko text-white`}
    >
      {topic}
    </div>
  );
};

export default Filter;

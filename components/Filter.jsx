import React from "react";

const Filter = ({ topic, color }) => {
  return (
    <div
      className={` w-36 ${color} whitespace-nowrap p-1 text-center text-3xl cursor-text h-full rounded-sm flex justify-center font-teko text-white`}
    >
      {topic}
    </div>
  );
};

export default Filter;

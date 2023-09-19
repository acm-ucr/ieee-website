import React from "react";

const Filter = ({ topic, color }) => {
  return (
    <div
      className={`w-full ${color} whitespace-nowrap p-0 md:p-1 text-center text-sm md:text-xl rounded-sm flex justify-center font-teko text-white`}
    >
      {topic}
    </div>
  );
};

export default Filter;

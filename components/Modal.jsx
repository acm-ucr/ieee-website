import React from "react";
import { FaCircle } from "react-icons/fa";
import { AiOutlinePlus } from "react-icons/ai";
import Link from "next/link";

const ListElement = ({ color, innerText }) => {
  return (
    <div className="flex items-center p-2">
      <FaCircle className={`${color} mr-2`} />
      <div className="md:text-2xl text-lg"> {innerText} </div>
    </div>
  );
};

const Modal = ({ event, setState }) => {
  if (!event) return event && <div>No Event</div>;
  const startTime = new Date(event.start).toLocaleTimeString(
    navigator.language,
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );
  const endTime = new Date(event.end).toLocaleTimeString(navigator.language, {
    hour: "2-digit",
    minute: "2-digit",
  });
  return (
    <div
      className={` h-[70%] font-lexend fixed top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 w-[75vw] md:w-[50vw] bg-white border-4 ${event.border} rounded-2xl z-10`}
    >
      <div className={`flex justify-between items-center`}>
        <p
          className={` text-ieee-black ${event.color} rounded-full m-0 font-bold py-2 md:py-3 px-3 md:px-4 text-lg md:text-3xl`}
        >
          {event.summary}
        </p>
        <button className="p-0 m-2 text-5xl" onClick={() => setState(null)}>
          <AiOutlinePlus className="text-ieee-black rotate-45 p-0 m-0 hover:text-ieee-pink" />
        </button>
      </div>
      {event.location
        ? [
            new Date(event.start).toLocaleDateString(),
            `${startTime} - ${endTime}`,
            event.location,
          ].map((line, index) => (
            <ListElement key={index} color={event.textColor} innerText={line} />
          ))
        : [
            new Date(event.start).toLocaleDateString(),
            `${startTime} - ${endTime}`,
            <Link key={self} href={event.zoom} class="break-all">
              {event.zoom}
            </Link>,
          ].map((line, index) => (
            <ListElement key={index} color={event.textColor} innerText={line} />
          ))}
      <div className="md:text-xl text-sm px-[5%] text-ieee-purple">
        {" "}
        {event.description.replace(event.description.split(" ")[0], "")}{" "}
      </div>
    </div>
  );
};

export default Modal;

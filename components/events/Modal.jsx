import React from "react";
import { AiOutlinePlus } from "react-icons/ai";

const ListElement = ({ color, innerText }) => {
  return (
    <div className="ml-5 md:text-2xl text-base text-white font-teko">
      {innerText}
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
      className={` h-[70%] font-lexend fixed top-[50%] left-1/2 -translate-x-1/2 -translate-y-1/2 p-3 w-[75vw] md:w-[50vw] bg-black/50 backdrop-blur-md rounded-xl z-10`}
    >
      <div className={`flex justify-between items-center m-0`}>
        <p
          className={` text-white ${event.color} m-0 text-2xl rounded-sm px-4 py-0 font-teko`}
        >
          {event.summary}
        </p>
        <button className="p-0 m-2 text-3xl" onClick={() => setState(null)}>
          <AiOutlinePlus className="text-white rotate-45 p-0 m-0 hover:text-ieee-pink" />
        </button>
      </div>
      {event.location
        ? [
            new Date(event.start).toLocaleDateString(),
            `${startTime} - ${endTime}`,
            event.location,
          ].map((line, index) => (
            <ListElement key={index} text-white innerText={line} />
          ))
        : [
            new Date(event.start).toLocaleDateString(),
            `${startTime} - ${endTime}`,
            // <Link key={self} href={event.zoom} class="break-all">
            //   {event.zoom}
            // </Link>,
          ].map((line, index) => (
            <ListElement key={index} text-white innerText={line} />
          ))}
      <div className="md:text-xl text-sm px-[5%] text-ieee-purple">
        {event.description?.replace(event.description.split(" ")[0], "")}
      </div>
    </div>
  );
};

export default Modal;

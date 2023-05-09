import React from "react";

const CustomEvent = ({ event }) => {
  return (
    <div className="font-teko p-1">
      <p className="inline whitespace-nowrap">
        {event.summary}
        <br />
        {event.location}
        &nbsp; - &nbsp;
        {new Date(event.start).toLocaleTimeString(navigator.language, {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </p>
    </div>
  );
};

export default CustomEvent;

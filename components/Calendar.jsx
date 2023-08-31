import React, { useState } from "react";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.jsx";
import CustomEvent from "./CustomEvent.jsx";
import { useContext } from "react";

import Modal from "./Modal.jsx";
import EventsContext from "./EventsContext.jsx";
import Title from "./Title.jsx";

const mLocalizer = momentLocalizer(moment);

const CalendarEvents = () => {
  const [modalEvent, setModalEvent] = useState(null);
  const { events } = useContext(EventsContext);
  console.log(events);
  return (
    events && (
      <section className="w-full flex justify-center items-center flex-col mt-[2vh] text-xl">
        <Title title="Events" />
        <div className="w-10/12 flex justify-center items-center text-xl my-5">
          <div className="h-[100vh] w-full relative text-xl">
            <Calendar
              className={`font-teko w-full m-0 p-0 text-lg md:text-2xl `}
              showAllEvents={true}
              events={events}
              localizer={mLocalizer}
              defaultView="month"
              views={["month"]}
              components={{
                event: CustomEvent,
                toolbar: CustomToolbar,
              }}
              eventPropGetter={(event) => {
                return {
                  className: `!${event.color} p-0 !active:ring-0 !focus:outline-0`,
                };
              }}
              dayPropGetter={(event) => {
                const bg =
                  new Date(event).toLocaleDateString() ==
                  new Date().toLocaleDateString()
                    ? "!bg-opacity-20 !bg-white"
                    : "!bg-transparent";
                return {
                  className: `${bg}`,
                  style: {
                    margin: 0,
                    padding: 0,
                  },
                };
              }}
              onSelectEvent={(event) => {
                setModalEvent(event);
              }}
            />
            <Modal event={modalEvent} setState={setModalEvent} />
          </div>
        </div>
      </section>
    )
  );
};

export default CalendarEvents;

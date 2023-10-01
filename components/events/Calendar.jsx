import React, { useEffect, useState } from "react";
import axios from "axios";
import moment from "moment";
import { Calendar, momentLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import CustomToolbar from "./CustomToolbar.jsx";
import CustomEvent from "./CustomEvent.jsx";
import Modal from "./Modal.jsx";

const recDayMap = { MO: 1, TU: 2, WE: 3, TH: 4, FR: 5, SA: 6, SU: 0 };
const mLocalizer = momentLocalizer(moment);
const CalendarEvents = () => {
  const [modalEvent, setModalEvent] = useState(null);
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const eventList = [];
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_CALENDAR_ID}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&timeMin=2023-10-08T21:58:44.000Z`
      )
      .then((result) => {
        result.data.items.map((event) => {
          const startHour = new Date(event.start?.dateTime).getHours();
          const endHour = new Date(event.end?.dateTime).getHours();
          const color = event.summary?.includes("General Meeting")
            ? "bg-ieee-pink"
            : event.summary?.includes("SolarCar")
            ? "bg-ieee-pinkPurple"
            : event.summary?.includes("UAS")
            ? "bg-ieee-purple"
            : event.summary?.includes("Robosub")
            ? "bg-ieee-bluePurple"
            : event.summary?.includes("MicroMouse")
            ? "bg-ieee-blue"
            : "bg-ieee-lightblue";
          if (event.recurrence[0].split("FREQ=")[1].split(";")[0] == "WEEKLY") {
            const d = new Date(
              new Date().getFullYear(),
              new Date().getMonth(),
              1
            );

            d.setDate(
              d.getDate() -
                d.getDay() +
                recDayMap[event.recurrence[0].split("BYDAY=")[1]] -
                7
            );
            for (let i = 0; i <= 5; i++) {
              d.setDate(d.getDate() + 7);
              const start = new Date(d);
              start.setHours(startHour);
              start.setMinutes(0);
              const end = new Date(d);
              end.setHours(endHour);
              end.setMinutes(0);
              eventList.push({
                ...event,
                start: start,
                end: end,
                color: color,
              });
            }
          }
        });
        setEvents(eventList);
      });
  }, []);
  return (
    events && (
      <div className="w-11/12 h-[80vh] relative text-xl">
        <Calendar
          className={`font-teko w-full m-0 p-0 text-lg md:text-2xl`}
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
    )
  );
};

export default CalendarEvents;

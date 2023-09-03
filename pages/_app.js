import "@/styles/globals.css";
import React, { useEffect, useState } from "react";
import Layout from "@/components/Layout";
import "bootstrap/dist/css/bootstrap.css";
// eslint-disable-next-line camelcase
import { Teko, Gideon_Roman } from "next/font/google";
import EventsContext from "@/components/EventsContext";
import axios from "axios";

// eslint-disable-next-line new-cap
const teko = Teko({
  variable: "--teko-font",
  weight: ["300", "400", "500", "600", "700"],
  subsets: ["latin"],
});
// eslint-disable-next-line new-cap
const giden = Gideon_Roman({
  variable: "--giden-font",
  weight: ["400"],
  subsets: ["latin"],
});
export default function App({ Component, pageProps }) {
  const [events, setEvents] = useState([]);
  useEffect(() => {
    const eventList = [];
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}&timeMin=2023-10-08T21:58:44.000Z`
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
            const recDay = event.recurrence[0].split("BYDAY=")[1];
            let day;
            switch (recDay) {
              case "MO":
                day = 1;
                break;
              case "TU":
                day = 2;
                break;
              case "WE":
                day = 3;
                break;
              case "TH":
                day = 4;
                break;
              case "FR":
                day = 5;
                break;
              case "SA":
                day = 6;
                break;
              case "SU":
                day = 0;
                break;
            }
            const d = new Date();
            d.setDate(d.getDate() - d.getDay() + day);
            for (let i = -10; i <= 10; i++) {
              const addDay = new Date();
              addDay.setDate(d.getDate() + 7 * i);
              const start = new Date(addDay);
              start.setHours(startHour);
              start.setMinutes(0);
              const end = new Date(addDay);
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
      });
    setEvents(eventList);
  }, []);

  return (
    <EventsContext.Provider value={{ events }}>
      <div
        className={`w-full overflow-clip ${teko.variable} ${giden.variable}`}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </EventsContext.Provider>
  );
}

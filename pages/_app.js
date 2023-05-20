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
    axios
      .get(
        `https://www.googleapis.com/calendar/v3/calendars/${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_EMAIL}/events?key=${process.env.NEXT_PUBLIC_GOOGLE_CALENDAR_API_KEY}`
      )
      .then((result) => {
        setEvents(result.data.items);
      });
  }, []);

  return (
    <EventsContext.Provider value={{ events }}>
      <div
        className={` w-screen overflow-hidden ${teko.variable} ${giden.variable}`}
      >
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </div>
    </EventsContext.Provider>
  );
}

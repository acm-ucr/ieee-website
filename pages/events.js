import React from "react";
import Calendar from "../components/events/Calendar";
import Title from "@/components/Title";
export default function events() {
  return (
    <div className="w-full flex items-center flex-col justify-center my-10">
      <Title title="Events" />
      <Calendar />
    </div>
  );
}

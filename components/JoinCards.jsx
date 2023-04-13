import React from "react";
import JoinCard from "@/components/JoinCard";
const JoinCards = () => {
  return (
    <div className=" pb-5 pt-5 bg-ieee-black flex justify-center">
      <div className=" w-2/3 flex items-center justify-evenly ">
        <JoinCard
          name="Discord"
          color="ieee-bluePurple"
          icon="discord"
          link="https://discord.gg/Ugjp6Us"
        />

        <JoinCard
          name="Email us"
          color="ieee-purple"
          icon="email"
          link="https://ieeeucr.github.io/subscribe.html"
        />

        <JoinCard
          name="Hignlander Link"
          color="ieee-blue"
          icon="link"
          link="https://highlanderlink.ucr.edu/organization/ieee"
        />

        <JoinCard
          name="Events"
          color="ieee-pinkPurple"
          icon="events"
          link="https://ieeeucr.github.io/calendar.html"
        />
      </div>
    </div>
  );
};

export default JoinCards;

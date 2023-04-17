import React from "react";
import JoinCard from "@/components/JoinCard";
import { BsDiscord, BsFillCalendarHeartFill } from "react-icons/bs";
import { FaEnvelope, FaLink } from "react-icons/fa";

const cards = [
  {
    name: "Discord",
    text: "text-ieee-bluePurple",
    background: "bg-ieee-bluePurple",
    border: "border-ieee-bluePurple",
    link: "https://discord.gg/Ugjp6Us",
    icon: <BsDiscord className="text-6xl mt-3 mb-1" />,
  },
  {
    name: "Email Us",
    text: "text-ieee-purple",
    background: "bg-ieee-purple",
    border: "border-ieee-purple",
    link: "https://ieeeucr.github.io/subscribe.html",
    icon: <FaEnvelope className="text-6xl mt-3 mb-1" />,
  },
  {
    name: "Highlander Link",
    text: "text-ieee-blue",
    background: "bg-ieee-blue",
    border: "border-ieee-blue",
    link: "https://highlanderlink.ucr.edu/organization/ieee",
    icon: <FaLink className="text-6xl mt-3 mb-1" />,
  },
  {
    name: "Events",
    text: "text-ieee-pinkPurple",
    background: "bg-ieee-pinkPurple",
    border: "border-ieee-pinkPurple",
    link: "https://ieeeucr.github.io/calendar.html",
    icon: <BsFillCalendarHeartFill className="text-6xl mt-3 mb-1" />,
  },
];

const JoinCards = () => {
  return (
    <div className=" pb-5 pt-5 bg-ieee-black flex justify-center">
      <div className=" w-2/3 flex items-center justify-evenly ">
        {cards.map((card, index) => (
          <JoinCard
            key={index}
            name={card.name}
            text={card.text}
            background={card.background}
            border={card.border}
            icon={card.icon}
            link={card.link}
          />
        ))}
      </div>
    </div>
  );
};

export default JoinCards;

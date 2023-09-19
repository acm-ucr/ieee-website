import { BsDiscord, BsFillCalendarHeartFill } from "react-icons/bs";
import { FaEnvelope, FaLink } from "react-icons/fa";
export const cards = [
  {
    name: "Discord",
    text: "text-ieee-bluePurple",
    background: "bg-ieee-bluePurple",
    border: "border-ieee-bluePurple",
    link: "https://discord.gg/Ugjp6Us",
    icon: <BsDiscord className="text-6xl mt-3 mb-1" />,
  },
  {
    name: "Email",
    text: "text-ieee-purple",
    background: "bg-ieee-purple",
    border: "border-ieee-purple",
    link: "https://ieeeucr.github.io/subscribe.html",
    icon: <FaEnvelope className="text-6xl mt-3 mb-1" />,
  },
  {
    name: "Highlander",
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
    link: "https://ieeeucr.github.io/events.html",
    icon: <BsFillCalendarHeartFill className="text-6xl mt-3 mb-1" />,
  },
];

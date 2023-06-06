import React from "react";
import JoinCard from "@/components/JoinCard";
import { BsDiscord, BsFillCalendarHeartFill } from "react-icons/bs";
import { FaEnvelope, FaLink } from "react-icons/fa";
import { Row, Col } from "react-bootstrap";

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

const JoinCards = () => {
  return (
    <div className=" z-10 pb-5 pt-5 flex justify-center w-full">
      <div className="w-5/6 flex items-center justify-center">
        <Row className="flex justify-even xs:w-5/6 sm:w-3/4 md:w-4/5">
          {cards.map((card, index) => (
            <Col
              key={index}
              xs={6}
              md={3}
              className="my-3 flex justify-center items-center"
            >
              <JoinCard
                name={card.name}
                text={card.text}
                background={card.background}
                border={card.border}
                icon={card.icon}
                link={card.link}
              />
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default JoinCards;

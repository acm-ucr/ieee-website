import React from "react";
import JoinCard from "@/components/JoinCard";
import { Row, Col } from "react-bootstrap";
import { cards } from "./data/join";

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

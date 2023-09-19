import React from "react";
import JoinCard from "@/components/JoinCard";
import { Row, Col } from "react-bootstrap";
import { cards } from "./data/join";

const JoinCards = () => {
  return (
    <div className="w-5/6 flex items-center justify-center my-12">
      <Row className="flex justify-even w-5/6 md:w-3/4">
        {cards.map((card, index) => (
          <Col
            key={index}
            xs={6}
            md={3}
            className="flex justify-center items-center m-0 p-0"
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
  );
};

export default JoinCards;

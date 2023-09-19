import React from "react";
import JoinCard from "./JoinCard";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { cards } from "@/components/data/join";

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
              index={index}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default JoinCards;

import React from "react";
import Title from "@/components/Title";
import JoinCards from "./JoinCards";
import undulate from "../public/assets/undulate.svg";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
const Join = () => {
  return (
    <div className="flex flex-col justify-center items-center overflow-hidden">
      <Title title="Join IEEE@UCR" />

      <div className="text-center">
        <p className="font-medium font-giden text-sm md:text-md lg:text-lg xl:text-xl">
          To become a student member, follow us online and show up to any
          meetings, events, or projects that interest you.
        </p>
      </div>
      <Row className="w-full">
        <Col className="my-2">
          <img className="w-full" src="pictures/index4.png" />
        </Col>
      </Row>
      <Row xl={12} md={9} sm={6} xs={3} className=" w-full justify-center">
        <JoinCards />
      </Row>
      <Row className="w-100">
        <Col xs={3} md={6} xl={12} className="my-2">
          <img className="z-10 rotate-12 absolute w-full" src={undulate.src} />
        </Col>
        <Col xs={3} md={6} xl={12} className="my-2">
          <img className="z-10 -rotate-90 absolute w-full" src={undulate.src} />
        </Col>
      </Row>
    </div>
  );
};

export default Join;

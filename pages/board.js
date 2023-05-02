import React from "react";
import BoardCard from "@/components/BoardCard";
import { Container, Row, Col } from "react-bootstrap";

export default function board() {
  return (
    <Container>
      <Row className="m-10 justify-content-md-center">
        <Col sm={12} md={6} xl={4}>
          <BoardCard
            name="Chloe Georgiou"
            position="Chair"
            bgColor="bg-ieee-pinkPurple"
            textColor="text-ieee-pinkPurple"
            shadowColor="shadow-ieee-pink"
          />
        </Col>

        <Col sm={12} md={6} xl={4}>
          <BoardCard
            name="Laiba Hasan"
            position="Vice Chair"
            bgColor="bg-ieee-blue"
            textColor="text-ieee-blue"
            shadowColor="shadow-ieee-lightblue"
          />
        </Col>
      </Row>

      <Row className="m-10 justify-content-md-center">
        <Col sm={12} md={6} xl={4}>
          <BoardCard
            name="Harrison Cooper"
            position="Secretary/Webmaster"
            bgColor="bg-ieee-purple"
            textColor="text-ieee-purple"
            shadowColor="shadow-ieee-bluePurple"
          />
        </Col>

        <Col sm={12} md={6} xl={4}>
          <BoardCard
            name="Andro Zaki"
            position="Treasurer"
            bgColor="bg-ieee-blue"
            textColor="text-ieee-blue"
            shadowColor="shadow-ieee-bluePurple"
          />
        </Col>

        <Col sm={12} md={6} xl={4}>
          <BoardCard
            name="Connor Stewart"
            position="Professional Development"
            bgColor="bg-ieee-pinkPurple"
            textColor="text-ieee-pinkPurple"
            shadowColor="shadow-ieee-pink"
          />
        </Col>
      </Row>

      <Row className="m-10 justify-content-md-center">
        <Col sm={12} md={6} xl={4}>
          <BoardCard
            name="Nicholas Kang"
            position="Program Chair"
            bgColor="bg-ieee-pink"
            textColor="text-ieee-pink"
            shadowColor="shadow-ieee-pinkPurple"
          />
        </Col>
        <Col sm={12} md={6} xl={4}>
          <BoardCard
            name="Alexander Hickerson"
            position="Program Chair"
            bgColor="bg-ieee-bluePurple"
            textColor="text-ieee-bluePurple"
            shadowColor="shadow-ieee-pink"
          />
        </Col>
      </Row>

      <Row className="m-10 justify-content-md-center">
        <Col sm={12} md={6} xl={4}>
          <BoardCard
            name="Sethya Pugal"
            position="Robotics Coordinator"
            bgColor="bg-ieee-blue"
            textColor="text-ieee-blue"
            shadowColor="shadow-ieee-lightblue"
          />
        </Col>

        <Col sm={12} md={6} xl={4}>
          <BoardCard
            name="Sonny Ding"
            position="Robotics Coordinator"
            bgColor="bg-ieee-purple"
            textColor="text-ieee-purple"
            shadowColor="shadow-ieee-bluePurple"
          />
        </Col>
      </Row>

      <Row className="m-10 justify-content-md-center">
        <Col sm={12} md={6} xl={4}>
          <BoardCard
            name="Divyank Shah"
            position="Solar Car Coordinator"
            bgColor="bg-ieee-purple"
            textColor="text-ieee-purple"
            shadowColor="shadow-ieee-blue"
          />
        </Col>

        <Col sm={12} md={6} xl={4}>
          <BoardCard
            name="Daisy Rojas Garcia"
            position="Solar Car Coordinator"
            bgColor="bg-ieee-pinkPurple"
            textColor="text-ieee-pinkPurple"
            shadowColor="shadow-ieee-bluePurple"
          />
        </Col>
      </Row>

      <Row className="m-10 justify-content-md-center">
        <Col sm={12} md={6} xl={4}>
          <BoardCard
            name="Benjamin Bravo"
            position="Fundraising Chair"
            bgColor="bg-ieee-blue"
            textColor="text-ieee-blue"
            shadowColor="shadow-ieee-bluePurple"
          />
        </Col>

        <Col sm={12} md={6} xl={4}>
          <BoardCard
            name="Saraí Herrerra"
            position="Fundraising Chair"
            bgColor="bg-ieee-pink"
            textColor="text-ieee-pink"
            shadowColor="shadow-ieee-pinkPurple"
          />
        </Col>
      </Row>

      <Row className="m-10 justify-content-md-center">
        <Col sm={12} md={6} xl={4}>
          <BoardCard
            name="Anthony Villicana"
            position="Historian"
            bgColor="bg-ieee-bluePurple"
            textColor="text-ieee-bluePurple"
            shadowColor="shadow-ieee-pink"
          />
        </Col>

        <Col sm={12} md={6} xl={4}>
          <BoardCard
            name="Zinal Patel"
            position="Robosub Coordinator"
            bgColor="bg-ieee-pinkPurple"
            textColor="text-ieee-pinkPurple"
            shadowColor="shadow-ieee-pink"
          />
        </Col>

        <Col sm={12} md={6} xl={4}>
          <BoardCard
            name="Sreekar Vattipalli"
            position="Graduate Student Representative"
            bgColor="bg-ieee-blue"
            textColor="text-ieee-blue"
            shadowColor="shadow-ieee-lightblue"
          />
        </Col>
      </Row>
    </Container>
  );
}

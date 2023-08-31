import React from "react";
import BoardCard from "@/components/BoardCard";
import { Row, Col } from "react-bootstrap";
import { colors, boards } from "@/components/data/boards";

export default function board() {
  return (
    <div className="w-full flex justify-center">
      <Row className="w-11/12 justify-center flex">
        {boards.map((board, index) => (
          <Col key={index} sm={12} md={6} xl={3}>
            <BoardCard
              name={board.name}
              position={board.position}
              bgColor={colors[index % colors.length].bgColor}
              textColor={colors[index % colors.length].textColor}
              shadowColor={colors[index % colors.length].shadowColor}
              email={board.email}
            />
          </Col>
        ))}
      </Row>
    </div>
  );
}

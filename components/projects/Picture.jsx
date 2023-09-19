import React from "react";
import { Col } from "react-bootstrap";
const Picture = ({ content }) => {
  return (
    <Col xs={content.width} className="my-3 m-0 flex flex-col justify-center">
      <img src={content.src} />
      <p className="text-center font-giden">{content.text}</p>
    </Col>
  );
};

export default Picture;

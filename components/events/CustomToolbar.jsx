import React from "react";
import Filter from "./Filter.jsx";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Filters from "@/components/data/filters.js";
const CustomToolbar = (event) => {
  return (
    <div className="flex justify-center items-center">
      <Row className="w-full">
        <Col
          xs={4}
          className="p-0 m-0 flex justify-start items-center text-3xl font-teko"
        >
          <div className="text-center text-4xl p-1">
            {event.date.toString().split(" ")[1]}
            <br className="m-0" />
            {event.date.getFullYear()}
          </div>
        </Col>
        <Col xs={8} className="px-2 w-full flex justify-end items-end m-0 pb-4">
          <Row className="w-full m-0 p-0 flex justify-evenly justify-items-center items-center ">
            {Filters.map((filter, index) => {
              return (
                <Col key={index} xs={12} lg={2} className="m-0 p-0">
                  <Filter topic={filter.topic} color={filter.color} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default CustomToolbar;

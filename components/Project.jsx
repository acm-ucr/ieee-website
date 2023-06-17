import React from "react";
import solarcar2 from "../public/pictures/solarcar2.webp";
import solarcar1 from "../public/pictures/solarcar1.webp";
import UAS1 from "../public/pictures/UAS1.webp";
import UAS2 from "../public/pictures/UAS2.webp";
import RoboSub1 from "../public/pictures/RoboSub1.webp";
import RoboSub2 from "../public/pictures/RoboSub2.webp";
import Micromouse1 from "../public/pictures/Micromouse1.webp";
import Micromouse2 from "../public/pictures/Micromouse2.webp";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

const Project = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center relative">
      <div className="w-9/12 flex flex-col items-center">
        <p className="font-teko text-4xl text-left w-full ml-12 flex justify-center">
          Solar Car
        </p>
        <div className="flex lg:flex-row md:flex-row flex-col flex-w-full justify-between">
          <img
            className="z-10 lg:mr-2 md:mr-2 m-2 lg:w-1/2 md:w-1/2 "
            src={solarcar2.src}
          />
          <img
            className="z-10 lg:ml-2 md:ml-2 m-2 lg:w-1/2 md:w-1/2 "
            src={solarcar1.src}
          />
        </div>
        <p className="text-center text-xl w-2/5 m-36 font-giden">
          The University of California Riverside Solar Car team consists of many
          talented, undergraduate students who aim to construct a full-scaled
          solar car to compete in the Formula Sun Grand Prix, and the American
          Solar Challenge: a national collegiate competition which requires
          teams and their solar-powered vehicles to finish a 2,000 mile
          cross-country journey.
        </p>
      </div>
      <p className="z-10 font-teko text-4xl w-full ml-12 flex justify-center">
        Unmanned Aerial Systems
      </p>
      <div className="flex flex-col items-center">
        <div>
          <div className="flex flex-row w-full justify-between items-center">
            <Row className="z-10">
              <Col xs={12} sm={6}>
                <img src={UAS1.src} />
              </Col>
              <Col xs={12} sm={6}>
                <img src={UAS2.src} />
              </Col>
            </Row>
          </div>
        </div>
        <p className="text-center text-xl w-11/12 md:w-3/5 my-24 font-giden">
          UCR Unmanned Aerial Systems is a highly-motivated and
          interdisciplinary group of students designing, constructing and
          programming an autonomous aerial vehicle to compete in the annual
          Association for Unmanned Vehicle Systems International Student
          Unmanned Aerial Systems Competition (AUVSI-SUAS) hosted in Maryland.
        </p>
        <p className="font-teko text-4xl w-full ml-12 flex justify-center">
          RoboSub
        </p>
        <div>
          <div className="flex flex-row w-full justify-between items-center">
            <Row className="z-10">
              <Col xs={12} sm={6}>
                <img src={RoboSub1.src} />
              </Col>
              <Col xs={12} sm={6}>
                <img src={RoboSub2.src} />
              </Col>
            </Row>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col items-center">
          <p className="text-center text-xl w-2/5 m-36 font-giden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamaco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
      <div>
        <p className="font-teko text-4xl text-left w-full ml-12 flex justify-center">
          Micromouse
        </p>
        <div className="flex flex-col items-center">
          <div className="flex flex-row space-x-4">
            <img className="z-10" src={Micromouse1.src} />
            <img className="z-10" src={Micromouse2.src} />
          </div>
          <p className="text-center text-xl w-2/5 m-36 font-giden">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamaco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Project;

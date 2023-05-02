import React from "react";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import solarcar2 from "../public/pictures/solarcar2.png";
import solarcar1 from "../public/pictures/solarcar1.png";
import UAS1 from "../public/pictures/UAS1.png";
import UAS2 from "../public/pictures/UAS2.png";
import RoboSub1 from "../public/pictures/RoboSub1.png";
import RoboSub2 from "../public/pictures/RoboSub2.png";
import Micromouse1 from "../public/pictures/Micromouse1.png";
import Micromouse2 from "../public/pictures/Micromouse2.png";

const Project = () => {
  return (
    <div>
      <h2 className="ml-12 my-10 font-teko text-">Solar Car</h2>
      <div className="flex flex-col items-center">
        <Row>
          <Col xs={12} sm={6} >
            <img className="z-10" src={solarcar2.src} />
          </Col>
          <Col xs={12} sm={6} >
          <img className="z-10" src={solarcar1.src} />
          </Col>
        </Row>
        <p className="text-center text-base md:text-xl w-10/12 md:w-2/5 m-36 font-giden">
          The University of California Riverside Solar Car team consists of many
          talented, undergraduate students who aim to construct a full-scaled
          solar car to compete in the Formula Sun Grand Prix, and the American
          Solar Challenge: a national collegiate competition which requires
          teams and their solar-powered vehicles to finish a 2,000 mile
          cross-country journey.
        </p>
      </div>
      <div>
        <h2 className="z-50 ml-12 my-10t font-teko text-">
          Unmanned Aerial Systems
        </h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-row space-x-4">
            <img className="z-10" src={UAS1.src} />
            <img src={UAS2.src} />
          </div>
          <p className="text-center text-xl w-2/5 m-36 font-giden">
            UCR Unmanned Aerial Systems is a highly-motivated and
            interdisciplinary group of students designing, constructing and
            programming an autonomous aerial vehicle to compete in the annual
            Association for Unmanned Vehicle Systems International Student
            Unmanned Aerial Systems Competition (AUVSI-SUAS) hosted in Maryland.
          </p>
        </div>
      </div>
      <div>
        <h2 className="ml-12 my-10 font-teko text-">RoboSub</h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-row space-x-4 z-10">
            <img src={RoboSub1.src} />
            <img src={RoboSub2.src} />
          </div>
          <p className="text-center text-xl w-2/5 m-36 font-giden z-10">
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
        <h2 className="ml-12 my-10 font-teko text-">Micromouse</h2>
        <div className="flex flex-col items-center">
          <div className="flex flex-row space-x-4">
            <img src={Micromouse1.src} />
            <img src={Micromouse2.src} />
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

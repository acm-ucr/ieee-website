import React from "react";
import { Row, Col } from "react-bootstrap";
import { projects } from "./data/projects";

const Project = () => {
  return (
    <div className="w-10/12 flex flex-col relative">
      {projects.map((project, index) => (
        <div key={index} className="w-full flex flex-col items-center">
          <p className="font-teko text-xl md:text-3xl text-left self-start">
            {project.title}
          </p>
          <Row className="z-10 w-full">
            <Col className="p-0 m-0 my-1 " xs={12} sm={6}>
              <img
                src={project.img1}
                className="object-cover h-[300px] w-full"
              />
            </Col>
            <Col className="p-0 m-0 my-1" xs={12} sm={6}>
              <img
                src={project.img2}
                className="object-cover h-[300px] w-full"
              />
            </Col>
          </Row>
          <p className="text-center text-sm md:text-xl w-9/12 md:w-2/5 mt-20 font-giden">
            {project.text}
          </p>
          <a
            className={`px-4 border-2 font-teko no-underline m-3 text-3xl text-white border-white`}
            href={`/projects/${project.detail}`}
          >
            Details
          </a>
        </div>
      ))}
    </div>
  );
};

export default Project;

import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { projects } from "@/components/data/projects";
import { motion } from "framer-motion";
const Project = () => {
  return (
    <div className="w-10/12 flex flex-col relative">
      {projects.map((project, index) => (
        <div key={index} className="w-full flex flex-col items-center">
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "teew" }}
            className="font-teko text-xl md:text-3xl text-left self-start"
          >
            {project.title}
          </motion.p>
          <Row className="z-10 w-full">
            <Col className="p-0 m-0 my-1 " xs={12} sm={6}>
              <motion.img
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type: "teew", delay: 0.3 }}
                src={project.img1}
                className="object-cover h-[300px] w-full"
              />
            </Col>
            <Col className="p-0 m-0 my-1" xs={12} sm={6}>
              <motion.img
                initial={{ y: -30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ duration: 1, type: "teew", delay: 0.6 }}
                src={project.img2}
                className="object-cover h-[300px] w-full"
              />
            </Col>
          </Row>
          <motion.p
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "teew", delay: 0.9 }}
            className="text-center text-sm md:text-xl w-9/12 md:w-2/5 mt-20 font-giden"
          >
            {project.text}
          </motion.p>
          <motion.a
            initial={{ y: -30, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, type: "teew", delay: 1.2 }}
            className={`px-4 border-2 font-teko no-underline m-3 text-3xl text-white border-white`}
            href={`/projects/${project.detail}`}
          >
            Details
          </motion.a>
        </div>
      ))}
    </div>
  );
};

export default Project;

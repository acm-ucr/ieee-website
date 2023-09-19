import ProjectCard from "./ProjectCard";
import Title from "../Title";
import bars from "../../public/assets/bars.svg";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { projects } from "../../data/projects";
const ProjectSection = () => {
  return (
    <div className="w-full overflow-hidden">
      <div className="relative pb-5 pt-5 flex flex-col items-center justify-center w-full h-full overflow mt-10">
        <Title title="Projects" />
        <Row className="w-2/3 items-center justify-center my-5">
          {projects.map((project, index) => (
            <Col className="m-0 p-0" xs={6} md={3} key={index}>
              <ProjectCard
                key={index}
                index={index}
                name={project.title}
                color={project.color}
                logoIcon={project.logo}
                links={project.links}
                detail={project.detail}
              />
            </Col>
          ))}
        </Row>
        <div className="flex flex-row justify-between w-full overflow-clip">
          <img src={bars.src} className=" w-1/2" />
          <img src={bars.src} className="rotate-180 w-1/2 " />
        </div>
      </div>
    </div>
  );
};

export default ProjectSection;

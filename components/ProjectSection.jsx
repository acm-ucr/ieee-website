import ProjectCard from "./ProjectCard";
import { FaReact } from "react-icons/fa";

const ProjectCards = [
    {
        name: "Project Name",
        colour: 'ieee-bluePurple',
        logoIcon: <FaReact/>,
        linkOne: "https://legacy.reactjs.org/docs/getting-started.html",
        linkTwo: "https://legacy.reactjs.org/docs/getting-started.html",
        linkThree: "https://legacy.reactjs.org/docs/getting-started.html",
    },
    {
        name: "Project Name",
        colour: 'ieee-bluePurple',
        logoIcon: <FaReact/>,
        linkOne: "https://legacy.reactjs.org/docs/getting-started.html",
        linkTwo: "https://legacy.reactjs.org/docs/getting-started.html",
        linkThree: "https://legacy.reactjs.org/docs/getting-started.html",
    },
    {
        name: "Project Name",
        colour: 'ieee-bluePurple',
        logoIcon: <FaReact/>,
        linkOne: "https://legacy.reactjs.org/docs/getting-started.html",
        linkTwo: "https://legacy.reactjs.org/docs/getting-started.html",
        linkThree: "https://legacy.reactjs.org/docs/getting-started.html",
    },
    {
        name: "Project Name",
        colour: 'ieee-bluePurple',
        logoIcon: <FaReact/>,
        linkOne: "https://legacy.reactjs.org/docs/getting-started.html",
        linkTwo: "https://legacy.reactjs.org/docs/getting-started.html",
        linkThree: "https://legacy.reactjs.org/docs/getting-started.html",
    },
];

const ProjectSection = () => {
    return (
      <div className=" pb-5 pt-5 bg-ieee-black flex justify-center w-full">
        <div className=" w-2/3 flex items-center justify-evenly">
          {ProjectCards.map((card, index) => (
            <ProjectCard
              key={index}
              name = {card.name}
              colour={card.colour}
              logoIcon={card.logoIcon}
              linkOne={card.linkOne}
              linkTwo={card.linkTwo}
              linkThree={card.linkThree}
            />
          ))}
        </div>
      </div>
    );
  };
       
export default ProjectSection;
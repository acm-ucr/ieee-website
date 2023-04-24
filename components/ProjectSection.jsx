import ProjectCard from "./ProjectCard";
import solacor from "../public/assets/solarcar.svg";
import UAS from "../public/assets/UAS.png";
import robosub from "../public/assets/robosub.png";
import Micromouse from "../public/assets/Micromouse.svg";

const ProjectCards = [
  {
    name: "Solar Car",
    textColour: "text-ieee-bluePurple",
    colour: "bg-ieee-bluePurple",
    logoIcon: <img src={solacor.src} alt="solar car" />,
    linkOne: "https://legacy.reactjs.org/docs/getting-started.html",
    linkTwo: "https://legacy.reactjs.org/docs/getting-started.html",
    linkThree: "https://legacy.reactjs.org/docs/getting-started.html",
  },
  {
    name: "UAS",
    textColour: "text-ieee-pinkPurple",
    colour: "bg-ieee-pinkPurple",
    logoIcon: <img src={UAS.src} alt="UAS" />,
    linkOne: "https://legacy.reactjs.org/docs/getting-started.html",
    linkTwo: "https://legacy.reactjs.org/docs/getting-started.html",
    linkThree: "https://legacy.reactjs.org/docs/getting-started.html",
  },
  {
    name: "Robosub",
    textColour: "text-ieee-darkblue",
    colour: "bg-ieee-darkblue",
    logoIcon: <img src={robosub.src} alt="robosub" />,
    linkOne: "https://legacy.reactjs.org/docs/getting-started.html",
    linkTwo: "https://legacy.reactjs.org/docs/getting-started.html",
    linkThree: "https://legacy.reactjs.org/docs/getting-started.html",
  },
  {
    name: "Micromouse",
    textColour: "text-ieee-pink",
    colour: "bg-ieee-pink",
    logoIcon: <img src={Micromouse.src} alt="UAS" />,
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
            name={card.name}
            colour={card.colour}
            logoIcon={card.logoIcon}
            linkOne={card.linkOne}
            linkTwo={card.linkTwo}
            textColour={card.textColour}
            linkThree={card.linkThree}
          />
        ))}
      </div>
    </div>
  );
};

export default ProjectSection;

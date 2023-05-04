import ProjectCard from "./ProjectCard";
import solacor from "../public/assets/solarcar.svg";
import UAS from "../public/assets/UAS.webp";
import robosub from "../public/assets/robosub.webp";
import Micromouse from "../public/assets/Micromouse.svg";
import Title from "./Title";
import Gear from "./Gear";
import pinkGear from "../public/assets/gear-stroke-redpink.svg";
import blueGear from "../public/assets/gear-lightblue.svg";
import bars from "../public/assets/bars.svg";
import coil from "../public/assets/coil.svg";
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";

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
    <div className="w-full overflow-hidden">
      <div className="w-full h-48 overflow-clip">
        <img
          className="absolute -left-48 -translate-y-20 h-full z-0"
          src={coil.src}
        />
      </div>
      <div className="relative pb-5 pt-5 flex flex-col items-center justify-center w-full h-full overflow">
        <Title title="Projects" />

        <img
          className="z-0 rotate-90 absolute right-[-6rem] top-[1rem] w-[800px] h-[800px]"
          src={coil.src}
        />
        <div className=" rotate-6 -z-10 lg:z-0 left-32 absolute top-16 w-[160px]">
          <Gear src={pinkGear.src} isClockwise={0} speed={7}></Gear>
        </div>
        <div className="left-64 -z-10 lg:z-0 absolute top-2 w-[110px]">
          <Gear src={blueGear.src} isClockwise={1} speed={5}></Gear>
        </div>
        <div className=" w-2/3 flex items-center justify-center z-10 mt-10">
          <Row className="w-full items-center justify-center">
            {ProjectCards.map((card, index) => (
              <Col
                className="my-2 flex justify-evenly"
                xs={6}
                md={3}
                key={index}
              >
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
              </Col>
            ))}
          </Row>
        </div>

        <div className="flex flex-row justify-between w-full mt-32 z-20 overflow-clip">
          <img src={bars.src} className=" w-1/2" />
          <img src={bars.src} className="rotate-180 translate-x-2 w-1/2 " />
        </div>
      </div>
      <div className="w-full h-20"></div>
    </div>
  );
};

export default ProjectSection;

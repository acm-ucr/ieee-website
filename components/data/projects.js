import solarcar2 from "../../public/pictures/solarcar/solarcar2.webp";
import solarcar3 from "../../public/pictures/solarcar/solarcar3.webp";
/* import uas1 from "../../public/pictures/uas/uas1.webp";
import uas2 from "../../public/pictures/uas/uas2.webp"; */
import robosub1 from "../../public/pictures/robosub/robosub1.webp";
import robosub2 from "../../public/pictures/robosub/robosub2.webp";
/* import UAS from "../../public/pictures/uas/UAS.webp"; */
import solacor from "../../public/pictures/solarcar/solarcar.svg";
import robosub from "../../public/pictures/robosub/robosub.webp";

import vexu from "../../public/pictures/vexu/vexu.webp";

import vexU5 from "../../public/pictures/vexu/vexU5.webp";
import vexU6 from "../../public/pictures/vexu/vexU6.webp";

export const projects = [
  {
    title: "Solar Car",
    detail: "solarcar",
    color: "bluePurple",
    textColor: "text-ieee-bluePurple hover:text-ieee-bluePurple",
    bgColor: "bg-ieee-bluePurple",
    borderColor: "border-ieee-bluePurple",
    logo: <img src={solacor.src} alt="solar car" />,
    links: {
      instagram: "https://www.instagram.com/ucrsolarcar/",
      facebook: "https://www.facebook.com/UCRSolarCar/",
      linkedIn: "https://www.linkedin.com/company/ucr-solar-car/about/",
      email: "solarcar@ieeeucr.org",
    },
    img1: solarcar2.src,
    img2: solarcar3.src,
    text: " The University of California Riverside Solar Car team consists of many talented, undergraduate students who aim to construct a full-scaled solar car to compete in the Formula Sun Grand Prix, and the American Solar Challenge: a national collegiate competition which requires teams and their solar-powered vehicles to finish a 2,000 mile cross-country journey.",
  },
  /*   {
    title: "UAS",
    detail: "uas",
    color: "pinkPurple",
    textColor: "text-ieee-pinkPurple hover:text-ieee-pinkPurple",
    bgColor: "bg-ieee-pinkPurple",
    borderColor: "border-ieee-pinkPurple",
    logo: <img src={UAS.src} alt="UAS" />,
    links: {
      website: "https://ucr-uas.weebly.com",
      instagram: "https://www.instagram.com/ucruas/",
      facebook: "https://www.facebook.com/ucruas",
      linkedIn: "https://www.linkedin.com/company/ucruas/about/",
      email: "uas@ieeeucr.org",
    },
    img1: uas2.src,
    img2: uas1.src,
    text: " The University of California Riverside Solar Car team consists of many talented, undergraduate students who aim to construct a full-scaled solar car to compete in the Formula Sun Grand Prix, and the American Solar Challenge: a national collegiate competition which requires teams and their solar-powered vehicles to finish a 2,000 mile cross-country journey.",
  }, */
  {
    title: "RoboSub",
    color: "darkblue",
    textColor: "text-ieee-darkblue hover:text-ieee-darkblue",
    bgColor: "bg-ieee-darkblue",
    borderColor: "border-ieee-darkblue",
    detail: "robosub",
    logo: <img src={robosub.src} alt="robosub" />,
    links: {
      website: "https://robosubucr.weebly.com/",
      instagram: "https://www.instagram.com/robosubucr/?hl=en",
      linkedIn: "https://www.linkedin.com/company/robosubucr/about/",
      email: "robosub@ieee.edu",
    },
    img1: robosub2.src,
    img2: robosub1.src,
    text: "TWe are a diverse team of students from University of California, Riverside dedicated to exploring robotics of all applications. Drawing from across all STEM disciplines, we focus on advancing the art of autonomous technology and using systems engineering principles in a real project.",
  },
  {
    title: "VexU",
    detail: "vexU",
    color: "pink",
    textColor: "text-ieee-pink hover:text-ieee-pink",
    bgColor: "bg-ieee-pink",
    borderColor: "border-ieee-pink",
    logo: <img src={vexu.src} alt="vexu" />,
    links: {
      email: "ucrvexrobotics@gmail.com",
      website: "https://discord.gg/rT8NWQbxtR",
    },
    img1: vexU6.src,
    img2: vexU5.src,
    text: "We are Ursa Mechanica, the VexU robotics team from University of California, Riverside. We design, build, and test robots to acheive our goal of qualifying in the VexU World Championships. We strive to learn and grow in our ability in robotics.",
  },
];

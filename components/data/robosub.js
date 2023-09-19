import robosub1 from "../../public/pictures/robosub/robosub1.png";
import robosub2 from "../../public/pictures/robosub/robosub2.png";
export const robosubPage = [
  {
    type: "title",
    text: "About RoboSub",
  },
  {
    type: "picture",
    content: {
      src: robosub1.src,
      width: 12,
    },
  },
  {
    type: "text",
    content: [
      {
        text: "The RoboSub international competition requires students ranging from middle schoolers to college graduates to build a fully autonomous submarine. The subs are required to run through an underwater obstacle course and complete task all on its own, without external help from anyone. Some of the task include moving through gates, bumping into colored buoys in a specific order, picking up and placing objects, firing torpedoes through targets, detect the location of pingers etc. The competition takes place during the last week of July in the SSC Pacific Transdec, a Navel test facility in San Diego.",
      },
    ],
  },
  {
    type: "text",
    content: [
      {
        text: "The UCR RoboSub team is an IEEE project and we competed for the first time over the previous summer. After 5 days of debugging, quick fixes, and countless training runs, we qualified for semi-finals and placed 14th out of 50 schools as our final ranking. Our team consist of 4 branches: Mechanical, Electrical, Software, and Business. Last competition we only had about 10 members; this year we have grown to 25+ members.",
      },
    ],
  },
  {
    type: "text",
    content: [
      {
        text: "The Mechanical team is responsible for building the submarine. Some of the parts they work on are the chassis, frame, torpedoes, manipulator, and drop weights. They design these parts using SolidWorks and manufacture most of the custom parts with a 3D printer.",
      },
    ],
  },
  {
    type: "text",
    content: [
      {
        text: "The Electrical team is in charge of power management and signal processing from all of the sensors and motors. They work with temperature sensors, pressure sensors, IMUs, microcontrollers, cameras, and hydrophones.",
      },
    ],
  },
  {
    type: "text",
    content: [
      {
        text: "The Software team has to program the sub to recognize each task, either visually (with a camera) or acoustically (by using the hydrophones to detect pingers near some of the task). The software team also has to program the sub to preform each task once the sub has recognized them. They work with stm32 microcontrollers and an Intel NUC. The programming languages they use are C++ and Python.",
      },
    ],
  },
  {
    type: "text",
    content: [
      {
        text: "The Business team acquires sponsorships, so the team has funding. They also manage the media section of the team, which involves keeping our Facebook, Twitter, and Instagram updated; as well as, managing our website.",
      },
    ],
  },

  {
    type: "text",
    content: [
      {
        link: "robosub.ucr.edu",
        text: "Come check our website: robosub.ucr.edu",
      },
    ],
  },
  {
    type: "picture",
    content: {
      src: robosub2.src,
      width: 12,
      text: "The Competition",
    },
  },
];

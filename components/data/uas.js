import uas1 from "../../public/pictures/uas/uas1.webp";
import uas2 from "../../public/pictures/uas/uas2.webp";
import uas3 from "../../public/pictures/uas/uas3.webp";
export const uasPage = [
  {
    type: "title",
    text: "About UAS",
  },
  {
    type: "text",
    content: [
      {
        text: "UCR Unmanned Aerial Systems is a highly-motivated and interdisciplinary group of students designing, constructing and programming an autonomous aerial vehicle to compete in the annual",
      },
      {
        link: "https://suas-competition.org/",
        text: " Association for Unmanned Vehicle Systems International Student Unmanned Aerial Systems Competition (AUVSI-SUAS)",
      },
    ],
  },
  {
    type: "picture",
    content: {
      src: uas1.src,
      width: 12,
    },
  },
  {
    type: "title",
    text: "Mission Statement",
  },
  {
    type: "text",
    content: [
      {
        text: "The Association for Unmanned Vehicle Systems International is the world's largest non-profit organization devoted exclusively to advancing the unmanned systems and robotics community. Serving more than 7,500 members from government organizations, industry and academia, AUVSI is committed to fostering, developing, and promoting unmanned systems and robotic technologies. AUVSI Seafarer chapter sponsors an international Unmanned Aerial System competition where Universities and High Schools from around the world design and build their own Unmanned Aerial Vehicles. The UAVs have to be able to complete autonomous flight, target acquisition, and capable of autonomous takeoff & landing. UCR IEEE and ASME students will be competing for the upcoming competition in Maryland.",
      },
    ],
  },
  {
    type: "picture",
    content: {
      src: uas2.src,
      width: 12,
    },
  },
  {
    type: "text",
    content: [
      {
        text: "TOur UAV team consists of Mechanical Engineering, Electrical Engineering, and Computer Science & Engineering students. The team is comprised of the Electrical Systems, Mechanical Systems, and Computer Vision teams. The Electrical System team is responsible for the autonomous flight, navigation, and base station communication. The Mechanical Engineering teams are in charge of the design, fabrication, and repairing the aerial vehicle. The object detection team is responsible for designing and testing an algorithm that is capable of autonomously detecting specified ground targets. Students get hands on experience with CAD modeling, power system design, manufacturing processes, RC systems, configuring servers, writing scripts, writing object detection algorithms and working with autonomous systems. Most importantly, participating students get their hands dirty by applying their knowledge while learning new skills that can be directly transferred to the workforce.",
      },
    ],
  },
  {
    type: "text",
    content: [
      {
        text: "All students of any year are welcome to join the UCR Unmanned Aerial Systems (UCR UAS) team!",
      },
    ],
  },
  {
    type: "text",
    content: [
      {
        link: "https://www.facebook.com/groups/118885211603855/",
        text: "Check out Facebook Page",
      },
    ],
  },
  {
    type: "picture",
    content: {
      src: uas3.src,
      width: 12,
    },
  },
];

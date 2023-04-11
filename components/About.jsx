import React from "react";
import Title from "./Title";
const About = () => {
  return <div className="flex flex-col items-center">
    <Title title="About IEE"/>
    <p className="text-center w-9/12 font-giden">{'IEEE (pronounced "I triple E") is the Institute of Electrical and Electronics Engineers. We are a group dedicated to professionalism, connections, and our projects.'}</p>

    <button className=''> checkout events </button>
  </div>;
};

export default About;

import React from "react";
import ProjectPage from "@/components/projects/ProjectPage";
import { solarcarPage } from "@/components/data/solarcar";
const solarcar = () => {
  return <ProjectPage contents={solarcarPage} />;
};

export default solarcar;

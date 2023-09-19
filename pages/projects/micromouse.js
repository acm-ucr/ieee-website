import React from "react";
import ProjectPage from "@/components/projects/ProjectPage";
import { micromousePage } from "@/data/micromouse";
const micromouse = () => {
  return <ProjectPage contents={micromousePage} />;
};

export default micromouse;

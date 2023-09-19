import React from "react";
import ProjectPage from "@/components/ProjectPage";
import { micromousePage } from "@/components/data/micromouse";
const micromouse = () => {
  return <ProjectPage contents={micromousePage} />;
};

export default micromouse;

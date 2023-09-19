import React from "react";
import ProjectPage from "@/components/projects/ProjectPage";
import { uasPage } from "@/data/uas";
const uas = () => {
  return <ProjectPage contents={uasPage} />;
};

export default uas;

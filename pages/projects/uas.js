import React from "react";
import ProjectPage from "@/components/projects/ProjectPage";
import { uasPage } from "@/components/data/uas";
const uas = () => {
  return <ProjectPage contents={uasPage} />;
};

export default uas;

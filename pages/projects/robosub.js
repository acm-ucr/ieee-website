import React from "react";
import ProjectPage from "@/components/projects/ProjectPage";
import { robosubPage } from "@/data/robosub";
const robosub = () => {
  return <ProjectPage contents={robosubPage} />;
};

export default robosub;

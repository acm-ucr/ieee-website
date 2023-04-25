import React from "react";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Join from "@/components/Join";
import ProjectSection from "@/components/ProjectSection";

export default function Home() {
  return (
    <div>
      <Landing />
      <About />
      <ProjectSection />
      <Join />
    </div>
  );
}

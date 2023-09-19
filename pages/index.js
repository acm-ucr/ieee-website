import React from "react";
import Landing from "@/components/home/Landing";
import About from "@/components/home/About";
import Join from "@/components/home/Join";
import ProjectSection from "@/components/home/ProjectSection";

export default function Home() {
  return (
    <>
      <Landing />
      <About />
      <ProjectSection />
      <Join />
    </>
  );
}

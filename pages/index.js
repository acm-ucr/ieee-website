import React from "react";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Join from "@/components/Join";
import ProjectSection from "@/components/ProjectSection";
import coil from "../public/assets/coil.svg";

export default function Home() {
  return (
    <div>
      <div className="relative z-10">
        <Landing />
        <About />
      </div>
      <div className="relative z-0">
        <img
          className="absolute left-0 -translate-y-[50%] w-1/2 z-0"
          src={coil.src}
        />
      </div>
      <ProjectSection />
      <Join />
    </div>
  );
}

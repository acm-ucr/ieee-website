import React from "react";
import Project from "@/components/Project";
import Title from "@/components/Title";

export default function projects() {
  return (
    <>
      <Title title="Projects" />
      <div className="w-full z-10 flex items-center justify-center">
        <Project />
      </div>
    </>
  );
}

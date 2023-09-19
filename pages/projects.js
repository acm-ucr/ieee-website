import React from "react";
import Project from "@/components/projects/Project";
import Title from "@/components/Title";

export default function projects() {
  return (
    <div className="w-full flex flex-col items-center justify-center py-16">
      <Title title="Projects" />
      <Project />
    </div>
  );
}

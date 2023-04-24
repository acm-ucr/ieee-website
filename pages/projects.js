import React from "react";
import Project from "@/components/Project";
import Title from "@/components/Title";

export default function projects() {
  // return <div className="">projects</div>;
  return (
    <div className="relative overflow-hidden">
      <img
        className="absolute z-0 scale-75 rotate-45 -left-1/3"
        src="/assets/triangle.svg"
      />
      <img className="absolute z-0 scale-75" src="/assets/triangle.svg" />
      <img className="absolute z-0 scale-75" src="/assets/triangle.svg" />
      <img className="absolute z-0 scale-75" src="/assets/triangle.svg" />
      <img className="absolute z-0 scale-75" src="/assets/triangle.svg" />
      <img className="absolute z-0 scale-75" src="/assets/gear-lightblue.svg" />
      <img className="absolute z-0 scale-75" src="/assets/gear-lightblue.svg" />
      <img
        className="absolute z-0 scale-75"
        src="/assets/gear-stroke-pink-blue.svg"
      />
      <img
        className="absolute z-0 scale-75"
        src="/assets/gear-stroke-pink-blue.svg"
      />
      <Title title="Projects" />
      <Project />
    </div>
  );
}

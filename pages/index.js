import React from "react";
import Landing from "@/components/Landing";
import About from "@/components/About";
import JoinCards from "@/components/JoinCards";

export default function Home() {
  return (
    <div>
      <Landing />
      <About />
      <JoinCards />
    </div>
  );
}

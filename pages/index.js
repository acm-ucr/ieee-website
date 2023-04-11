import React from "react";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Title from "@/components/Title";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-ieee-black">
      <Title title="About IEEE" />
      <Landing />
      <About />
    </div>

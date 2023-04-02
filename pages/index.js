// import { Inter } from "next/font/google";
import React from "react";
import Landing from "@/components/Landing";
import About from "@/components/About";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <Landing />
      <About />
    </div>
  );
}

import React from "react";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <Image src="/assets/ieee-only-logo.svg" alt="pic" fill="t" />
      <Landing />
      <About />
    </div>
  );
}

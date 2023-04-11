import React from "react";
import Landing from "@/components/Landing";
import About from "@/components/About";
import Title from "@/components/Title";
import JoinCard from "@/components/JoinCard";
// const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="bg-ieee-black">
      <Title title="About IEEE" />
      <JoinCard
        color="ieee-purple"
        name="Email us"
        icon="email"
        link="https://flowbite.com/docs/typography/links/"
      />
      <Landing />
      <About />
    </div>
  );
}

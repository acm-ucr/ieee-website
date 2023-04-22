import React from "react";
import BoardCard from "@/components/BoardCard";

export default function board() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-md-center">
        <BoardCard
          name="Chloe Georgiou"
          position="Chair"
          bgColor="bg-ieee-pinkPurple"
          textColor="text-ieee-pinkPurple"
          shadowColor="shadow-ieee-pink"
        />
        <BoardCard
          name="Laiba Hasan"
          position="Vice Chair"
          bgColor="bg-ieee-blue"
          textColor="text-ieee-blue"
          shadowColor="shadow-ieee-lightblue"
        />
      </div>

      <div className="row justify-content-md-center">
        <BoardCard
          name="Harrison Cooper"
          position="Secretary/Webmaster"
          bgColor="bg-ieee-purple"
          textColor="text-ieee-purple"
          shadowColor="shadow-ieee-bluePurple"
        />
        <BoardCard
          name="Andro Zaki"
          position="Treasurer"
          bgColor="bg-ieee-blue"
          textColor="text-ieee-blue"
          shadowColor="shadow-ieee-bluePurple"
        />
        <BoardCard
          name="Connor Stewart"
          position="Professional Development"
          bgColor="bg-ieee-pinkPurple"
          textColor="text-ieee-pinkPurple"
          shadowColor="shadow-ieee-pink"
        />
      </div>

      <div className="row justify-content-md-center">
        <BoardCard
          name="Nicholas Kang"
          position="Program Chair"
          bgColor="bg-ieee-pink"
          textColor="text-ieee-pink"
          shadowColor="shadow-ieee-pinkPurple"
        />
        <BoardCard
          name="Alexander Hickerson"
          position="Program Chair"
          bgColor="bg-ieee-bluePurple"
          textColor="text-ieee-bluePurple"
          shadowColor="shadow-ieee-pink"
        />
      </div>

      <div className="row justify-content-md-center">
        <BoardCard
          name="Sethya Pugal"
          position="Robotics Coordinator"
          bgColor="bg-ieee-blue"
          textColor="text-ieee-blue"
          shadowColor="shadow-ieee-lightblue"
        />
        <BoardCard
          name="Sonny Ding"
          position="Robotics Coordinator"
          bgColor="bg-ieee-purple"
          textColor="text-ieee-purple"
          shadowColor="shadow-ieee-bluePurple"
        />
      </div>

      <div className="row justify-content-md-center">
        <BoardCard
          name="Divyank Shah"
          position="Solar Car Coordinator"
          bgColor="bg-ieee-purple"
          textColor="text-ieee-purple"
          shadowColor="shadow-ieee-blue"
        />
        <BoardCard
          name="Daisy Rojas Garcia"
          position="Solar Car Coordinator"
          bgColor="bg-ieee-pinkPurple"
          textColor="text-ieee-pinkPurple"
          shadowColor="shadow-ieee-bluePurple"
        />
      </div>

      <div className="row justify-content-md-center">
        <BoardCard
          name="Benjamin Bravo"
          position="Fundraising Chair"
          bgColor="bg-ieee-blue"
          textColor="text-ieee-blue"
          shadowColor="shadow-ieee-bluePurple"
        />
        <BoardCard
          name="Saraí Herrerra"
          position="Fundraising Chair"
          bgColor="bg-ieee-pink"
          textColor="text-ieee-pink"
          shadowColor="shadow-ieee-pinkPurple"
        />
      </div>

      <div className="row justify-content-md-center">
        <BoardCard
          name="Anthony Villicana"
          position="Historian"
          bgColor="bg-ieee-bluePurple"
          textColor="text-ieee-bluePurple"
          shadowColor="shadow-ieee-pink"
        />
        <BoardCard
          name="Zinal Patel"
          position="Robosub Coordinator"
          bgColor="bg-ieee-pinkPurple"
          textColor="text-ieee-pinkPurple"
          shadowColor="shadow-ieee-pink"
        />
        <BoardCard
          name="Sreekar Vattipalli"
          position="Graduate Student Representative"
          bgColor="bg-ieee-blue"
          textColor="text-ieee-blue"
          shadowColor="shadow-ieee-lightblue"
        />
      </div>
    </div>
  );
}

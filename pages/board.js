import React from "react";
import BoardCard from "@/components/BoardCard";

export default function board() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-md-center">
        <BoardCard name="Chloe Georgiou" position="Chair" />
        <BoardCard name="Bob" position="Vice Chair" />
        <BoardCard name="Chloe Georgiou" position="Secretary" />
        <BoardCard name="Chloe Georgiou the Second" position="Program Chair" />
      </div>
      <div className="row justify-content-md-center">
        <BoardCard name="Chloe Georgiou" position="Historian" />
        <BoardCard name="Chloe Georgiou" position="Treasurer" />
        <BoardCard name="Chloe Georgiou" position="Coordinator" />
        <BoardCard name="Chloe Georgiou" position="Chair" />
        <BoardCard name="Chloe Georgiou" position="Chair" />
      </div>
    </div>
  );
}

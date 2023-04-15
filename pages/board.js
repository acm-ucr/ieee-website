import React from "react";
import BoardCard from "@/components/BoardCard";

export default function board() {
  return (
    <div className="grid grid-cols-5">
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
      <BoardCard />
    </div>
  );
}

"use client";
import React from "react";
import {
  TextRevealCard,
  TextRevealCardDescription,
  TextRevealCardTitle,
} from "./ui/text-reveal-card";

export function Collaboration() {
  return (
    <div className="flex items-center justify-center md:h-[40rem] h-[30rem] pt-20 rounded-2xl w-full">
      <TextRevealCard
        text="You know the business"
        revealText="I am open for collaboration."
      >
        <TextRevealCardTitle>
          Sometimes, you just need the Right people.
        </TextRevealCardTitle>
        <TextRevealCardDescription>
        The Right team and your vision can bring your Biggest Dreams to Life step by step & The Best thing is...
        </TextRevealCardDescription>
      </TextRevealCard>
    </div>
  );
}

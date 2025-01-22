"use client";
import { animatePageIn } from "@/utils/animate";
import { ReactNode, useEffect } from "react";

export default function Template({ children }: { children: ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <div
        id="banner-1"
        className="w-1/4 min-h-screen bg-neutral-950 fixed top-0 left-0 z-10"
      />
      <div
        id="banner-2"
        className="w-1/4 min-h-screen bg-neutral-950 fixed top-0 left-1/4 z-10"
      />
      <div
        id="banner-3"
        className="w-1/4 min-h-screen bg-neutral-950 fixed top-0 left-2/4 z-10"
      />
      <div
        id="banner-4"
        className="w-1/4 min-h-screen bg-neutral-950 fixed top-0 left-3/4 z-10"
      />
      {children}
    </div>
  );
}

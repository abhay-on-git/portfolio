"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// Cubic bezier that mimics the feel of native iOS momentum scrolling
const smoothEase = (t: number) => {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
};

export default function SmoothScrollProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.8,           // longer glide
      easing: smoothEase,
      smoothWheel: true,
      wheelMultiplier: 0.75,   // slower per tick → more control
      touchMultiplier: 1.2,
      infinite: false,
    });

    lenisRef.current = lenis;

    // Sync ScrollTrigger on every Lenis scroll event
    lenis.on("scroll", ScrollTrigger.update);

    // Use GSAP ticker as the single RAF source — eliminates double-rAF jank
    const tick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(tick);
    gsap.ticker.lagSmoothing(0); // never compensate for missed frames

    return () => {
      gsap.ticker.remove(tick);
      lenis.destroy();
      lenisRef.current = null;
    };
  }, []);

  return <>{children}</>;
}

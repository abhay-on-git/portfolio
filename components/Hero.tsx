"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaArrowDown, FaLink } from "react-icons/fa";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const MARQUEE_TEXT = "ABHAYAGNIHOTRI";
const NAV_HEIGHT = 76; // accounts for floating nav (12px top margin + 48px height + 16px gap)

const Hero = () => {
  const portraitRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Force GPU layers on animated elements before animation starts
      gsap.set([navRef.current, marqueeRef.current, portraitRef.current, bottomRef.current], {
        force3D: true,
        willChange: "transform, opacity",
      });

      const tl = gsap.timeline({
        defaults: { ease: "expo.out" },
        delay: 0.1,
      });

      // Navbar glides down
      tl.fromTo(
        navRef.current,
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2 }
      )
        // Marquee sweeps up
        .fromTo(
          marqueeRef.current,
          { opacity: 0, y: 60 },
          { opacity: 1, y: 0, duration: 1.6 },
          "-=0.9"
        )
        // Portrait rises from below
        .fromTo(
          portraitRef.current,
          { opacity: 0, y: 100 },
          { opacity: 1, y: 0, duration: 1.8, ease: "power4.out" },
          "-=1.2"
        )
        // Bottom bar fades in
        .fromTo(
          bottomRef.current,
          { opacity: 0, y: 10 },
          { opacity: 1, y: 0, duration: 0.9 },
          "-=0.6"
        );

      // ── Exit parallax: hero recedes as content slides over ──
      // Portrait drifts up and shrinks
      gsap.to(portraitRef.current, {
        y: -60,
        scale: 0.93,
        ease: "none",
        scrollTrigger: {
          start: "top top",
          end: "+=70%",
          scrub: 2,
        },
      });

      // Marquee fades and lifts
      gsap.to(marqueeRef.current, {
        opacity: 0,
        y: -40,
        ease: "none",
        scrollTrigger: {
          start: "top top",
          end: "+=50%",
          scrub: 2,
        },
      });

      // Nav and bottom bar fade out
      gsap.to([navRef.current, bottomRef.current], {
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          start: "top top",
          end: "+=30%",
          scrub: 1.5,
        },
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <section className="relative w-full h-screen bg-[#ebebeb] overflow-hidden">

      {/* ── Layer 0: Fine grid ── */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(to right,#00000018 1px,transparent 1px)," +
            "linear-gradient(to bottom,#00000018 1px,transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* ── Layer 1: Marquee text ── */}
      <div
        ref={marqueeRef}
        className="absolute z-10 w-full overflow-hidden pointer-events-none select-none flex items-center"
        style={{
          top: `${NAV_HEIGHT}px`,
          bottom: 0,
        }}
      >
        <div className="marquee-track">
          {/* Two identical halves → seamless CSS loop */}
          {[0, 1].map((half) => (
            <div key={half} className="flex items-center">
              {[0, 1, 2].map((i) => (
                <span
                  key={i}
                  className="whitespace-nowrap"
                  style={{
                    fontFamily: "var(--font-big-shoulders)",
                    fontSize: `calc((100vh - ${NAV_HEIGHT}px) * 0.92)`,
                    lineHeight: 1,
                    letterSpacing: "0.03em",
                    paddingRight: "0",
                    color: "#111",
                    fontWeight: 500,
                  }}
                >
                  {MARQUEE_TEXT}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* ── Layer 2: Portrait ── */}
      <div
        ref={portraitRef}
        className="absolute z-20 left-1/2 -translate-x-1/2 bottom-0"
        style={{
          height: "95vh",
          width: "min(72vw, 780px)",
        }}
      >
        <Image
          src="/portrait.png"
          alt="Abhay"
          fill
          className="object-contain object-bottom"
          priority
        />
      </div>

      {/* ── Layer 3: Navbar — floating card ── */}
      <header
        ref={navRef}
        className="absolute left-4 right-4 z-30 flex items-center justify-between px-5 bg-[#e2e2e2]/80 backdrop-blur-md border border-black/[0.1] rounded-xl shadow-[0_2px_20px_rgba(0,0,0,0.07)]"
        style={{ top: "12px", height: "48px" }}
      >
        {/* Left — monogram + divider + label */}
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 bg-black text-white flex items-center justify-center text-[8px] font-bold tracking-widest flex-shrink-0 rounded-[4px]">
            AB
          </div>

          <div className="hidden sm:flex items-center gap-3">
            <div className="w-px h-4 bg-black/15" />
            <p className="text-[10px] uppercase tracking-[0.2em] text-black font-semibold leading-none">
              Creative Fullstack AI Engineer
            </p>
            {/* Availability dot with tooltip */}
            <div className="relative group flex items-center">
              {/* Outer glow ring */}
              <span className="absolute w-3 h-3 rounded-full bg-emerald-400/30 animate-ping" />
              {/* Inner dot */}
              <span className="relative w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_2px_rgba(16,185,129,0.5)] cursor-default" />

              {/* Tooltip — appears below */}
              <div className="absolute left-1/2 -translate-x-1/2 top-full mt-3 w-max opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-300 translate-y-0 group-hover:translate-y-1">
                {/* Arrow */}
                <div className="w-2.5 h-2.5 bg-black rotate-45 mx-auto -mb-[5px] rounded-[1px]" />
                <div className="bg-black text-white rounded-lg px-4 py-3 shadow-xl text-left">
                  <p className="text-[9px] uppercase tracking-[0.28em] text-emerald-400 mb-1 font-medium">
                    ● Open to opportunities
                  </p>
                  <p className="text-[11px] font-semibold tracking-wide leading-snug">
                    Currently looking for
                  </p>
                  <p className="text-[11px] font-semibold tracking-wide leading-snug">
                    interesting projects
                  </p>
                  <p className="text-[9px] text-white/40 mt-1.5 tracking-wide">
                    Let&apos;s build something great together.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right — Link Tree */}
        <a
          href="https://linktr.ee/abhayagnihotri"
          target="_blank"
          rel="noopener noreferrer"
          className="group flex items-center gap-1.5 text-[9px] uppercase tracking-[0.24em] text-black/70 hover:text-black transition-colors duration-200"
        >
          <FaLink className="text-[8px] group-hover:rotate-12 transition-transform duration-200" />
          <span>Link Tree</span>
        </a>
      </header>

      {/* ── Layer 3: Bottom bar ── */}
      <div
        ref={bottomRef}
        className="absolute bottom-5 left-4 right-4 z-30 flex items-center justify-between"
      >
        {/* Left — Résumé */}
        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 text-[9px] uppercase tracking-[0.25em] text-black hover:text-black/60 transition-colors duration-200 bg-[#ebebeb]/90 backdrop-blur-sm px-3 py-1.5 rounded-md border border-black/[0.08]"
        >
          <FaLink className="text-[8px]" />
          <span>Résumé</span>
        </a>

        {/* Right — auto year */}
        <span className="text-[9px] text-black tracking-widest bg-[#ebebeb]/90 backdrop-blur-sm px-3 py-1.5 rounded-md border border-black/[0.08]">
          ©{new Date().getFullYear()}
        </span>
      </div>

    </section>
  );
};

export default Hero;

"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bioRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "top 20%",
          toggleActions: "play none none reverse",
        },
        defaults: { ease: "expo.out" },
      });

      tl.fromTo(
        headingRef.current,
        { x: -60, opacity: 0 },
        { x: 0, opacity: 1, duration: 1.2 }
      )
        .fromTo(
          bioRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1 },
          "-=0.8"
        )
        .fromTo(
          taglineRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          "-=0.6"
        )
        .fromTo(
          cardRef.current,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8 },
          "-=0.5"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="w-full py-24 md:py-32 border-b border-white/[0.06]"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-start">

        {/* Left — large heading */}
        <div>
          <h2
            ref={headingRef}
            className="text-[clamp(64px,10vw,140px)] font-black leading-none text-white tracking-tight"
            style={{ fontFamily: "var(--font-playfair)" }}
          >
            About
          </h2>
        </div>

        {/* Right — bio + details */}
        <div className="flex flex-col gap-8 pt-2">
          <div ref={bioRef}>
            <p className="text-white/80 text-lg md:text-xl leading-relaxed">
              <span className="text-white font-semibold">Abhay</span>{" "}
              <span className="text-white/40 text-sm uppercase tracking-widest">(he/him)</span>{" "}
              is a Creative Fullstack &amp; AI Engineer with a passion for
              crafting intuitive, high-performance digital experiences. He
              builds at the intersection of design and engineering — turning
              bold ideas into polished products that live and breathe on the
              internet.
            </p>
            <p className="text-white/50 text-base leading-relaxed mt-4">
              Currently based in India, Abhay works with modern stacks — Next.js,
              TypeScript, Node.js, and AI APIs — to deliver solutions that are
              as thoughtful as they are technical. Always exploring, always
              shipping.
            </p>
          </div>

          {/* Tagline */}
          <p
            ref={taglineRef}
            className="text-[10px] uppercase tracking-[0.3em] text-white/30 border-t border-white/[0.08] pt-6"
          >
            Building at the crossroads of AI &nbsp;—&nbsp; Fullstack &nbsp;—&nbsp; Design
          </p>

          {/* Role card */}
          <div
            ref={cardRef}
            className="flex items-center gap-4 bg-white/[0.04] border border-white/[0.08] rounded-xl px-5 py-4 w-fit"
          >
            <div className="w-10 h-10 rounded-lg bg-black border border-white/10 flex items-center justify-center text-[10px] font-bold tracking-widest text-white flex-shrink-0">
              AB
            </div>
            <div>
              <p className="text-white text-sm font-semibold leading-tight">
                Creative Fullstack AI Engineer
              </p>
              <p className="text-white/35 text-[11px] tracking-wide mt-0.5">
                Available for freelance &amp; full-time roles
              </p>
            </div>
            {/* Availability dot */}
            <span className="ml-2 w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_6px_2px_rgba(16,185,129,0.4)] flex-shrink-0" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;

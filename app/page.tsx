import { Approach } from "@/components/Approach";
import AboutSection from "@/components/AboutSection";
import Clients from "@/components/Clients";
import { Collaboration } from "@/components/Collaboration";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { TimelineView } from "@/components/TimelineView";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";

export default function Home() {
  return (
    <main className="relative">
      <FloatingNav navItems={navItems} />

      {/* Hero is sticky — stays pinned while content slides over it */}
      <div className="sticky top-0 z-10 h-screen w-full">
        <Hero />
      </div>

      {/* Content rises from bottom and covers the hero */}
      <div className="relative z-20 bg-black-100 rounded-t-[32px] shadow-[0_-12px_80px_rgba(0,0,0,0.35)] overflow-hidden sm:px-10 px-5">
        <AboutSection />
        <Grid />
        <TimelineView />
        <RecentProjects />
        <Clients />
        <Approach />
        <Collaboration />
        <Footer />
      </div>
    </main>
  );
}

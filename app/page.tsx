import { Approach } from "@/components/Approach";
import Clients from "@/components/Clients";
import { Collaboration } from "@/components/Collaboration";
import Footer from "@/components/Footer";
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { TimelineView } from "@/components/TimelineView";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { HoverBorderGradient } from "@/components/ui/hover-border-gradient";
import { navItems } from "@/data";
import Image from "next/image";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="bg-black-100 relative flex items-center justify-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <FloatingNav 
         navItems={navItems}
        />

      <Hero/>
     <Grid/>
     <TimelineView/>
     <RecentProjects/>
     <Clients/>
     <Approach/>
     <Collaboration/>
     <Footer/>
      </div>
    </main>
  );
}

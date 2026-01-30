import { StickyNav } from "@/components/StickyNav";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { TrustSection } from "@/components/TrustSection";
import { Projects } from "@/components/Projects";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 selection:bg-accent selection:text-slate-900">
      <StickyNav />

      {/* Scrollable sections */}
      <Hero />

      <div className="relative">
        {/* Transitional background decoration */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none opacity-50 z-0">
          <div className="absolute top-[10%] -left-1/4 w-[500px] h-[500px] bg-primary/20 rounded-full blur-[100px]" />
          <div className="absolute top-[40%] -right-1/4 w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[120px]" />
        </div>

        <Services />
        <TrustSection />
        <Projects />
      </div>

      <Footer />
    </main>
  );
}

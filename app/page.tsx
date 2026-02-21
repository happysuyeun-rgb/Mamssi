import Hero from "@/components/sections/Hero";
import GonggamForest from "@/components/sections/GonggamForest";
import WhySection from "@/components/sections/WhySection";
import PlantingSystem from "@/components/sections/PlantingSystem";
import InsightDashboard from "@/components/sections/InsightDashboard";
import B2BAndFooter from "@/components/sections/B2BAndFooter";

export default function Home() {
  return (
    <main className="relative">
      <Hero />
      <GonggamForest />
      <WhySection />
      <PlantingSystem />
      <InsightDashboard />
      <B2BAndFooter />
    </main>
  );
}


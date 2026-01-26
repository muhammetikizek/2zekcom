import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      
      {/* Scrollable sections will be added here (Features, Services, etc.) */}
      <section id="features" className="py-24" />
      <section id="services" className="py-24" />
      <section id="portfolio" className="py-24" />
    </main>
  );
}

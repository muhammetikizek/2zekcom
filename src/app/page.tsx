import Navbar from "@/components/layout/Navbar";
import Hero from "@/components/home/Hero";
import BentoGrid from "@/components/home/BentoGrid";
import Portfolio from "@/components/home/Portfolio";
import Footer from "@/components/layout/Footer";

export default function Home() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <BentoGrid />
      <Portfolio />
      <Footer />
    </main>
  );
}

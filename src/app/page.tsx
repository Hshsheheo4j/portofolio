import BackgroundCanvas from "@/components/layout/BackgroundCanvas";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Vision from "@/components/sections/Vision";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <BackgroundCanvas />
      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Projects />
      <Vision />
      <Experience />
      <Contact />

      <Footer />
    </main>
  );
}

import { Navigation } from "@/components/Navigation";
import { PageLoader } from "@/components/PageLoader";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Education } from "@/components/sections/Education";
import { Extras } from "@/components/sections/Extras";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/Footer";

export default function HomePage() {
  return (
    <>
      <PageLoader />
      <Navigation />
      <main className="bg-white text-zinc-900">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Education />
        <Extras />
        <Contact />
      </main>
      <Footer />
    </>
  );
}

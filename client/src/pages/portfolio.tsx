import { ThemeProvider } from "@/components/ThemeProvider";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Languages } from "@/components/Languages";
import { Projects } from "@/components/Projects";
import { FutureGoals } from "@/components/FutureGoals";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Portfolio() {
  return (
    <ThemeProvider defaultTheme="light">
      <div className="min-h-screen">
        <Navigation />
        <main>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Languages />
          <Projects />
          <FutureGoals />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

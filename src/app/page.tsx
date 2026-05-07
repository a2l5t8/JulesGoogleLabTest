import { Navbar, Footer, SectionContainer } from "@/components/layout";
import { Hero, About, Skills } from "@/components/sections/CoreSections";
import { Projects, Research, Experience, Contact } from "@/components/sections/SpecializedSections";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />

      <Hero />

      <SectionContainer id="about" title="About Me">
        <About />
      </SectionContainer>

      <SectionContainer id="skills" title="Technical Skills">
        <Skills />
      </SectionContainer>

      <SectionContainer id="projects" title="Featured Projects">
        <Projects />
      </SectionContainer>

      <SectionContainer id="research" title="Research & Vision">
        <Research />
      </SectionContainer>

      <SectionContainer id="experience" title="Professional Journey">
        <Experience />
      </SectionContainer>

      <SectionContainer id="contact" title="Get In Touch">
        <Contact />
      </SectionContainer>

      <Footer />
    </main>
  );
}

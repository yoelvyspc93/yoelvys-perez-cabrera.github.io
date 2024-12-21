import { Navigator } from "@/components/common/Navigator";
import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { Experience } from "@/components/sections/Experience";
import { Footer } from "@/components/sections/Footer";
import { Header } from "@/components/sections/Header";
import { Projects } from "@/components/sections/Projects";
import { Skills } from "@/components/sections/Skills";


export default function Home() {
  return (
    <div className="page">
      <Navigator />
      <main id="main">
        <Header />
        <About />
        <Projects />
        <Skills />
        <Experience />
        <Contact />
        <Footer />
      </main>
    </div>
  );
}

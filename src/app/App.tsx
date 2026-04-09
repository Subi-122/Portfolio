import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Experience } from './components/Experience';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0F172A] text-white overflow-x-hidden">
      {/* Navigation */}
      <Navigation />
      
      {/* Floating background blur circles */}
      <div className="fixed top-20 left-10 w-96 h-96 bg-[#6366F1] rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="fixed bottom-20 right-10 w-96 h-96 bg-[#22C55E] rounded-full blur-[120px] opacity-20 pointer-events-none" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#6366F1] rounded-full blur-[150px] opacity-10 pointer-events-none" />
      
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Experience />
      <Contact />
    </div>
  );
}

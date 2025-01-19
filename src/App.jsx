import About from "./sections/About";
import Clients from "./sections/Clients";
import Hero from "./sections/Hero";
import Navbar from "./sections/Navbar";
import Projects from "./sections/Projects";
import { Analytics } from "@vercel/analytics/react";

const App = () => {
  return (
    <>
      <main className="max-w-7xl mx-auto relative">
        <Navbar />
        <Hero />
        <About />
        <Projects />
        <Clients />
      </main>
      <Analytics />
    </>
  );
};

export default App;

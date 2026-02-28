import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";
import CTA from "../components/sections/CTA";
import Hero from "../components/sections/Hero";
import Problem from "../components/sections/Problem";
import Process from "../components/sections/Process";
import Results from "../components/sections/Results";
import Services from "../components/sections/Services";
import Solution from "../components/sections/Solution";
import About from "../components/sections/About";


const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <Solution />
      <Services />
      <Problem />
      <Results />
      <Process />
      <About />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Benefits from "./components/Benefits";
import Products from "./components/Products";
import Technology from "./components/Technology";
import Gallery from "./components/Gallery";
import Colours from "./components/Colours";
import Specs from "./components/Specs";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingCTA from "./components/FloatingCTA";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Benefits />
      <Products />
      <Technology />
      <Gallery />
      <Colours />
      <Specs />
      <About />
      <Contact />
      <Footer />
      <FloatingCTA />
    </main>
  );
}

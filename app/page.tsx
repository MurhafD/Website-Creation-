import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Products from "./components/Products";
import Technology from "./components/Technology";
import Colours from "./components/Colours";
import Specs from "./components/Specs";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Products />
      <Technology />
      <Colours />
      <Specs />
      <About />
      <Contact />
      <Footer />
    </main>
  );
}

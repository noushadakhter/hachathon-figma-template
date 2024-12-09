import About from "@/components/about";
import Hero from "@/components/hero";
import Image from "next/image";
import Pricing from "./pricing/page";
import Contact from "./contact/page";
import Login from "./loginPage/page"

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Pricing />
      <Contact />
      <Login />
      
    </div>
  );
}

import About from "@/components/about";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Reviews from "@/components/reviews";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Reviews />
      <Contact />
      <Footer />
    </main>
  );
}

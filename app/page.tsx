import Gallery from "@/components/gallery";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main className="lg:px-16 px-4">
      <Navbar />
      <Hero />
      <Gallery />
    </main>
  );
}
